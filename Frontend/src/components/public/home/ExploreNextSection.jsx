import { useNavigate } from "react-router-dom";

const ExploreNextSection = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Continue as Donor",
      description: "Explore donor journey and features",
      path: "/journey/donor",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Continue as NGO",
      description: "See how NGOs manage aid distribution",
      path: "/journey/ngo",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Admin / Authority",
      description: "Access governance and oversight tools",
      path: "/journey/authority",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Continue Exploring
          <span className="block">AidFlow</span>
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Choose how you would like to explore the platform. No login is required
          at this stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => navigate(action.path, { state: { from: "/choose-role" } })}
              className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <span className="text-white text-xl">→</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {action.title}
              </h3>
              <p className="text-white/80 text-sm">
                {action.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => navigate("/choose-role")}
            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
          >
            View All Roles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreNextSection;
