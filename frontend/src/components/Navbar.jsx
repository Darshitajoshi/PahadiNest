import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-md text-white px-4 md:px-8 py-4">

      <div className="flex flex-col md:flex-row justify-between items-center gap-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏔️</span>

          <h1 className="text-2xl md:text-4xl font-bold">
            PahadiNest
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-medium">

          <li>
            <Link to="/" className="hover:text-green-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-green-300 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-green-300 transition">
              Login
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="hover:text-green-300 transition">
              Dashboard
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar