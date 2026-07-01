import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ComplaintChart({ complaints }) {
  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const progress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const data = [
    { name: "Pending", value: pending },
    { name: "In Progress", value: progress },
    { name: "Resolved", value: resolved },
  ];

  const COLORS = ["#F59E0B", "#3B82F6", "#10B981"];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Complaint Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ComplaintChart;