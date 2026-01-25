import RoleCard from "./RoleCard"

const RoleList = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Select the Role That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Matches You
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RoleCard role="Donor" path="/journey/donor" />
          <RoleCard role="NGO / Implementing Partner" path="/journey/ngo" />
          <RoleCard role="Merchant / Service Provider" path="/journey/merchant" />
          <RoleCard role="Beneficiary" path="/journey/beneficiary" />
          <RoleCard role="Authority / Admin" path="/journey/authority" />
        </div>
      </div>
    </section>
  );
};

export default RoleList;
