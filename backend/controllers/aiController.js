const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ======================================================
// TAVILY WEB SEARCH
// ======================================================

const searchWeb = async (query) => {
  try {
    if (!process.env.TAVILY_API_KEY) {
      throw new Error("TAVILY_API_KEY is not configured");
    }

    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.TAVILY_API_KEY,
        query: query,
        search_depth: "basic",
        topic: "general",
        max_results: 8,
        include_answer: false,
        include_raw_content: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(`Tavily API error: ${errorText}`);
    }

    const data = await response.json();

    return data.results || [];
  } catch (error) {
    console.error("Tavily Search Error:", error.message);
    throw error;
  }
};

// ======================================================
// CHECK IF USER IS SEARCHING FOR ACCOMMODATION
// ======================================================

const isAccommodationQuestion = (message) => {
  const accommodationKeywords = [
    "hotel",
    "homestay",
    "hostel",
    "resort",
    "cottage",
    "stay",
    "stays",
    "accommodation",
    "room",
    "rooms",
    "villa",
    "guest house",
    "guesthouse",
    "lodge",
    "place to stay",
    "where should i stay",
    "where can i stay",
    "book a stay",
    "cheap stay",
    "affordable stay",
    "best stay",
  ];

  const text = message.toLowerCase();

  return accommodationKeywords.some((keyword) =>
    text.includes(keyword)
  );
};

// ======================================================
// EXTRACT JSON FROM GEMINI RESPONSE
// ======================================================

const extractJSON = (text) => {
  try {
    return JSON.parse(text);
  } catch (error) {
    // Gemini sometimes returns JSON inside ```json ... ```
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(cleaned);
    } catch (secondError) {
      // Try extracting the JSON object
      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");

      if (start !== -1 && end !== -1) {
        const jsonString = cleaned.substring(start, end + 1);

        return JSON.parse(jsonString);
      }

      throw new Error("Unable to parse AI response as JSON");
    }
  }
};

