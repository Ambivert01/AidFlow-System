import { useNavigate } from "react-router-dom";

const ImpactSection = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      value: "100%",
      label: "Traceability",
      description: "Complete visibility into aid distribution",
    },
    {
      value: "24/7",
      label: "Monitoring",
      description: "Real-time tracking and oversight",
    },
    {
      value: "∞",
      label: "Scalability",
      description: "Built to handle any volume of aid",
    },
    {
      value: "✓",
      label: "Compliance",
      description: "Automated governance and auditing",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Outcomes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            AidFlow focuses on measurable outcomes, system efficiency, and long-term
            trust rather than short-term emotional metrics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Impact Methodology
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
          >
            Understand Impact Metrics
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
