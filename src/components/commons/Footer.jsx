import { Link } from "react-router-dom";
import {
  Scale,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import {AnimatePresence, motion } from 'framer-motion'
 import { siteData } from "../../data/siteData";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 90); // 👈 show after 90px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/judges" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Constitution of Pakistan", path: "#" },
    { name: "Federal Laws", path: "#" },
    { name: "Supreme Court", path: "#" },
    { name: "Law & Justice Commission", path: "#" },
    { name: "Pakistan Bar Council", path: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      {/* Decorative Elements */}
     <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
   
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center">
                <Scale className="w-7 h-7 text-primary-800" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Advocate General</h3>
                <p className="text-gold-400 text-sm">Federal Pakistan</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Office of the Advocate General Federal serves as the chief
              legal advisor to the Federal Government, upholding the
              Constitution and rule of law.
            </p>
            <div className="flex gap-3">
              <a
                href={siteData.socialLinks.facebook}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-primary-800 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteData.socialLinks.twitter}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-primary-800 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteData.socialLinks.linkedin}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-400 hover:text-primary-800 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-400"></span>
              Legal Resources
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold-400"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-gray-300">
                  {siteData.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-gray-300">{siteData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-gray-300">{siteData.contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-gray-300">
                  {siteData.contact.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Office of the Advocate General
              Federal. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gold-400 text-primary-800 rounded-xl shadow-lg 
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                       flex items-center justify-center z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