// ======================================================
// MAIN AI CONTROLLER
// ======================================================

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    // --------------------------------------------------
    // VALIDATE MESSAGE
    // --------------------------------------------------

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // --------------------------------------------------
    // DETERMINE SEARCH TYPE
    // --------------------------------------------------

    const accommodationSearch = isAccommodationQuestion(message);

    // --------------------------------------------------
    // CREATE SEARCH QUERY
    // --------------------------------------------------

    let searchQuery;

    if (accommodationSearch) {
      searchQuery = `
Find accommodation options matching this travel request:

${message}

Search across different accommodation and travel websites.

Look for:
- Hotels
- Homestays
- Resorts
- Cottages
- Hostels
- Guest houses

Try to find:
- Property name
- Location
- Price
- Rating
- Stay type
- Important amenities
- Source website
- Direct page URL

Return useful and current search results.
      `.trim();
    } else {
      searchQuery = `
Find current and reliable travel information for:

${message}

Focus on:
- Uttarakhand
- Indian Himalayas
- Destinations
- Attractions
- Trekking
- Transportation
- Food
- Travel planning
- Accommodation
- Safety
      `.trim();
    }

    // --------------------------------------------------
    // SEARCH INTERNET
    // --------------------------------------------------

    const searchResults = await searchWeb(searchQuery);

    // --------------------------------------------------
    // FORMAT SEARCH RESULTS FOR GEMINI
    // --------------------------------------------------

    const formattedResults = searchResults
      .map((result, index) => {
        return `
SOURCE ${index + 1}

Title:
${result.title || "Unknown"}

URL:
${result.url || "No URL"}

Content:
${result.content || "No content available"}
`;
      })
      .join("\n");

    // --------------------------------------------------
    // ACCOMMODATION PROMPT
    // --------------------------------------------------

    let prompt;

    if (accommodationSearch) {
      prompt = `
You are PahadiNest AI, a smart travel accommodation recommendation assistant.

The user asked:

"${message}"

Below are live web search results.

You must analyze these results and recommend the BEST accommodation options.

IMPORTANT:

1. Do NOT invent properties.
2. Do NOT invent prices.
3. Do NOT invent ratings.
4. Do NOT invent URLs.
5. Only use information present in the search results.
6. If a property does not have a price, use "Price not available".
7. If a property does not have a rating, use "Rating not available".
8. Only include a URL that appears in the search results.
9. Recommend a maximum of 5 options.
10. Rank them according to the user's requirements.
11. Prioritize affordability, rating, location and requested preferences.
12. Do not claim PahadiNest handles booking.
13. The user will be redirected to the original provider website.
14. Prices and availability can change.
15. Keep recommendations concise.

RETURN ONLY VALID JSON.

The JSON MUST have exactly this structure:

{
  "intro": "Short introduction for the user",
  "recommendations": [
    {
      "name": "Property name",
      "location": "Location",
      "price": "Price or Price not available",
      "rating": "Rating or Rating not available",
      "type": "Hotel/Homestay/Resort/etc.",
      "whyRecommended": "Short reason why this property matches the user",
      "sourceName": "Website name",
      "url": "Full source URL"
    }
  ],
  "note": "Short note that prices and availability should be verified on the original website"
}

LIVE SEARCH RESULTS:

${formattedResults || "No search results were found."}
`;
    } else {
      // ------------------------------------------------
      // NORMAL TRAVEL QUESTION
      // ------------------------------------------------

      prompt = `
You are PahadiNest AI, a helpful travel assistant focused on
Uttarakhand and the Indian Himalayas.

The user asked:

"${message}"

Use the live search results below to answer the question.

IMPORTANT:

1. Use the search results as the primary source.
2. Do not invent current information.
3. Do not invent URLs.
4. Keep the answer concise and useful.
5. Use simple formatting.
6. Mention sources when useful.

RETURN ONLY VALID JSON.

Use exactly this structure:

{
  "intro": "Your answer to the user's question",
  "recommendations": [],
  "note": ""
}

LIVE SEARCH RESULTS:

${formattedResults || "No search results were found."}
`;
    }

    // --------------------------------------------------
    // GEMINI
    // --------------------------------------------------

    const response = await ai.models.generateContent({
      model: "models/gemini-flash-latest",
      contents: prompt,
    });

    const rawText = response.text || "";

    // --------------------------------------------------
    // PARSE GEMINI JSON
    // --------------------------------------------------

    let aiData;

    try {
      aiData = extractJSON(rawText);
    } catch (parseError) {
      console.error("Gemini JSON Parse Error:", parseError.message);
      console.error("Raw Gemini Response:", rawText);

      // Fallback if Gemini doesn't return valid JSON
      aiData = {
        intro: rawText,
        recommendations: [],
        note: "",
      };
    }

    // --------------------------------------------------
    // CLEAN RECOMMENDATIONS
    // --------------------------------------------------

    const recommendations = Array.isArray(
      aiData.recommendations
    )
      ? aiData.recommendations
          .slice(0, 5)
          .map((item) => ({
            name: item.name || "Accommodation",
            location: item.location || "Location unavailable",
            price: item.price || "Price not available",
            rating:
              item.rating || "Rating not available",
            type: item.type || "Stay",
            whyRecommended:
              item.whyRecommended ||
              "This property matches your search.",
            sourceName:
              item.sourceName || "External website",
            url: item.url || "",
          }))
          .filter((item) => item.url)
      : [];

    // --------------------------------------------------
    // SEND RESPONSE TO FRONTEND
    // --------------------------------------------------

    res.status(200).json({
      success: true,

      reply:
        aiData.intro ||
        "Here are some options based on your search.",

      accommodationSearch,

      recommendations,

      note:
        aiData.note ||
        "Prices and availability may change. Please verify the final details on the provider's website.",

      sources: searchResults
        .filter((result) => result.url)
        .slice(0, 8)
        .map((result) => ({
          title: result.title || "Source",
          url: result.url,
        })),
    });
  } catch (error) {
    console.error("AI/Web Search Error:", error);

    res.status(500).json({
      success: false,
      message:
        error.message ||
        "Unable to search the web and generate recommendations.",
    });
  }
};

module.exports = {
  chatWithAI,
};