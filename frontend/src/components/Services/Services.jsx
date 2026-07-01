import {
  Bot,
  FileSearch,
  Landmark,
  MapPinned,
  UserRound,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Bot size={38} className="text-orange-500" />,
    title: "AI Assistant",
    description:
      "Ask questions about government services, eligibility, and procedures using AI.",
    color: "from-orange-100 to-orange-50",
  },
  {
    icon: <Landmark size={38} className="text-green-600" />,
    title: "Government Schemes",
    description:
      "Discover central and state government schemes based on your profile.",
    color: "from-green-100 to-green-50",
  },
  {
    icon: <ShieldCheck size={38} className="text-blue-500" />,
    title: "Complaint Portal",
    description:
      "Register complaints and track their status from your dashboard.",
    color: "from-blue-100 to-blue-50",
  },
  {
    icon: <FileSearch size={38} className="text-purple-500" />,
    title: "Document Verification",
    description:
      "Upload and verify important documents quickly and securely.",
    color: "from-purple-100 to-purple-50",
  },
  {
    icon: <MapPinned size={38} className="text-red-500" />,
    title: "Nearby Offices",
    description:
      "Locate nearby government offices with contact information.",
    color: "from-red-100 to-red-50",
  },
  {
    icon: <UserRound size={38} className="text-cyan-500" />,
    title: "Citizen Dashboard",
    description:
      "Manage complaints, profile details and government services from one place.",
    color: "from-cyan-100 to-cyan-50",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Everything You Need,
            <span className="text-orange-500"> In One Platform</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Bharat-Mitra brings government services, complaint management,
            AI assistance and citizen support together in one modern portal.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden"
            >

              <div
                className={`bg-gradient-to-r ${service.color} p-8 flex justify-center`}
              >
                {service.icon}
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 text-orange-500 font-semibold group-hover:translate-x-2 transition">
                  Learn More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;