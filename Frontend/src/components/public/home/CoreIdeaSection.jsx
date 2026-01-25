import { useNavigate } from "react-router-dom";

const CoreIdeaSection = () => {
  const navigate = useNavigate();

  const principles = [
    {
      icon: "✓",
      title: "Verifiable",
      description: "Every participant and action is verified and traceable.",
    },
    {
      icon: "📊",
      title: "Structured",
      description: "Systematic workflows ensure consistency and reliability.",
    },
    {
      icon: "🎯",
      title: "Accountable",
      description: "Clear responsibility chains for every decision and outcome.",
    },
    {
      icon: "🔐",
      title: "Secure",
      description: "Enterprise-grade security protecting sensitive data.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The AidFlow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Approach
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AidFlow is designed as a system-first platform where every participant,
            action, and decision is verifiable, structured, and accountable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            What Makes AidFlow Different
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreIdeaSection;
