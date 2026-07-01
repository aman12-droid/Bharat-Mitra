import { useEffect, useState } from "react";
import {
  getComplaints,
  updateComplaintStatus,
} from "../services/complaintService";

function Admin() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    try {
      const data = await getComplaints();
      setComplaints(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateComplaintStatus(id, status);
      loadComplaints();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        👨‍💼 Admin Dashboard
      </h1>

      {/* Analytics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-blue-600 text-white rounded-xl p-6 shadow">

          <h2 className="text-lg">
            Total Complaints
          </h2>

          <p className="text-4xl font-bold mt-3">
            {complaints.length}
          </p>

        </div>

        <div className="bg-yellow-500 text-white rounded-xl p-6 shadow">

          <h2 className="text-lg">
            Pending
          </h2>

          <p className="text-4xl font-bold mt-3">
            {
              complaints.filter(
                (c) => c.status === "Pending"
              ).length
            }
          </p>

        </div>

        <div className="bg-green-600 text-white rounded-xl p-6 shadow">

          <h2 className="text-lg">
            Resolved
          </h2>

          <p className="text-4xl font-bold mt-3">
            {
              complaints.filter(
                (c) => c.status === "Resolved"
              ).length
            }
          </p>

        </div>

      </div>

      {/* Complaint Table */}

      <div className="bg-white shadow rounded-xl overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4">ID</th>

              <th>Title</th>

              <th>Description</th>

              <th>Image</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {complaints.map((item) => (

              <tr
                key={item.id}
                className="border-b text-center"
              >

                <td className="p-4">
                  {item.id}
                </td>

                <td>
                  {item.title}
                </td>

                <td className="max-w-xs">
                  {item.description}
                </td>

                <td>

                  {item.image ? (

                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt="Complaint"
                      className="w-24 h-20 object-cover mx-auto rounded"
                    />

                  ) : (

                    "No Image"

                  )}

                </td>

                <td>

                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusChange(
                        item.id,
                        e.target.value
                      )
                    }
                    className="border rounded px-3 py-2"
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="In Progress">
                      In Progress
                    </option>

                    <option value="Resolved">
                      Resolved
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Admin;