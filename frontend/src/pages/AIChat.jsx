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
} from "react-icons/fa";

const suggestions = [
  "Plan a 3-day trip to Chopta",
  "Best homestays in Mussoorie",
  "Packing list for Kedarkantha Trek",
  "Best time to visit Valley of Flowers",
  "Weekend trip from Dehradun",
  "Budget trip to Nainital",
];

const AIChat = () => {
  const bottomRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("pahadi-chat");

    if (saved) return JSON.parse(saved);

    return [
      {
        sender: "ai",
        text: `# 👋 Welcome to PahadiNest

I'm your AI Travel Assistant.

Ask me about:

🏔 Trek Planning

🏡 Homestays

📍 Tourist Places

🧳 Packing

🍲 Local Food

🚕 Transport`,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("pahadi-chat", JSON.stringify(messages));

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const askAI = async (question = "") => {
    const text = question || message;

    if (!text.trim()) return;

    const updated = [
      ...messages,
      {
        sender: "user",
        text,
      },
    ];

    setMessages(updated);
    setMessage("");
    setLoading(true);

        try {
      const res = await axios.post("http://localhost:5000/api/ai/chat", {
        message: text,
      });

      setMessages([
        ...updated,
        {
          sender: "ai",
          text: res.data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updated,
        {
          sender: "ai",
          text: "❌ Sorry! Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

      {/* Hero */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-700 p-10 shadow-2xl text-white"
        >

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl">
              <FaMountain />
            </div>

            <div>

              <h1 className="text-5xl font-black">
                PahadiNest AI
              </h1>

              <p className="mt-2 text-lg opacity-90">
                Your Personal Himalayan Travel Assistant
              </p>

            </div>

          </div>

        </motion.div>

        {/* Suggestions */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

          {suggestions.map((item, index) => (

            <motion.button
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => askAI(item)}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-left text-white hover:border-emerald-400 transition"
            >

              <div className="flex gap-3">

                <FaLocationArrow className="text-emerald-400 mt-1" />

                <span>{item}</span>

              </div>

            </motion.button>

          ))}

        </div>

        {/* Chat Box */}

        <div className="mt-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">

          <div className="h-[600px] overflow-y-auto p-8 space-y-8">

                        {messages.map((msg, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`flex gap-4 max-w-4xl ${
                    msg.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >

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

                  <div
                    className={`relative rounded-3xl px-6 py-5 shadow-xl ${
                      msg.sender === "ai"
                        ? "bg-slate-800 text-gray-100"
                        : "bg-blue-600 text-white"
                    }`}
                  >

                    <ReactMarkdown>
                      {msg.text}
                    </ReactMarkdown>

                    {msg.sender === "ai" && (

                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(msg.text)
                        }
                        className="absolute top-3 right-3 hover:text-emerald-400 transition"
                      >
                        <FaCopy size={15} />
                      </button>

                    )}

                  </div>

                </div>

              </motion.div>

            ))}

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

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center text-white">

                  <FaRobot />

                </div>

                <div className="bg-slate-800 text-white rounded-3xl px-8 py-5">

                  Thinking...

                </div>

              </motion.div>

            )}

            <div ref={bottomRef}></div>

          </div>
                    <div className="border-t border-white/10 bg-slate-900/80 backdrop-blur-xl p-5">

            <div className="flex items-center gap-3">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") askAI();
                }}
                placeholder="Ask anything about Uttarakhand..."
                className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-5 py-3 text-white placeholder-gray-400 outline-none focus:border-emerald-500"
              />

              <button
                onClick={() => askAI()}
                className="bg-emerald-500 hover:bg-emerald-600 transition px-5 py-3 rounded-xl text-white flex items-center gap-2"
              >
                <FaPaperPlane />
                Send
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("pahadi-chat");

                  setMessages([
                    {
                      sender: "ai",
                      text: `# 👋 Welcome to PahadiNest

I'm your AI Travel Assistant.

Ask me anything about travel, trekking, homestays and Uttarakhand.`,
                    },
                  ]);
                }}
                className="bg-red-500 hover:bg-red-600 transition px-4 py-3 rounded-xl text-white"
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