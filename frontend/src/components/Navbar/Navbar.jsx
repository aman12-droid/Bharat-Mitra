import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

        <Link
          to="/"
          className="text-2xl font-bold text-orange-600"
        >
          🇮🇳 Bharat-Mitra
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <a href="#services" className="hover:text-orange-500">
              Services
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Register
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-5 gap-4">

            <a href="#services">Services</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;