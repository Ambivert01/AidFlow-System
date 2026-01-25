const RoleOverview = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Different Roles,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Shared Accountability
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every role in AidFlow operates within defined responsibilities and is
          accountable to the same system rules and oversight.
        </p>
      </div>
    </section>
  );
};

export default RoleOverview;