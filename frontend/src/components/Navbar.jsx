import { Link } from "react-router-dom";

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-md transition-all">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src="/logopahadinest.png"
            alt="PahadiNest Logo"
            className="w-12 h-12 object-contain"
          />

          <div>

            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              PahadiNest
            </h1>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Explore Uttarakhand
            </p>

          </div>

        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link
            to="/"
            className="text-slate-700 dark:text-white hover:text-emerald-600 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-slate-700 dark:text-white hover:text-emerald-600 transition"
          >
            About
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-700 dark:text-white hover:text-emerald-600 transition"
          >
            Dashboard
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:from-emerald-700 hover:to-green-600 transition"
          >
            Sign Up
          </Link>

          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;