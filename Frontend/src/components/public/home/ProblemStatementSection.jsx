import { useNavigate } from "react-router-dom";

const ProblemStatementSection = () => {
  const navigate = useNavigate();

  const problems = [
    {
      icon: "🔍",
      title: "Lack of Transparency",
      description: "Stakeholders can't see where aid actually goes or how it's used.",
    },
    {
      icon: "⚖️",
      title: "Weak Accountability",
      description: "No clear responsibility chain for aid delivery and outcomes.",
    },
    {
      icon: "👁️",
      title: "Limited Visibility",
      description: "Real-time tracking and monitoring of aid distribution is missing.",
    },
    {
      icon: "🔗",
      title: "Fragmented Systems",
      description: "Disconnected processes make coordination and oversight difficult.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Problem with Traditional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Aid Systems
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aid systems today suffer from lack of transparency, weak accountability,
            and limited visibility into how resources are actually used.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            See Where Systems Fail
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
