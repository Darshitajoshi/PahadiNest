import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaUserCircle,
  FaPaperPlane,
  FaCopy,
  FaTrash,
  FaMountain,
  FaLocationArrow,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaStar,
  FaHome,
  FaRupeeSign,
} from "react-icons/fa";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const suggestions = [
  "Find me 5 affordable homestays in Chopta for 2 people with mountain views under ₹2500 per night.",
  "Find affordable stays in Mussoorie for 2 people under ₹3000.",
  "Find the best budget homestays in Nainital.",
  "Find affordable stays near Kedarkantha for 2 people.",
  "Find budget-friendly stays in Auli with mountain views.",
  "Find the best affordable homestays in Rishikesh.",
];

const welcomeMessage = {
  sender: "ai",
  text: `# 👋 Welcome to PahadiNest AI

I'm your AI Travel Assistant.

Ask me about:

🏔 **Trip Planning**

🏡 **Homestays & Hotels**

📍 **Tourist Places**

🧳 **Packing**

🍲 **Local Food**

🚕 **Transport**

💰 **Budget Travel**

I can also search the web and suggest affordable stays based on your location, budget, number of people, and preferences.`,
  recommendations: [],
  note: "",
};

const AIChat = () => {
  const bottomRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("pahadi-chat");

      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Unable to load saved chat:", error);
    }

    return [welcomeMessage];
  });

  // --------------------------------------------------
  // SAVE CHAT + AUTO SCROLL
  // --------------------------------------------------

  useEffect(() => {
    try {
      localStorage.setItem(
        "pahadi-chat",
        JSON.stringify(messages)
      );
    } catch (error) {
      console.error("Unable to save chat:", error);
    }

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }, [messages, loading]);

  // --------------------------------------------------
  // ASK AI
  // --------------------------------------------------

  const askAI = async (question = "") => {
    const text = question || message;

    if (!text.trim() || loading) {
      return;
    }

    const updatedMessages = [
      ...messages,
      {
        sender: "user",
        text: text.trim(),
        recommendations: [],
        note: "",
      },
    ];

    setMessages(updatedMessages);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/api/ai/chat`,
        {
          message: text.trim(),
        },
        {
          timeout: 120000,
        }
      );

      const aiMessage = {
        sender: "ai",
        text:
          res.data.reply ||
          "Here are some recommendations based on your search.",
        recommendations:
          Array.isArray(res.data.recommendations)
            ? res.data.recommendations
            : [],
        note: res.data.note || "",
      };

      setMessages([
        ...updatedMessages,
        aiMessage,
      ]);
    } catch (error) {
      console.error(
        "AI Chat Error:",
        error.response?.data || error.message
      );

      let errorMessage =
        "❌ Sorry! Something went wrong. Please try again.";

      if (error.response?.data?.message) {
        errorMessage = `❌ ${error.response.data.message}`;
      } else if (error.code === "ECONNABORTED") {
        errorMessage =
          "⏳ The web search took too long. Please try again.";
      }

      setMessages([
        ...updatedMessages,
        {
          sender: "ai",
          text: errorMessage,
          recommendations: [],
          note: "",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // COPY MESSAGE
  // --------------------------------------------------

  const copyMessage = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // --------------------------------------------------
  // CLEAR CHAT
  // --------------------------------------------------

  const clearChat = () => {
    localStorage.removeItem("pahadi-chat");

    setMessages([welcomeMessage]);
  };

  // --------------------------------------------------
  // RECOMMENDATION CARD
  // --------------------------------------------------

  const RecommendationCard = ({
    recommendation,
    index,
  }) => {
    const {
      name,
      location,
      price,
      rating,
      type,
      whyRecommended,
      sourceName,
      url,
    } = recommendation;

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
          delay: index * 0.08,
        }}
        className="group rounded-2xl border border-slate-700 bg-slate-900/90 overflow-hidden shadow-lg hover:shadow-2xl hover:border-emerald-500/60 transition-all duration-300"
      >
        {/* TOP SECTION */}

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                <FaHome />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {index + 1}. {name}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            {rating &&
              rating !== "Rating not available" && (
                <div className="flex items-center gap-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1.5 text-sm text-yellow-300 whitespace-nowrap">
                  <FaStar />
                  <span>{rating}</span>
                </div>
              )}
          </div>

          {/* DETAILS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl bg-slate-800/80 p-3">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Price
              </p>

              <div className="flex items-center gap-2 mt-1 text-emerald-400 font-semibold">
                <FaRupeeSign />
                <span>{price}</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-800/80 p-3">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Type
              </p>

              <p className="mt-1 text-white font-medium">
                {type}
              </p>
            </div>
          </div>

          {/* WHY RECOMMENDED */}

          <div className="mt-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Why this matches
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              {whyRecommended}
            </p>
          </div>

          {/* SOURCE */}

          {sourceName && (
            <div className="mt-4 text-xs text-gray-500">
              Source:{" "}
              <span className="text-gray-300">
                {sourceName}
              </span>
            </div>
          )}
        </div>

        {/* BOOK / VIEW BUTTON */}

        {url && (
          <div className="px-5 pb-5">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 px-5 py-3 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
            >
              <FaExternalLinkAlt size={14} />

              <span>
                View / Book on {sourceName || "Website"}
              </span>
            </a>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* HERO */}

      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-3xl bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-700 p-8 md:p-10 shadow-2xl text-white"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl md:text-4xl">
              <FaMountain />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-black">
                PahadiNest AI
              </h1>

              <p className="mt-2 text-base md:text-lg opacity-90">
                Your Personal Himalayan Travel Assistant
              </p>
            </div>
          </div>
        </motion.div>

        {/* SUGGESTIONS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {suggestions.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => askAI(item)}
              disabled={loading}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-left text-white hover:border-emerald-400 hover:bg-white/15 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex gap-3">
                <FaLocationArrow className="text-emerald-400 mt-1 flex-shrink-0" />

                <span className="text-sm md:text-base">
                  {item}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CHAT BOX */}

        <div className="mt-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="h-[650px] overflow-y-auto p-5 md:p-8 space-y-8">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-4 w-full max-w-5xl ${
                    msg.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  {/* AVATAR */}

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                      msg.sender === "ai"
                        ? "bg-gradient-to-r from-emerald-500 to-blue-600"
                        : "bg-gradient-to-r from-indigo-500 to-purple-600"
                    }`}
                  >
                    {msg.sender === "ai" ? (
                      <FaRobot />
                    ) : (
                      <FaUserCircle />
                    )}
                  </div>

                  {/* MESSAGE */}

                  <div
                    className={`relative rounded-3xl px-5 md:px-6 py-5 shadow-xl max-w-[90%] ${
                      msg.sender === "ai"
                        ? "bg-slate-800 text-gray-100"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {/* TEXT */}

                    <div
                      className={`prose prose-invert max-w-none text-sm md:text-base leading-relaxed ${
                        msg.sender === "ai"
                          ? "pr-7"
                          : ""
                      }`}
                    >
                      <ReactMarkdown>
                        {msg.text}
                      </ReactMarkdown>
                    </div>

                    {/* COPY */}

                    {msg.sender === "ai" && (
                      <button
                        onClick={() =>
                          copyMessage(msg.text)
                        }
                        className="absolute top-3 right-3 text-gray-400 hover:text-emerald-400 transition"
                        title="Copy response"
                      >
                        <FaCopy size={15} />
                      </button>
                    )}

                    {/* RECOMMENDATIONS */}

                    {msg.sender === "ai" &&
                      Array.isArray(
                        msg.recommendations
                      ) &&
                      msg.recommendations.length >
                        0 && (
                        <div className="mt-6">
                          <div className="mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-white">
                              🏔️ Top Stay Recommendations
                            </h2>

                            <p className="text-sm text-gray-400 mt-1">
                              Selected based on your budget,
                              location and preferences.
                            </p>
                          </div>

                          <div className="grid gap-4">
                            {msg.recommendations.map(
                              (
                                recommendation,
                                recommendationIndex
                              ) => (
                                <RecommendationCard
                                  key={
                                    recommendationIndex
                                  }
                                  recommendation={
                                    recommendation
                                  }
                                  index={
                                    recommendationIndex
                                  }
                                />
                              )
                            )}
                          </div>

                          {/* NOTE */}

                          {msg.note && (
                            <div className="mt-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 text-xs md:text-sm text-yellow-200">
                              ⚠️ {msg.note}
                            </div>
                          )}
                        </div>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* LOADING */}

            {loading && (
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <FaRobot />
                </div>

                <div className="bg-slate-800 text-white rounded-3xl px-8 py-5">
                  <div className="flex items-center gap-3">
                    <span>Searching the web</span>

                    <span className="flex gap-1">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={bottomRef}></div>
          </div>

          {/* INPUT */}

          <div className="border-t border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 md:p-5">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault();
                    askAI();
                  }
                }}
                disabled={loading}
                placeholder="Ask anything about Uttarakhand..."
                className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-5 py-3 text-white placeholder-gray-400 outline-none focus:border-emerald-500 disabled:opacity-50"
              />

              <button
                onClick={() => askAI()}
                disabled={
                  loading || !message.trim()
                }
                className="bg-emerald-500 hover:bg-emerald-600 transition px-5 py-3 rounded-xl text-white flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />

                <span className="hidden sm:inline">
                  Send
                </span>
              </button>

              <button
                onClick={clearChat}
                className="bg-red-500 hover:bg-red-600 transition px-4 py-3 rounded-xl text-white"
                title="Clear chat"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;