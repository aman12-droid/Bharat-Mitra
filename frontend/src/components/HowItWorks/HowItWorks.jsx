import {
  UserPlus,
  Bot,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={34} className="text-orange-500" />,
    title: "Create Your Account",
    description:
      "Sign up securely and access all government services from one platform.",
  },
  {
    icon: <Bot size={34} className="text-blue-500" />,
    title: "Use AI Assistant",
    description:
      "Ask questions about schemes, documents, eligibility and government services instantly.",
  },
  {
    icon: <ClipboardCheck size={34} className="text-green-500" />,
    title: "Register Complaints",
    description:
      "Submit complaints with images and track their status in real time.",
  },
  {
    icon: <BadgeCheck size={34} className="text-purple-500" />,
    title: "Get Resolution",
    description:
      "Receive updates and monitor complaint resolution directly from your dashboard.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold">
            Simple Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            How <span className="text-orange-500">Bharat-Mitra</span> Works
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Complete your work in just four simple steps without visiting
            multiple government offices.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-8 border border-gray-100 text-center"
            >

              <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                {step.icon}
              </div>

              <div className="mt-6">

                <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Step {index + 1}
                </span>

                <h3 className="text-2xl font-bold mt-5">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;          