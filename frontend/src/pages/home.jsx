import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function Home() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHomestays();
  }, []);

  const fetchHomestays = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/homestays");

      if (res.data.success) {
        setHomestays(res.data.data);
      } else {
        setError("No homestays found.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load homestays.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-all duration-300">
      <Hero />

      {/* Featured Homestays */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">

        <div className="text-center mb-14">

          <p className="text-green-700 dark:text-green-400 font-semibold text-lg mb-2">
            Explore Popular Places 🏔️
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Homestays
          </h2>

          <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover peaceful mountain stays, breathtaking landscapes,
            and authentic hospitality across Uttarakhand.
          </p>

        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex justify-center">
            <Toast message={error} />
          </div>
        )}

        {/* No Data */}
        {!loading && homestays.length === 0 && !error && (
          <div className="text-center text-gray-500 dark:text-gray-300 text-lg">
            No homestays available.
          </div>
        )}

        {/* Homestay Cards */}
        {!loading && homestays.length > 0 && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">

            {homestays.map((home) => (
              <Card
                key={home._id}
                image={home.image}
                name={home.name}
                location={home.location}
                price={home.price}
                rating={home.rating}
                reviews={home.reviews}
                amenities={home.amenities}
                description={home.description}
              />
            ))}

          </div>
        )}

      </section>
    </div>
  );
}

export default Home;