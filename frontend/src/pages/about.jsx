function About() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-300">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About PahadiNest 🏔️
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          PahadiNest is your trusted travel companion for discovering
          peaceful homestays, breathtaking Himalayan views, and authentic
          experiences across Uttarakhand.
        </p>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="logopahadinest.png"
            alt="Mountains"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-8">
            PahadiNest is designed to help travelers explore the hidden
            beauty of Uttarakhand by connecting them with comfortable,
            affordable, and authentic mountain homestays. We aim to
            promote sustainable tourism while supporting local hosts and
            creating memorable travel experiences.
          </p>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="bg-white dark:bg-slate-800 py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div className="shadow-lg rounded-2xl p-8 bg-slate-50 dark:bg-slate-900">
            <h3 className="text-3xl font-bold mb-4">
              🎯 Our Mission
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              To simplify travel planning by helping users discover
              trusted homestays and personalized travel experiences
              across Uttarakhand.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl p-8 bg-slate-50 dark:bg-slate-900">
            <h3 className="text-3xl font-bold mb-4">
              🌄 Our Vision
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              To become the leading platform for promoting eco-tourism
              and local homestays while encouraging sustainable travel.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose PahadiNest?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-2xl font-semibold mb-3">
              Authentic Homestays
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay with local families and experience the culture of Uttarakhand.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-2xl font-semibold mb-3">
              Personalized Trips
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get travel recommendations based on your interests and budget.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-semibold mb-3">
              Eco Tourism
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Promote responsible tourism while supporting local communities.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-green-600 text-white px-6">

        <h2 className="text-4xl font-bold mb-6">
          Start Your Himalayan Journey Today
        </h2>

        <p className="text-lg mb-8">
          Explore beautiful destinations and book your perfect mountain stay.
        </p>

        <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
          Explore Homestays
        </button>

      </section>

    </div>
  );
}

export default About;