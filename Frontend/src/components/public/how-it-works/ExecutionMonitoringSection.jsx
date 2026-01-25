import { useNavigate } from "react-router-dom";

const ExecutionMonitoringSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Real-Time Tracking",
      description: "Monitor aid distribution as it happens",
      icon: "📡",
    },
    {
      title: "Continuous Oversight",
      description: "Ongoing supervision ensures proper usage",
      icon: "👁️",
    },
    {
      title: "Verification",
      description: "Confirm resources reach intended recipients",
      icon: "✓",
    },
    {
      title: "Reporting",
      description: "Automated reports provide full visibility",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Execution & Monitoring
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Aid Is Delivered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              and Monitored
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Aid distribution is accompanied by continuous oversight to ensure that
            resources are used as intended and reach the correct recipients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Track Aid Lifecycle
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300"
          >
            How Monitoring Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExecutionMonitoringSection;
