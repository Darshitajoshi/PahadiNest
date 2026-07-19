const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const prompt = `
You are the AI Travel Assistant for PahadiNest.

Answer only travel-related questions.
Be friendly, informative, and concise.

User Question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "models/gemini-flash-latest",
      contents: prompt,
    });

    res.status(200).json({
      success: true,
      reply: response.text,
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};