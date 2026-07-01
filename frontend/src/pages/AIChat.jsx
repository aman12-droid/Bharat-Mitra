import { useState } from "react";

function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      console.error(err);
      setReply("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Bharat-Mitra AI Assistant
        </h1>

        <textarea
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about government schemes..."
          className="w-full border rounded-xl p-4"
        />

        <button
          onClick={sendMessage}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {reply && (
          <div className="mt-10 bg-slate-50 rounded-xl p-6">
            <h2 className="font-bold text-xl mb-4">AI Response</h2>
            <p className="leading-8 whitespace-pre-wrap">
              {reply}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default AIChat;