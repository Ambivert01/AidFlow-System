import { useNavigate } from "react-router-dom";

const MerchantJourneyPage = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full overflow-hidden">
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-600 via-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
              Merchant / Service Provider Journey
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Merchant / Service Provider Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Provide services in the aid ecosystem with transparent transactions and verified delivery.
          </p>
          <button
            onClick={() => navigate("/choose-role")}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
          >
            ← Back to Role Selection
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Placeholder page. Content will be added later.
          </p>
          <div className="p-8 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl border border-teal-200">
            <p className="text-gray-700">
              This page will contain merchant-specific features, dashboards, and workflows.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MerchantJourneyPage;