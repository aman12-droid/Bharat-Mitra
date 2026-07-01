import { useState } from "react";
import { Search } from "lucide-react";
import { schemes } from "../../data/schemeData";

function SchemeFinder() {
  const [search, setSearch] = useState("");

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.title.toLowerCase().includes(search.toLowerCase()) ||
    scheme.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            AI Scheme Finder
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Find Government Schemes
          </h2>

          <p className="text-gray-600 mt-5">
            Search schemes by category or name.
          </p>

        </div>

        <div className="relative max-w-xl mx-auto mt-10">

          <Search
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search for Student, Farmer, Women..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-orange-500"
          />

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {filteredSchemes.map((scheme) => (

            <div
              key={scheme.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >

              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                {scheme.category}
              </span>

              <h3 className="text-2xl font-bold mt-5">
                {scheme.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {scheme.description}
              </p>

            </div>

          ))}

          {filteredSchemes.length === 0 && (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No schemes found.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default SchemeFinder;