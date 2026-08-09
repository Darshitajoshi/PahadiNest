import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaRobot,
  FaMountain,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <FaMountain />
              Explore the Himalayas
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Find Your
              <span className="block text-emerald-600 dark:text-emerald-400">
                Perfect Pahadi Stay
              </span>
            </h1>

            <p className="text-gray-600 dark:text-slate-300 text-lg md:text-xl leading-8 mt-6 max-w-xl">
              Tell PahadiNest where you want to go, how many
              people are travelling, and your budget. Our AI
              helps you discover the best accommodation
              options available across the web.
            </p>

            {/* FEATURES */}
            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <FaCheckCircle className="text-emerald-500" />
                <span>
                  Search stays according to your budget
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <FaCheckCircle className="text-emerald-500" />
                <span>
                  Get personalized AI recommendations
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <FaCheckCircle className="text-emerald-500" />
                <span>
                  Visit the original website to book
                </span>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <button
                onClick={() => navigate("/find-stay")}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition"
              >
                <FaSearch />
                Find a Stay
                <FaArrowRight size={13} />
              </button>

              <button
                onClick={() => navigate("/ai-chat")}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-semibold px-7 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <FaRobot />
                Ask PahadiNest AI
              </button>

            </div>

          </div>

          {/* RIGHT — HERO IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute -top-8 -right-8 w-40 h-40 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white dark:border-slate-700 rounded-[40px] p-4 shadow-2xl">

              <img
                src="/pahadinestphoto.png"
                alt="PahadiNest Uttarakhand"
                className="rounded-[30px] w-full max-w-xl md:h-[480px] object-contain"
              />

            </div>

          </div>

        </div>

        {/* BOTTOM VALUE CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">

            <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
              <FaSearch className="text-emerald-600" />
            </div>

            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Search Your Way
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
              Choose your destination, number of travellers,
              budget and preferred type of stay.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">

            <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <FaRobot className="text-blue-600" />
            </div>

            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              AI-Powered Suggestions
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
              PahadiNest AI compares available information
              and suggests suitable options for your trip.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">

            <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <FaMountain className="text-purple-600" />
            </div>

            <h3 className="font-bold text-lg text-slate-900 dark:text-white">
              Book Your Way
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
              We don't process bookings. Visit the original
              provider website and choose the option that
              works best for you.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;