import { useNavigate } from "react-router-dom";

const GovernanceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30 mb-4">
            Governance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How the System Is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-cyan-200">
              Governed
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            AidFlow operates under predefined governance rules that establish clear
            roles, responsibilities, and oversight before any aid activity begins.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/choose-role")}
            className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
          >
            Understand Roles & Responsibilities
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            See Governance Principles
          </button>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
