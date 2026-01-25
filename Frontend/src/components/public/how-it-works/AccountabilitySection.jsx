import { useNavigate } from "react-router-dom";

const AccountabilitySection = () => {
  const navigate = useNavigate();

  const accountabilityFeatures = [
    {
      title: "Complete Records",
      description: "Every action is logged and traceable",
      icon: "📝",
    },
    {
      title: "Regular Audits",
      description: "Systematic reviews ensure compliance",
      icon: "🔍",
    },
    {
      title: "Feedback Loops",
      description: "Continuous improvement through feedback",
      icon: "🔄",
    },
    {
      title: "Corrective Actions",
      description: "Issues are identified and resolved promptly",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Accountability
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Accountability
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Is Maintained
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every action within AidFlow is recorded and reviewed, enabling audits,
            feedback, and corrective measures that strengthen the system over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {accountabilityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Audit & Feedback Process
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
          >
            How Issues Are Corrected
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountabilitySection;
