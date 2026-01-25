import { useNavigate } from "react-router-dom";

const HowItWorksSection = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      title: "Verification",
      description: "All actors are verified and authenticated before participation.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Allocation",
      description: "Resources are allocated through transparent, rule-based systems.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      number: "03",
      title: "Tracking",
      description: "Continuous real-time tracking of resources and outcomes.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Auditing",
      description: "Independent auditing ensures accountability and compliance.",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How AidFlow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AidFlow follows a structured flow: verification of actors, allocation of
            resources, continuous tracking, and independent auditing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="relative p-8 bg-white rounded-2xl border border-gray-200 h-full transform group-hover:-translate-y-2 transition-all duration-300">
                <div className={`text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4 opacity-20`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${step.color} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View End-to-End Flow
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
