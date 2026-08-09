import { useNavigate } from "react-router-dom";

import {
  FaMountain,
  FaRobot,
  FaSearch,
  FaGlobe,
  FaRupeeSign,
  FaExternalLinkAlt,
  FaLeaf,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-7">
              <FaMountain />
              Discover the Himalayas Differently
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              About PahadiNest 🏔️
            </h1>

            <p className="text-lg md:text-xl text-emerald-50 leading-8 mt-6 max-w-3xl mx-auto">
              PahadiNest is an AI-powered travel discovery platform
              designed to help travelers find suitable stays across
              Uttarakhand based on their destination, budget, group
              size, and preferences.
            </p>

            <button
              onClick={() => navigate("/find-stay")}
              className="mt-9 inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-7 py-4 rounded-xl shadow-xl transition"
            >
              <FaSearch />
              Find Your Stay
              <FaArrowRight size={13} />
            </button>

          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="flex justify-center">

            <div className="bg-white dark:bg-slate-800 rounded-[35px] p-5 shadow-2xl border border-slate-200 dark:border-slate-700">

              <img
                src="/logopahadinest.png"
                alt="PahadiNest"
                className="w-full max-w-md rounded-3xl object-contain"
              />

            </div>

          </div>

          <div>

            <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-3 leading-tight">
              Making mountain stay discovery
              <span className="text-emerald-600 dark:text-emerald-400">
                {" "}simpler.
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-8 mt-6">
              Planning a trip to the mountains can mean checking
              multiple websites, comparing prices, considering
              different stay types, and trying to find something
              that fits your group and budget.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-8 mt-4">
              PahadiNest brings this discovery process into one
              simple experience. Users tell us what they are
              looking for, and our AI assistant helps find and
              suggest suitable options available online.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white dark:bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
              The PahadiNest Experience
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
              How It Works
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-4 leading-7">
              From your preferences to potential stays, PahadiNest
              helps make the discovery process easier.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {/* STEP 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">

              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <FaSearch className="text-emerald-600 text-xl" />
              </div>

              <p className="text-emerald-600 font-bold text-sm mt-6">
                01
              </p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                Share Your Preferences
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7 mt-3">
                Enter your destination, number of people, budget,
                and the type of stay you prefer.
              </p>

            </div>

            {/* STEP 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <FaRobot className="text-blue-600 text-xl" />
              </div>

              <p className="text-blue-600 font-bold text-sm mt-6">
                02
              </p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                Get AI Suggestions
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7 mt-3">
                PahadiNest AI uses your requirements to help
                identify and recommend suitable stay options.
              </p>

            </div>

            {/* STEP 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <FaExternalLinkAlt className="text-purple-600 text-xl" />
              </div>

              <p className="text-purple-600 font-bold text-sm mt-6">
                03
              </p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                Visit the Provider
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-7 mt-3">
                Choose an option and visit its original provider
                website to check the latest details and make
                your booking.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OUR PURPOSE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* MISSION */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-9 text-white shadow-xl">

            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
              <FaHeart className="text-2xl" />
            </div>

            <h3 className="text-3xl font-black mt-7">
              Our Mission
            </h3>

            <p className="text-emerald-50 leading-8 mt-4">
              To make discovering mountain stays easier,
              more personalized, and less time-consuming for
              travelers exploring Uttarakhand and the Himalayas.
            </p>

          </div>

          {/* VISION */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-9 border border-slate-200 dark:border-slate-700 shadow-lg">

            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
              <FaMountain className="text-emerald-600 text-2xl" />
            </div>

            <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-7">
              Our Vision
            </h3>

            <p className="text-slate-500 dark:text-slate-400 leading-8 mt-4">
              To create a simple travel discovery experience
              where technology helps people find meaningful
              stays and experiences in the mountains.
            </p>

          </div>

        </div>

      </section>

      {/* WHY PAHADINEST */}
      <section className="bg-slate-100 dark:bg-slate-950 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Built For Travelers
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-2">
              Why PahadiNest?
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 text-center shadow-sm">

              <FaRobot className="mx-auto text-blue-600 text-3xl" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-5">
                AI Powered
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
                Personalized assistance for your travel search.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 text-center shadow-sm">

              <FaRupeeSign className="mx-auto text-emerald-600 text-3xl" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-5">
                Budget Focused
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
                Find suggestions based on the budget you provide.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 text-center shadow-sm">

              <FaGlobe className="mx-auto text-purple-600 text-3xl" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-5">
                Web Discovery
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
                Discover options from information available online.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 text-center shadow-sm">

              <FaLeaf className="mx-auto text-green-600 text-3xl" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-5">
                Mountain Focused
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-6">
                Designed around Uttarakhand and Himalayan travel.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* IMPORTANT NOTE */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-3xl p-7 md:p-9">

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            A simple way to discover — not a booking platform
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-7 mt-3">
            PahadiNest helps users discover and compare suitable
            stay options. We do not process bookings or payments
            directly. When you select an option, you are directed
            to the original provider website for the latest
            availability, pricing, and booking.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto rounded-[35px] bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white text-center px-6 py-16">

          <FaMountain className="mx-auto text-4xl text-emerald-100" />

          <h2 className="text-3xl md:text-5xl font-black mt-5">
            Ready to find your Pahadi stay?
          </h2>

          <p className="text-emerald-100 text-lg mt-4">
            Tell us what you're looking for and let PahadiNest
            help you discover your options.
          </p>

          <button
            onClick={() => navigate("/find-stay")}
            className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-8 py-4 rounded-xl transition shadow-lg"
          >
            <FaSearch />
            Find a Stay
            <FaArrowRight size={13} />
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;