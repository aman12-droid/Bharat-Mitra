import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    review:
      "Bharat-Mitra made it very easy to register my complaint. The interface is simple and the tracking system is excellent.",
  },
  {
    name: "Priya Verma",
    city: "Lucknow",
    review:
      "The AI Assistant helped me find the right government scheme within minutes. Amazing experience!",
  },
  {
    name: "Amit Kumar",
    city: "Patna",
    review:
      "A modern citizen portal with a clean design. Everything from complaints to schemes is available in one place.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            What Citizens Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Thousands of citizens trust Bharat-Mitra for accessing government
            services quickly and efficiently.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-8"
            >

              <div className="flex mb-5">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="#F59E0B"
                    color="#F59E0B"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7 italic">
                "{item.review}"
              </p>

              <div className="mt-8 border-t pt-5">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.city}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;