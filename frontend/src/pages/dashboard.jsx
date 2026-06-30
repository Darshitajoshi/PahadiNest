import { useEffect, useState } from "react";

function Dashboard() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load homestays.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading homestays...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-2xl font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-all">

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white px-8 py-14">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>
            <h1 className="text-5xl font-bold mb-4">
              Welcome Back 👋
            </h1>

            <p className="text-lg text-emerald-100">
              Explore beautiful mountain stays and plan your next
              adventure in Uttarakhand.
            </p>
          </div>

          <img
            src="/logopahadinest.png"
            alt="Logo"
            className="w-40"
          />

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-emerald-600">
              {destinations.length}
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Homestays
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-emerald-600">
              25+
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Destinations
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-emerald-600">
              500+
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Happy Travelers
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-4xl font-bold text-emerald-600">
              ★ 4.9
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-300">
              Average Rating
            </p>
          </div>

        </div>

      </section>

      {/* Featured Homestays */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold mb-8 dark:text-white">
          Featured Homestays
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {destinations.map((place) => (

            <div
              key={place.id}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={place.image}
                alt={place.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold dark:text-white">
                  {place.name}
                </h3>

                <p className="text-emerald-600 font-semibold mt-2">
                  📍 {place.location}
                </p>

                <p className="text-gray-500 dark:text-gray-300 mt-2">
                  ₹{place.price} / night
                </p>

                <p className="text-yellow-500 mt-2">
                  ⭐ {place.rating} ({place.reviews} Reviews)
                </p>

                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                  {place.description}
                </p>

                <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl transition w-full">
                  Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Profile */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Traveler Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-gray-500 dark:text-gray-300">Name</p>
              <h3 className="text-xl font-semibold dark:text-white">
                Guest User
              </h3>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-300">Membership</p>
              <h3 className="text-xl font-semibold text-emerald-600">
                Explorer
              </h3>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-300">Saved Trips</p>
              <h3 className="text-xl font-semibold dark:text-white">
                6
              </h3>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-300">Wishlist</p>
              <h3 className="text-xl font-semibold dark:text-white">
                12 Places
              </h3>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
