const RoleSelectionIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
            Role Selection
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Choose How You Participate
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-cyan-200">
            in AidFlow
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          AidFlow supports multiple roles, each with different responsibilities.
          You can explore each role before deciding how you want to participate.
        </p>
      </div>
    </section>
  );
};

export default RoleSelectionIntro;