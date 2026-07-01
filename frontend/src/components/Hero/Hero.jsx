import { Link } from "react-router-dom";
import {
  FaRobot,
  FaClipboardList,
  FaUniversity,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div>

          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold mb-5">
            🇮🇳 Digital Citizen Portal
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-orange-500">
              Bharat-Mitra
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Bharat-Mitra is your smart citizen companion that helps you
            register complaints, discover government schemes, interact
            with AI, and access essential public services—all in one
            place.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 rounded-xl font-semibold shadow-lg"
            >
              Register Now
            </Link>

            <Link
              to="/dashboard"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-7 py-3 rounded-xl font-semibold"
            >
              Open Dashboard
            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-orange-500">
                10K+
              </h2>
              <p className="text-gray-600">
                Citizens
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-600">
                2500+
              </h2>
              <p className="text-gray-600">
                Complaints
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                97%
              </h2>
              <p className="text-gray-600">
                Resolution
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Smart Services
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-orange-100 p-4 rounded-xl hover:scale-105 transition">
                <FaClipboardList className="text-orange-600 text-2xl" />
                <span className="font-medium">
                  Register Public Complaints
                </span>
              </div>

              <div className="flex items-center gap-4 bg-green-100 p-4 rounded-xl hover:scale-105 transition">
                <FaUniversity className="text-green-700 text-2xl" />
                <span className="font-medium">
                  Explore Government Schemes
                </span>
              </div>

              <div className="flex items-center gap-4 bg-blue-100 p-4 rounded-xl hover:scale-105 transition">
                <FaRobot className="text-blue-600 text-2xl" />
                <span className="font-medium">
                  AI Powered Assistant
                </span>
              </div>

              <div className="flex items-center gap-4 bg-purple-100 p-4 rounded-xl hover:scale-105 transition">
                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                <span className="font-medium">
                  Locate Nearby Government Offices
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;