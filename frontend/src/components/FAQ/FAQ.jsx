import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../data/homeData";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Find quick answers to common questions about Bharat-Mitra,
            complaints, AI assistance and government services.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}

              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ; 