import { Search } from "lucide-react";

function SearchBar() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Search Government Schemes
        </h2>

        <p className="mt-3 text-gray-500">
          Search any government scheme or ask a question.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Example: PM Awas Yojana"
            className="flex-1 border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2">
            <Search size={20} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;