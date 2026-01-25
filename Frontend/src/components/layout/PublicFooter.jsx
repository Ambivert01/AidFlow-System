const PublicFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">AidFlow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transparent, accountable, and governed system for delivering aid responsibly at scale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/choose-role" className="hover:text-white transition-colors">
                  Choose Role
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering NGOs, governments, and stakeholders with transparent aid governance.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AidFlow — Transparent Aid Governance System
          </p>
          <p className="text-gray-500 text-xs mt-2 sm:mt-0">
            Built for transparency, accountability, and impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;