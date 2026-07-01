import { stats } from "../../data/homeData";

function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Bharat-Mitra in Numbers
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Trusted by Thousands of
            <span className="text-orange-500"> Citizens</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Bharat-Mitra is helping citizens connect with government
            services through technology, transparency, and AI-powered
            assistance.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-8 text-center border border-gray-100"
            >

              <h2 className="text-5xl font-extrabold text-orange-500">
                {item.number}
              </h2>

              <p className="mt-4 text-lg font-medium text-gray-700">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;