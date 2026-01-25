import { useNavigate } from "react-router-dom";

const RoleCard = ({ role, path }) => {
  const navigate = useNavigate();

  const roleConfig = {
    "Donor": {
      icon: "💝",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200 hover:border-pink-400",
    },
    "NGO / Implementing Partner": {
      icon: "🤝",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200 hover:border-blue-400",
    },
    "Merchant / Service Provider": {
      icon: "🏪",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      borderColor: "border-teal-200 hover:border-teal-400",
    },
    "Beneficiary": {
      icon: "👥",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200 hover:border-orange-400",
    },
    "Authority / Admin": {
      icon: "🏛️",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200 hover:border-purple-400",
    },
  };

  const config = roleConfig[role] || {
    icon: "🔷",
    color: "from-gray-500 to-gray-600",
    bgColor: "from-gray-50 to-gray-100",
    borderColor: "border-gray-200 hover:border-gray-400",
  };

  return (
    <div
      className={`group p-8 bg-gradient-to-br ${config.bgColor} rounded-2xl border-2 ${config.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
      onClick={() =>
        navigate(path, {
          state: { from: "/choose-role" },
        })
      }
    >
      <div className={`w-20 h-20 bg-gradient-to-br ${config.color} rounded-2xl flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
        {config.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {role}
      </h3>
      <button
        className={`mt-4 px-6 py-3 bg-gradient-to-r ${config.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300 w-full`}
      >
        Explore Role Journey
        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </div>
  );
};

export default RoleCard;
