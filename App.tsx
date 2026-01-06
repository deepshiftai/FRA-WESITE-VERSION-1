
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Strategies from './pages/Strategies';
import Resources from './pages/Resources';
import Membership from './pages/Membership';
import News from './pages/News';
import Contact from './pages/Contact';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Our Work', 
      path: '/programs', 
      submenu: [
        { name: 'Thematic Programs', path: '/programs' },
        { name: 'Our Strategies', path: '/strategies' }
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Resources', path: '/resources' },
    { name: 'Membership', path: '/membership' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3" aria-label="Food Rights Alliance Uganda - Return to Homepage">
              <img 
                src="https://i.postimg.cc/G2X3fNM4/FRA_LOGO.png" 
                alt="Food Rights Alliance Uganda official logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="hidden lg:flex flex-col border-l border-emerald-100 pl-3">
                <span className="text-emerald-800 font-extrabold text-sm leading-tight uppercase tracking-wider">Food Rights</span>
                <span className="text-amber-600 font-bold text-xs leading-tight uppercase">Alliance Uganda</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.submenu && setIsSubmenuOpen(true)}
                onMouseLeave={() => link.submenu && setIsSubmenuOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`${
                    location.pathname === link.path || (link.submenu && link.submenu.some(s => s.path === location.pathname))
                      ? 'text-emerald-700 font-bold border-b-2 border-emerald-700' 
                      : 'text-slate-600 hover:text-emerald-600'
                  } transition-all duration-200 py-2 text-[13px] font-bold uppercase tracking-tight flex items-center`}
                >
                  {link.name}
                  {link.submenu && <i className="fa-solid fa-chevron-down ml-1.5 text-[10px]"></i>}
                </Link>

                {link.submenu && (
                  <div className={`absolute top-full left-0 w-48 bg-white border border-emerald-100 shadow-xl rounded-b-2xl overflow-hidden transition-all duration-300 origin-top ${isSubmenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                    {link.submenu.map(sub => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-5 py-4 text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${location.pathname === sub.path ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full text-xs font-bold uppercase transition-colors shadow-lg shadow-emerald-700/20"
            >
              Donate
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-slate-600 hover:text-emerald-600 focus:outline-none"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => !link.submenu && setIsOpen(false)}
                  className="block px-3 py-3 text-base font-bold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md uppercase tracking-wide"
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="ml-4 space-y-1 border-l-2 border-emerald-100 pl-4">
                    {link.submenu.map(sub => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-emerald-700"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-white bg-emerald-700 rounded-md text-center mt-4 uppercase">
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/G2X3fNM4/FRA_LOGO.png" 
              alt="FRA Logo" 
              className="h-12 w-auto brightness-0 invert" 
            />
            <span className="text-white font-bold text-xl uppercase tracking-tighter">FRA Uganda</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading the transformation of agrifood system governance in Uganda since 1999. Dedicated to the human right to adequate food for all.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#" aria-label="X Profile" className="hover:text-emerald-400 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
            <a href="#" aria-label="Facebook Page" className="hover:text-emerald-400 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
            <a href="#" aria-label="LinkedIn Profile" className="hover:text-emerald-400 transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Work</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Thematic Programs</Link></li>
            <li><Link to="/strategies" className="hover:text-emerald-400 transition-colors">Our Strategies</Link></li>
            <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Healthy Diets</Link></li>
            <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">Current Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About History</Link></li>
            <li><Link to="/membership" className="hover:text-emerald-400 transition-colors">Join the Alliance</Link></li>
            <li><Link to="/resources" className="hover:text-emerald-400 transition-colors">Resource Repository</Link></li>
            <li><Link to="/news" className="hover:text-emerald-400 transition-colors">Latest Updates</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              <i className="fa-solid fa-location-dot mt-1 text-emerald-500"></i>
              <span>Plot 82 Mutesa I Road - Namirembe, Kampala</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fa-solid fa-phone text-emerald-500"></i>
              <span>+256-706-535-222</span>
            </li>
            <li className="flex items-center space-x-3">
              <i className="fa-solid fa-envelope text-emerald-500"></i>
              <span>fra@frauganda.org</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Food Rights Alliance Uganda. Nourishing Governance, Sustaining Futures.</p>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
