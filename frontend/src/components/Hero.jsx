function Hero() {
return ( <section className="bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-[75vh] flex items-center px-12 transition-all duration-300">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <div>

                <p className="text-green-700 dark:text-green-400 font-semibold text-lg mb-3">
                    Explore Beautiful Uttarakhand 🏔️
                </p>

                <h1 className="text-3xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                    Discover Your Perfect
                    <span className="text-green-700 dark:text-green-400"> Pahadi Stay</span>
                    <br />
                    Across Uttarakhand
                </h1>

                <p className="text-gray-600 dark:text-slate-300 text-lg leading-8 mb-8">
                    Discover peaceful mountain stays, nearby tourist attractions,
                    and personalized travel experiences across Uttarakhand.
                </p>

                <div className="flex gap-4">
                    <button className="bg-slate-900 dark:bg-green-600 text-white px-7 py-4 rounded-xl hover:bg-slate-800 dark:hover:bg-green-700 transition">
                        Explore Stays
                    </button>

                    <button className="border border-slate-300 dark:border-slate-600 dark:text-white px-7 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                        Learn More
                    </button>
                </div>

            </div>

            <div className="flex justify-center">
                <img
                    src="pahadinestphoto.png"
                    alt="PahadiNest Map"
                    className="rounded-[40px] shadow-2xl w-full md:h-[400px] h-auto object-contain"
                />
            </div>

        </div>
    </section>
)
}
export default Hero
