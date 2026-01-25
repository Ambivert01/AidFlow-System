import { useNavigate } from "react-router-dom";

const AudienceSection = () => {
  const navigate = useNavigate();

  const audiences = [
    {
      title: "Donors",
      description: "Track your contributions and see real impact",
      icon: "💝",
      color: "from-pink-500 to-rose-500",
      path: "/journey/donor",
    },
    {
      title: "NGOs",
      description: "Manage aid distribution with transparency",
      icon: "🤝",
      color: "from-blue-500 to-cyan-500",
      path: "/journey/ngo",
    },
    {
      title: "Government",
      description: "Oversee and govern aid systems effectively",
      icon: "🏛️",
      color: "from-purple-500 to-indigo-500",
      path: "/journey/authority",
    },
    {
      title: "Beneficiaries",
      description: "Access aid services with confidence",
      icon: "👥",
      color: "from-orange-500 to-amber-500",
      path: "/journey/beneficiary",
    },
    {
      title: "Merchants",
      description: "Provide services in the aid ecosystem",
      icon: "🏪",
      color: "from-teal-500 to-green-500",
      path: "/journey/merchant",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Stakeholders
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Is AidFlow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              For?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AidFlow serves all stakeholders in the aid ecosystem, providing tailored
            experiences for each role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <button
              key={index}
              onClick={() => navigate(audience.path, { state: { from: "/choose-role" } })}
              className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {audience.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {audience.description}
              </p>
              <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${audience.color} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
                Explore
                <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
