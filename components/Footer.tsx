export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              OAPCC
            </h3>
            <p className="text-slate-300 mb-4">
              Ona Ara Pentecostal Church
            </p>
            <p className="text-slate-400 text-sm">
              Raising men and women of Godly character in all spheres of life all over the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vision" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#mission" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#values" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Core Values
                </a>
              </li>
              <li>
                <a href="#objectives" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Objectives
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-slate-300 text-sm mb-2">
              For more information about our church and activities, please reach out to us.
            </p>
            <div className="mt-4">
              <p className="text-slate-400 text-sm">
                &quot;For God so loved the world that he gave his one and only Son...&quot;
              </p>
              <p className="text-slate-500 text-xs mt-2">John 3:16</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Ona Ara Pentecostal Church (OAPCC). All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Built with faith, hope, and love
          </p>
        </div>
      </div>
    </footer>
  );
}

