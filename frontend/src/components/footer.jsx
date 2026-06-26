import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-3 mb-5">

            <img
              src="/logopahadinest.png"
              alt="PahadiNest Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold">
                PahadiNest
              </h2>

              <p className="text-sm text-gray-400">
                Explore Uttarakhand
              </p>
            </div>

          </div>

          <p className="text-gray-400 leading-7">
            Discover peaceful mountain homestays,
            hidden villages, breathtaking landscapes,
            and unforgettable travel experiences
            across Uttarakhand.
          </p>

        </div>

        {/* Explore */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Explore
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/" className="hover:text-emerald-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-emerald-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="hover:text-emerald-400 transition">
                Dashboard
              </Link>
            </li>

          </ul>

        </div>

        {/* Account */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Account
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/login" className="hover:text-emerald-400 transition">
                Login
              </Link>
            </li>

            <li>
              <Link to="/signup" className="hover:text-emerald-400 transition">
                Sign Up
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p>📍 Uttarakhand, India</p>

            <p>✉️ support@pahadinest.com</p>

            <p>📞 +91 XXXXX XXXXX</p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500 text-sm">

        © 2026 PahadiNest • Crafted with ❤️ for Himalayan Travelers

      </div>

    </footer>
  );
}

export default Footer;