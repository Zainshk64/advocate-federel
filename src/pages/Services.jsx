import { Scale, FileText, Gavel, Globe, PenTool, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = { Scale, FileText, Gavel, Globe, PenTool, Search };

const Services = () => {
  return (
    <div className="py-20 lg:py-28">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Our Legal Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive legal services for Federal Government ministries and departments
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Scale;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    Expert consultation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    Court representation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                    Documentation support
                  </li>
                </ul>
                
                <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-800 py-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Legal Assistance?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our office for expert legal guidance on federal matters
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-400 text-primary-800 px-8 py-4 rounded-xl font-semibold hover:bg-gold-300 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;