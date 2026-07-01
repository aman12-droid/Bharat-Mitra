import { ShieldCheck, Bot, Clock } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Bot className="text-orange-500" size={35} />,
      title: "AI Powered",
      desc: "Instant answers to your government-related queries.",
    },
    {
      icon: <ShieldCheck className="text-green-600" size={35} />,
      title: "Secure",
      desc: "Your information is protected with secure authentication.",
    },
    {
      icon: <Clock className="text-blue-500" size={35} />,
      title: "24/7 Available",
      desc: "Access services anytime from anywhere.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Why Choose Bharat-Mitra?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;