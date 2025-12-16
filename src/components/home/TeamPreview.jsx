import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { siteData } from '../../data/siteData';

const TeamPreview = () => {
  const featuredTeam = siteData.team.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-gold-400"></span>
            <span className="text-gold-600 font-semibold uppercase tracking-wider text-sm">Our Leadership</span>
            <span className="w-12 h-0.5 bg-gold-400"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 mb-6">
            Meet Our Distinguished Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our team comprises highly qualified legal professionals dedicated to 
            upholding justice and serving the nation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTeam.map((member) => (
            <div 
              key={member.id}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-400 hover:text-primary-800 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-400 hover:text-primary-800 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium text-sm mb-3">
                    {member.designation}
                  </p>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {member.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/judges"
            className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all"
          >
            View Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;