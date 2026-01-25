const TransparencySection = () => {
  const features = [
    {
      icon: "🔗",
      title: "Traceable Flows",
      description: "Every transaction and movement is recorded and traceable.",
    },
    {
      icon: "📋",
      title: "Auditable Records",
      description: "Complete audit trails for compliance and verification.",
    },
    {
      icon: "⚙️",
      title: "Rule-Based Governance",
      description: "Predefined rules ensure consistent and fair operations.",
    },
    {
      icon: "🔍",
      title: "Real-Time Visibility",
      description: "Monitor aid flows and outcomes as they happen.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Core Principles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparency &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Accountability
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            All aid flows in AidFlow are traceable, auditable, and governed by
            predefined rules. Trust is built through visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
