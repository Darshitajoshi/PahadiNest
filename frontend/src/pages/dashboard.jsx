import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaHeart,
  FaBookmark,
  FaMapMarkerAlt,
  FaArrowRight,
  FaMountain,
  FaClock,
  FaTrash,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const [savedStays, setSavedStays] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const saved =
        JSON.parse(
          localStorage.getItem("pahadi-saved-stays")
        ) || [];

      const searches =
        JSON.parse(
          localStorage.getItem("pahadi-search-history")
        ) || [];

      setSavedStays(saved);
      setRecentSearches(searches);
    } catch (error) {
      console.error(
        "Unable to load dashboard data:",
        error
      );
    }
  }, [navigate]);

  const removeSavedStay = (index) => {
    const updated = savedStays.filter(
      (_, i) => i !== index
    );

    setSavedStays(updated);

    localStorage.setItem(
      "pahadi-saved-stays",
      JSON.stringify(updated)
    );
  };

  const clearSearchHistory = () => {
    setRecentSearches([]);

    localStorage.removeItem(
      "pahadi-search-history"
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-100 text-sm mb-5">
                <FaMountain />
                My PahadiNest
              </div>

              <h1 className="text-4xl md:text-5xl font-black">
                Welcome Back 👋
              </h1>

              <p className="mt-4 text-emerald-100 text-lg max-w-2xl">
                Keep track of your favourite stays and
                continue planning your next mountain
                adventure.
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="hidden md:flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-6 py-3 rounded-xl transition"
            >
              <FaSearch />
              Find a Stay
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          QUICK STATS
      ================================================== */}

      <section className="max-w-7xl mx-auto px-6 -mt-7 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* SAVED */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Saved Stays
                </p>

                <h2 className="text-3xl font-black text-slate-800 dark:text-white mt-1">
                  {savedStays.length}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <FaHeart className="text-red-500" />
              </div>
            </div>
          </div>

          {/* SEARCHES */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Recent Searches
                </p>

                <h2 className="text-3xl font-black text-slate-800 dark:text-white mt-1">
                  {recentSearches.length}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <FaSearch className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* ACTIVITY */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Travel Activity
                </p>

                <h2 className="text-3xl font-black text-slate-800 dark:text-white mt-1">
                  {savedStays.length +
                    recentSearches.length}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <FaMountain className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ==================================================
              SAVED STAYS
          ================================================== */}

          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                  Saved Stays ❤️
                </h2>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Places you want to remember for your
                  next trip.
                </p>
              </div>
            </div>

            {savedStays.length === 0 ? (
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <FaHeart className="text-red-500 text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">
                  No saved stays yet
                </h3>

                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-2">
                  When you find a stay you like, save it
                  here so you can easily find it later.
                </p>

                <button
                  onClick={() =>
                    navigate("/dashboard")
                  }
                  className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                >
                  <FaSearch />
                  Find a Stay
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {savedStays.map((stay, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg p-6"
                  >
                    <div className="flex flex-col sm:flex-row justify-between gap-5">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                          <FaMountain className="text-emerald-600 text-xl" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                            {stay.name}
                          </h3>

                          <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                            <FaMapMarkerAlt className="text-emerald-500" />
                            {stay.location}
                          </p>

                          {stay.price && (
                            <p className="text-emerald-600 font-semibold mt-2">
                              {stay.price}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {stay.url && (
                          <a
                            href={stay.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
                          >
                            View
                            <FaArrowRight size={12} />
                          </a>
                        )}

                        <button
                          onClick={() =>
                            removeSavedStay(index)
                          }
                          className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 hover:bg-red-200 dark:hover:bg-red-900/50 transition"
                          title="Remove saved stay"
                        >
                          <FaTrash size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ==================================================
              RECENT SEARCHES
          ================================================== */}

          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Recent Searches
                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Continue where you left off.
                </p>
              </div>

              {recentSearches.length > 0 && (
                <button
                  onClick={clearSearchHistory}
                  className="text-xs text-red-500 hover:text-red-600"
                >
                  Clear
                </button>
              )}
            </div>

            {recentSearches.length === 0 ? (
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FaSearch className="text-blue-500 text-xl" />
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-4">
                  No recent searches
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Your recent stay searches will appear
                  here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentSearches.map(
                  (search, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
                    >
                      <div className="flex gap-3">
                        <FaClock className="text-emerald-500 mt-1" />

                        <div>
                          <h3 className="font-semibold text-slate-800 dark:text-white">
                            {search.location}
                          </h3>

                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {search.people} travellers
                            {" • "}
                            ₹{search.budget}/night
                          </p>

                          {search.stayType && (
                            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                              {search.stayType}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </section>
        </div>

        {/* ==================================================
            FIND STAY CTA
        ================================================== */}

        <section className="mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 p-8 md:p-10 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-7">
              <div>
                <div className="flex items-center gap-2 text-emerald-100 text-sm font-semibold">
                  <FaMountain />
                  Ready for another adventure?
                </div>

                <h2 className="text-2xl md:text-3xl font-black mt-2">
                  Find your next Pahadi stay
                </h2>

                <p className="text-emerald-100 mt-2 max-w-xl">
                  Tell PahadiNest your destination, budget
                  and preferences. Our AI will search the web
                  for suitable stays.
                </p>
              </div>

              <button
                onClick={() =>
                  navigate("/find-stay")
                }
                className="flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-7 py-3.5 rounded-xl transition whitespace-nowrap"
              >
                <FaSearch />
                Find a Stay
                <FaArrowRight size={13} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;