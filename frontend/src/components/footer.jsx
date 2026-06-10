function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            🏔️ PahadiNest
          </h2>

          <p className="text-gray-300 leading-7">
            Discover peaceful mountain homestays,
            hidden gems, and unforgettable experiences
            across Uttarakhand.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            📍 Uttarakhand, India
          </p>

          <p className="text-gray-300">
            ✉️ support@pahadinest.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 PahadiNest. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer