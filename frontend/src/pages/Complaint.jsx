import { useState } from "react";

function Complaint() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitComplaint = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      alert(data.message);

      setForm({
        full_name: "",
        email: "",
        subject: "",
        description: "",
      });
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Register Complaint
        </h1>

        <form onSubmit={submitComplaint} className="space-y-6">

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            name="subject"
            placeholder="Complaint Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Describe your complaint..."
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600"
          >
            Submit Complaint
          </button>

        </form>

      </div>
    </div>
  );
}

export default Complaint;