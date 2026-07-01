import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white fixed">

      <div className="text-3xl font-bold p-6 border-b border-blue-500">
        Bharat-Mitra
      </div>

      <nav className="mt-6 flex flex-col">

        <Link
          to="/dashboard"
          className="px-6 py-4 hover:bg-blue-600"
        >
           Dashboard
        </Link>

        <Link
          to="/schemes"
          className="px-6 py-4 hover:bg-blue-600"
        >
           Schemes
        </Link>

        <Link
          to="/complaints"
          className="px-6 py-4 hover:bg-blue-600"
        >
          📢 Complaints
        </Link>

        <Link to="/chat"
          className="px-6 py-4 hover:bg-blue-600">
           AI Assistant
        </Link>

        <Link
          to="/profile"
          className="px-6 py-4 hover:bg-blue-600"
        >
           Profile
        </Link>

        <Link
          to="/admin"
          className="px-6 py-4 hover:bg-blue-600"
        >
           Admin Panel
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;