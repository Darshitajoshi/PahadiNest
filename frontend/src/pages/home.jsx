import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaRobot,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaArrowRight,
  FaMountain,
  FaHeart,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const destinations = [
    "Chopta",
    "Mussoorie",
    "Auli",
    "Nainital",
    "Rishikesh",
    "Valley of Flowers",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* HERO */}
      <Hero />

      {/* HOW PAHADINEST WORKS */}
      <section className="px-6 md:px-12 py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Simple. Smart. Personalized.
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
              How PahadiNest Works
            </h2>

            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mt-4">
              Finding a mountain stay shouldn't require searching
              through dozens of websites. Tell us what you need
              and let PahadiNest help you discover suitable options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {/* STEP 1 */}
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <FaSearch className="text-emerald-600 text-xl" />
              </div>

              <div className="text-sm text-emerald-600 font-bold mt-6">
                STEP 01
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                Tell Us What You Need
              </h3>

              <p className="text-slate-500 dark:text-slate-400 mt-3 leading-7">
                Enter your destination, number of travellers,
                budget, preferred stay type and other preferences.
              </p>

            </div>

            {/* STEP 2 */}
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <FaRobot className="text-blue-600 text-xl" />
              </div>

              <div className="text-sm text-blue-600 font-bold mt-6">
                STEP 02
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                AI Finds Suitable Options
              </h3>

              <p className="text-slate-500 dark:text-slate-400 mt-3 leading-7">
                PahadiNest AI analyzes the information available
                online and helps identify options that match
                your requirements.
              </p>

            </div>

            {/* STEP 3 */}
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <FaArrowRight className="text-purple-600 text-xl" />
              </div>

              <div className="text-sm text-purple-600 font-bold mt-6">
                STEP 03
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                Choose Where to Book
              </h3>

              <p className="text-slate-500 dark:text-slate-400 mt-3 leading-7">
                Compare the suggestions and visit the original
                provider website to check the stay and complete
                your booking.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="px-6 md:px-12 py-20 bg-slate-100 dark:bg-slate-950">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">

            <div>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Explore the Himalayas
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2">
                Popular Destinations
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl">
                Looking for inspiration? Explore some of the
                beautiful destinations travelers love across
                Uttarakhand.
              </p>
            </div>

            <button
              onClick={() => navigate("/find-stay")}
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-3 transition-all"
            >
              Find a Stay
              <FaArrowRight size={13} />
            </button>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {destinations.map((destination) => (
              <button
                key={destination}
                onClick={() => navigate("/find-stay")}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-emerald-500 hover:shadow-lg transition"
              >

                <FaMapMarkerAlt className="mx-auto text-emerald-500 text-xl group-hover:scale-110 transition" />

                <h3 className="font-semibold text-slate-800 dark:text-white mt-3">
                  {destination}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Explore stays
                </p>

              </button>
            ))}

          </div>

        </div>

      </section>

      {/* WHY PAHADINEST */}
      <section className="px-6 md:px-12 py-20 bg-white dark:bg-slate-900">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Why PahadiNest?
              </p>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-3 leading-tight">
                Your shortcut to discovering
                <span className="text-emerald-600 dark:text-emerald-400">
                  {" "}the mountains.
                </span>
              </h2>

              <p className="text-slate-500 dark:text-slate-400 text-lg leading-8 mt-5">
                Instead of spending hours checking different
                travel websites, PahadiNest helps you narrow
                down your choices according to what matters
                to you.
              </p>

              <button
                onClick={() => navigate("/find-stay")}
                className="mt-8 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition"
              >
                <FaSearch />
                Start Searching
                <FaArrowRight size={13} />
              </button>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-7">
                <FaRupeeSign className="text-emerald-600 text-2xl" />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5">
                  Budget Friendly
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-2 leading-6">
                  Set your budget and look for options that
                  fit your spending preference.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-7">
                <FaRobot className="text-blue-600 text-2xl" />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5">
                  AI Assistance
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-2 leading-6">
                  Get personalized suggestions instead of
                  browsing endless search results.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-3xl p-7">
                <FaMountain className="text-purple-600 text-2xl" />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5">
                  Mountain Focused
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-2 leading-6">
                  Designed specifically for discovering stays
                  and experiences in Himalayan destinations.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-3xl p-7">
                <FaHeart className="text-red-500 text-2xl" />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-5">
                  Your Preferences
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-2 leading-6">
                  Search according to your group size,
                  budget and personal preferences.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 py-20">

        <div className="max-w-7xl mx-auto rounded-[35px] overflow-hidden bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white p-10 md:p-14">

          <div className="max-w-3xl">

            <div className="flex items-center gap-2 text-emerald-100 font-semibold">
              <FaMountain />
              Your next mountain escape awaits
            </div>

            <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
              Where will your next Pahadi adventure take you?
            </h2>

            <p className="text-emerald-100 text-lg mt-4 leading-7">
              Tell PahadiNest what you're looking for and
              discover stays that match your trip.
            </p>

            <button
              onClick={() => navigate("/find-stay")}
              className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-7 py-4 rounded-xl transition"
            >
              <FaSearch />
              Find My Stay
              <FaArrowRight size={13} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;