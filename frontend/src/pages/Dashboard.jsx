import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaRobot,
  FaLandmark,
  FaCheckCircle,
} from "react-icons/fa";

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardCard from "../components/Dashboard/DashboardCard";
import ComplaintChart from "../components/Dashboard/ComplaintChart";
import RecentComplaint from "../components/Dashboard/RecentComplaint";
import { getComplaints } from "../services/complaintService";

function Dashboard() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    try {
      const data = await getComplaints();
      setComplaints(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <DashboardHeader />

      {/* Analytics Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <DashboardCard
          title="Total Complaints"
          value={complaints.length}
          icon={<FaClipboardList />}
          color="bg-blue-600"
        />

        <DashboardCard
          title="Resolved"
          value={
            complaints.filter(
              (c) => c.status === "Resolved"
            ).length
          }
          icon={<FaCheckCircle />}
          color="bg-green-600"
        />

        <DashboardCard
          title="AI Assistant"
          value="24x7"
          icon={<FaRobot />}
          color="bg-purple-600"
        />

        <DashboardCard
          title="Gov Schemes"
          value="50+"
          icon={<FaLandmark />}
          color="bg-orange-500"
        />

      </div>

      {/* Chart + Quick Actions */}

      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        <div className="lg:col-span-2">
          <ComplaintChart complaints={complaints} />
        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <Link
              to="/complaints"
              className="block bg-blue-600 text-white p-4 rounded-xl text-center hover:bg-blue-700 transition"
            >
              Register Complaint
            </Link>

            <Link
              to="/chat"
              className="block bg-purple-600 text-white p-4 rounded-xl text-center hover:bg-purple-700 transition"
            >
              AI Assistant
            </Link>

            <Link
              to="/schemes"
              className="block bg-green-600 text-white p-4 rounded-xl text-center hover:bg-green-700 transition"
            >
              Government Schemes
            </Link>

          </div>

        </div>

      </div>

      {/* Recent Complaints */}

      <div>

        <h2 className="text-3xl font-bold mb-5">
          Recent Complaints
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {complaints.length > 0 ? (
            complaints
              .slice(0, 6)
              .map((item) => (
                <RecentComplaint
                  key={item.id}
                  complaint={item}
                />
              ))
          ) : (
            <p className="text-gray-500">
              No complaints found.
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;