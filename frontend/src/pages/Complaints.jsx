import { useEffect, useState } from "react";
import {
  submitComplaint,
  getComplaints,
} from "../services/complaintService";

function Complaints() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [complaints, setComplaints] = useState([]);

  const loadComplaints = async () => {
    const data = await getComplaints();
    setComplaints(data);
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("user_id", 1);
    formData.append("title", title);
    formData.append("description", description);

    if (image) {
      formData.append("image", image);
    }

    await submitComplaint(formData);

    alert("Complaint Submitted Successfully");

    setTitle("");
    setDescription("");
    setImage(null);

    loadComplaints();
  };

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Complaint Portal
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 mb-10"
      >

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded mb-4"
          rows="5"
          placeholder="Complaint Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
        />

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
          Submit Complaint
        </button>

      </form>

      <div className="grid md:grid-cols-2 gap-6">

        {complaints.map((item) => (

          <div
            key={item.id}
            className="bg-white shadow rounded-xl p-6"
          >

            <h2 className="text-xl font-bold">
              {item.title}
            </h2>

            <p className="mt-3">
              {item.description}
            </p>

            <p className="mt-4 text-blue-700 font-semibold">
              Status : {item.status}
            </p>

            {item.image && (

              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt=""
                className="mt-4 rounded-lg h-52 object-cover"
              />

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Complaints;