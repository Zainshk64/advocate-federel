import { Link } from 'react-router-dom';
import { 
  Scale, 
  FileText, 
  Gavel, 
  Globe, 
  PenTool, 
  Search,
  ArrowRight
} from 'lucide-react';
import { siteData } from '../../data/siteData';

const iconMap = {
  Scale,
  FileText,
  Gavel,
  Globe,
  PenTool,
  Search
};

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-gold-400"></span>
            <span className="text-gold-600 font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <span className="w-12 h-0.5 bg-gold-400"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 mb-6">
            Comprehensive Legal Services
          </h2>
          <p className="text-gray-600 text-lg">
            Providing expert legal representation and advisory services to all federal 
            government ministries, divisions, and attached departments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Scale;
            return (
              <div 
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Number */}
                  <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-white/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-800 group-hover:text-white mb-4 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/80 mb-6 transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary-600 group-hover:text-gold-400 font-semibold transition-colors duration-500"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;