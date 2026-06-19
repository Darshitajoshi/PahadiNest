import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 transition-all duration-300">

      <Hero />

      {/* Featured Homestays */}
      <section className="px-12 py-20 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">

        <div className="text-center mb-14">

          <p className="text-green-700 dark:text-green-400 font-semibold text-lg mb-2">
            Explore Popular Places 🏔️
          </p>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Homestays
          </h2>

          <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Stay in peaceful mountain destinations and experience
            the beauty of Uttarakhand with carefully selected
            homestays.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <Card
            image="Mussoorie.jpeg"
            title="Mussoorie Retreat"
            description="Enjoy peaceful mountain views and cozy stays in the Queen of Hills."
          />

          <Card
            image="chopta.jpeg"
            title="Chopta Homestay"
            description="Stay near breathtaking Himalayan views and trekking adventures."
          />

        </div>

      </section>

    </div>
  );
}

export default Home;