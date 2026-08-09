import { useState } from "react";
import axios from "axios";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaUsers,
  FaRupeeSign,
  FaHome,
  FaMountain,
  FaStar,
  FaExternalLinkAlt,
  FaRobot,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function FindStay() {
  const [formData, setFormData] = useState({
    location: "",
    people: "2",
    budget: "",
    stayType: "Any",
    preference: "",
  });

  const [recommendations, setRecommendations] = useState([]);
  const [intro, setIntro] = useState("");
  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const searchStays = async (e) => {
    e.preventDefault();

    setError("");
    setRecommendations([]);
    setIntro("");
    setNote("");

    if (!formData.location.trim()) {
      setError("Please enter a destination.");
      return;
    }

    if (!formData.people || Number(formData.people) < 1) {
      setError("Please enter a valid number of people.");
      return;
    }

    if (!formData.budget || Number(formData.budget) <= 0) {
      setError("Please enter your maximum budget per night.");
      return;
    }

    setLoading(true);

    const searchMessage = `
Find me the best accommodation options in ${formData.location}
for ${formData.people} people.

Maximum budget:
₹${formData.budget} per night.

Preferred stay type:
${formData.stayType}

Additional preference:
${formData.preference || "No specific preference"}

Please search the live internet and recommend the best 5 affordable
options that match these requirements.

Compare price, rating, location, stay type and preferences.
Give me the original website links where I can view or book the stay.
    `.trim();

    try {
      const response = await axios.post(
        `${API_URL}/api/ai/chat`,
        {
          message: searchMessage,
        },
        {
          timeout: 120000,
        }
      );

      if (!response.data.success) {
        throw new Error(
          response.data.message || "Unable to find stays."
        );
      }

      setIntro(
        response.data.reply ||
          "Here are the best stays we found."
      );

      setRecommendations(
        Array.isArray(response.data.recommendations)
          ? response.data.recommendations
          : []
      );

      setNote(response.data.note || "");

      if (
        !response.data.recommendations ||
        response.data.recommendations.length === 0
      ) {
        setError(
          "No suitable stays were found. Try another destination or increase your budget."
        );
      }

      // Save search history for Dashboard
      try {
        const existingSearches =
          JSON.parse(
            localStorage.getItem("pahadi-search-history")
          ) || [];

        const newSearch = {
          location: formData.location,
          people: formData.people,
          budget: formData.budget,
          stayType: formData.stayType,
          preference: formData.preference,
          date: new Date().toISOString(),
        };

        const updatedSearches = [
          newSearch,
          ...existingSearches,
        ].slice(0, 10);

        localStorage.setItem(
          "pahadi-search-history",
          JSON.stringify(updatedSearches)
        );
      } catch (storageError) {
        console.error(
          "Unable to save search history:",
          storageError
        );
      }
    } catch (err) {
      console.error("Stay Search Error:", err);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to search for stays. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setFormData({
      location: "",
      people: "2",
      budget: "",
      stayType: "Any",
      preference: "",
    });

    setRecommendations([]);
    setIntro("");
    setNote("");
    setError("");
  };

  const saveStay = (place) => {
    try {
      const existing =
        JSON.parse(
          localStorage.getItem("pahadi-saved-stays")
        ) || [];

      const alreadySaved = existing.some(
        (item) =>
          item.name === place.name &&
          item.location === place.location
      );

      if (alreadySaved) {
        alert("This stay is already saved.");
        return;
      }

      const updated = [
        {
          ...place,
          savedAt: new Date().toISOString(),
        },
        ...existing,
      ].slice(0, 20);

      localStorage.setItem(
        "pahadi-saved-stays",
        JSON.stringify(updated)
      );

      alert("❤️ Stay saved to My PahadiNest!");
    } catch (error) {
      console.error("Save stay error:", error);
      alert("Unable to save this stay.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-100 text-sm mb-6">
              <FaRobot />
              AI-Powered Stay Finder
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Find Your Perfect
              <span className="block text-emerald-200">
                Pahadi Stay 🏔️
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
              Tell us where you want to stay, your budget,
              and who you're travelling with. PahadiNest
              searches the web and finds the best options
              for you.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH FORM */}

      <section className="max-w-6xl mx-auto px-5 md:px-6 -mt-8 relative z-10">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
              <FaSearch className="text-emerald-600 text-xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                Tell us what you're looking for
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                We'll find the best matches from across the web.
              </p>
            </div>
          </div>

          <form onSubmit={searchStays}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* LOCATION */}

              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  Where do you want to stay?
                </label>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Chopta, Mussoorie, Auli"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              {/* PEOPLE */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  Travellers
                </label>

                <div className="relative">
                  <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />

                  <input
                    type="number"
                    name="people"
                    min="1"
                    max="50"
                    value={formData.people}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              {/* BUDGET */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  Budget / Night
                </label>

                <div className="relative">
                  <FaRupeeSign className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />

                  <input
                    type="number"
                    name="budget"
                    min="1"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="2500"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              {/* STAY TYPE */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  Stay Type
                </label>

                <div className="relative">
                  <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />

                  <select
                    name="stayType"
                    value={formData.stayType}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none"
                  >
                    <option value="Any">Any</option>
                    <option value="Homestay">
                      Homestay
                    </option>
                    <option value="Hotel">Hotel</option>
                    <option value="Resort">
                      Resort
                    </option>
                    <option value="Cottage">
                      Cottage
                    </option>
                    <option value="Hostel">
                      Hostel
                    </option>
                  </select>
                </div>
              </div>

              {/* PREFERENCE */}

              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                  What matters most?{" "}
                  <span className="font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                  placeholder="e.g. Mountain view, peaceful, near trekking, breakfast included"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              {/* SEARCH BUTTON */}

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-3.5 rounded-xl transition shadow-lg"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <FaSearch />
                      Find Best Stays
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-5 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300">
              ❌ {error}
            </div>
          )}
        </div>
      </section>

      {/* LOADING */}

      {loading && (
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 mb-5">
              <FaRobot className="text-emerald-600 text-2xl animate-pulse" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Searching the web for you...
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              We're comparing stays based on your location,
              budget and preferences.
            </p>
          </div>
        </section>
      )}

      {/* RESULTS */}

      {!loading && recommendations.length > 0 && (
        <section className="max-w-6xl mx-auto px-5 md:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-2">
                <FaCheckCircle />
                Search completed
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white">
                Top {recommendations.length} Stays For You
              </h2>

              {intro && (
                <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
                  {intro}
                </p>
              )}
            </div>

            <button
              onClick={clearSearch}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition"
            >
              New Search
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((place, index) => (
              <div
                key={`${place.name}-${index}`}
                className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center flex-shrink-0">
                        <FaMountain />
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                          #{index + 1} Recommended
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {place.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
                          <FaMapMarkerAlt className="text-emerald-500" />
                          {place.location}
                        </div>
                      </div>
                    </div>

                    {place.rating &&
                      place.rating !==
                        "Rating not available" && (
                        <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 px-3 py-1.5 rounded-lg text-sm font-semibold">
                          <FaStar />
                          {place.rating}
                        </div>
                      )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-slate-50 dark:bg-slate-700/60 rounded-xl p-4">
                      <p className="text-xs text-slate-400 uppercase font-semibold">
                        Price
                      </p>

                      <p className="mt-1 font-bold text-emerald-600 dark:text-emerald-400">
                        {place.price}
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-700/60 rounded-xl p-4">
                      <p className="text-xs text-slate-400 uppercase font-semibold">
                        Stay Type
                      </p>

                      <p className="mt-1 font-semibold text-slate-700 dark:text-white">
                        {place.type}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs text-slate-400 uppercase font-semibold mb-2">
                      Why we recommend it
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {place.whyRecommended}
                    </p>
                  </div>

                  {place.sourceName && (
                    <p className="mt-4 text-xs text-slate-400">
                      Source:{" "}
                      <span className="font-medium text-slate-500 dark:text-slate-300">
                        {place.sourceName}
                      </span>
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    {place.url && (
                      <a
                        href={place.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition"
                      >
                        <FaExternalLinkAlt size={13} />
                        View / Book
                      </a>
                    )}

                    <button
                      onClick={() => saveStay(place)}
                      className={`inline-flex items-center justify-center gap-2 ${
                        place.url
                          ? "border border-emerald-600 text-emerald-600 dark:text-emerald-400"
                          : "bg-emerald-600 text-white"
                      } hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-semibold py-3 rounded-xl transition`}
                    >
                      <FaHeart />
                      Save Stay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {note && (
            <div className="mt-8 p-4 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-sm text-yellow-700 dark:text-yellow-300">
              ⚠️ {note}
            </div>
          )}
        </section>
      )}

      {/* EMPTY STATE */}

      {!loading &&
        recommendations.length === 0 &&
        !error && (
          <section className="max-w-6xl mx-auto px-5 md:px-6 py-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <FaMountain className="text-emerald-600 text-3xl" />
              </div>

              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                Ready to find your next Pahadi stay?
              </h2>

              <p className="mt-3 max-w-xl mx-auto text-slate-500 dark:text-slate-400">
                Enter your destination, number of travellers
                and budget above. PahadiNest AI will search
                the web and find suitable options.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
                  <FaSearch className="text-emerald-500 mx-auto text-2xl" />
                  <h3 className="mt-3 font-semibold text-slate-800 dark:text-white">
                    Search
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Tell us your requirements
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
                  <FaRobot className="text-blue-500 mx-auto text-2xl" />
                  <h3 className="mt-3 font-semibold text-slate-800 dark:text-white">
                    AI Compares
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    AI finds suitable options
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-200 dark:border-slate-700">
                  <FaExternalLinkAlt className="text-purple-500 mx-auto text-2xl" />
                  <h3 className="mt-3 font-semibold text-slate-800 dark:text-white">
                    Choose
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Visit the original website
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* INFORMATION */}

      <section className="max-w-6xl mx-auto px-5 md:px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white p-7 md:p-9">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">
                Why PahadiNest?
              </h2>

              <p className="mt-2 text-emerald-100 max-w-2xl">
                We help you discover suitable stays by
                searching information available across the
                web. PahadiNest does not process bookings or
                payments.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-emerald-100 whitespace-nowrap">
              <FaCheckCircle />
              AI-powered discovery
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FindStay;