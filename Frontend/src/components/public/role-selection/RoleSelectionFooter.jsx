import { useNavigate } from "react-router-dom";

const RoleSelectionFooter = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Not Sure Yet?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          You can learn more about how AidFlow works or return to the home page
          before choosing a role.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/how-it-works")}
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Learn More About AidFlow
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoleSelectionFooter;
