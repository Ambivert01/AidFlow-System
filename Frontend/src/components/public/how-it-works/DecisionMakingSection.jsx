import { useNavigate } from "react-router-dom";

const DecisionMakingSection = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Identify",
      description: "Aid needs are identified through systematic assessment",
      icon: "🔍",
    },
    {
      title: "Validate",
      description: "Needs are validated against predefined criteria",
      icon: "✓",
    },
    {
      title: "Allocate",
      description: "Resources are allocated through transparent processes",
      icon: "📊",
    },
    {
      title: "Execute",
      description: "Decisions are executed with full visibility",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Decision Making
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Aid Decisions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Are Made
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aid needs are identified, validated, and addressed through structured
            processes designed to ensure fairness and transparency in allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            See Decision Flow
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
          >
            How Fairness Is Ensured
          </button>
        </div>
      </div>
    </section>
  );
};

export default DecisionMakingSection;
