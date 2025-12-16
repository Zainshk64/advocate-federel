import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone, Mail } from 'lucide-react';
import { siteData } from '../../data/siteData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Bar - Only visible when scrolled OR not on homepage */}
      {/* <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-primary-900 text-white py-2 text-sm hidden lg:block">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href={`tel:${siteData.contact.phone}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {siteData.contact.phone}
              </a>
              <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {siteData.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{siteData.contact.workingHours}</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'top-0 lg:top-[36px]' // Account for top bar
          : 'top-6 lg:top-8'
      }`}>
        <div className={`mx-auto transition-all duration-500 ${
          scrolled || !isHomePage
            ? 'container px-4 lg:px-6'
            : 'container px-4 lg:px-6'
        }`}>
          <div className={`transition-all duration-500 ${
            scrolled || !isHomePage
              ? 'bg-white/80 shadow-2xl rounded-2xl backdrop-blur-lg shadow-black/10 py-4 px-4 lg:px-6'
              : 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl py-4 px-4 lg:px-6'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 ${
                    scrolled || !isHomePage
                      ? 'bg-gradient-to-br from-primary-600 to-primary-800'
                      : 'bg-white/20 backdrop-blur-sm border border-white/30'
                  }`}>
                    <Scale className={`w-6 h-6 lg:w-8 lg:h-8 transition-colors duration-300 ${
                      scrolled || !isHomePage
                        ? 'text-gold-400'
                        : 'text-gold-400'
                    }`} />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-gold-400 rounded-full border-2 transition-colors duration-300 ${
                    scrolled || !isHomePage
                      ? 'border-white'
                      : 'border-primary-800'
                  }`}></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className={`text-base lg:text-xl font-bold leading-tight transition-colors duration-300 ${
                    scrolled || !isHomePage
                      ? 'text-primary-800'
                      : 'text-white'
                  }`}>
                    Advocate General
                  </h1>
                  <p className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                    scrolled || !isHomePage
                      ? 'text-gold-600'
                      : 'text-gold-400'
                  }`}>
                    Federal Government of Pakistan
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? scrolled || !isHomePage
                          ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                          : 'bg-white/20 text-white backdrop-blur-sm'
                        : scrolled || !isHomePage
                          ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button & Mobile Menu */}
              <div className="flex items-center gap-3">
                {/* CTA Button - Desktop */}
                <Link
                  to="/contact"
                  className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    scrolled || !isHomePage
                      ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-primary-800 hover:shadow-lg hover:shadow-gold-400/30'
                      : 'bg-gold-400 text-primary-800 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20'
                  }`}
                >
                  Get Legal Help
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                    scrolled || !isHomePage
                      ? 'hover:bg-gray-100 text-gray-700'
                      : 'hover:bg-white/10 text-white'
                  }`}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-primary-800 leading-tight">Advocate General</h1>
                <p className="text-xs text-gold-600">Federal Pakistan</p>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="p-5 overflow-y-auto h-[calc(100%-180px)]">
            {/* Navigation Links */}
            <div className="space-y-2">
              {siteData.navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-100"></div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact</h3>
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm">{siteData.contact.phone}</span>
              </a>
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm">{siteData.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-gray-50">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-400 to-gold-500 text-primary-800 py-4 rounded-xl font-semibold shadow-lg"
            >
              Get Legal Help
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;