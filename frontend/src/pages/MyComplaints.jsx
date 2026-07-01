const complaints = [
  {
    id: 1,
    subject: "Road Damage",
    status: "Pending",
  },
  {
    id: 2,
    subject: "Street Light Issue",
    status: "Resolved",
  },
  {
    id: 3,
    subject: "Water Supply Problem",
    status: "In Progress",
  },
];

function MyComplaints() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          My Complaints
        </h1>

        <div className="space-y-6">

          {complaints.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
            >

              <div>

                <h2 className="text-xl font-semibold">
                  {item.subject}
                </h2>

                <p className="text-gray-500 mt-2">
                  Complaint ID : #{item.id}
                </p>

              </div>

              <span
                className={`px-4 py-2 rounded-full text-white ${
                  item.status === "Resolved"
                    ? "bg-green-500"
                    : item.status === "Pending"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
              >
                {item.status}
              </span>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default MyComplaints;