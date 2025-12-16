import { Linkedin, Mail, Phone } from 'lucide-react';
import { siteData } from '../../data/siteData';

const JudgesContent = () => {
  return (
    <div className="py-20 lg:py-28">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Our Leadership Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Distinguished legal professionals serving the Federation with excellence
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        {/* Featured Member - AG */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={siteData.team[0].image}
                    alt={siteData.team[0].name}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold-400 rounded-2xl px-6 py-3 shadow-xl">
                  <span className="text-primary-800 font-bold">Advocate General</span>
                </div>
              </div>
              
              <div>
                <span className="text-gold-600 font-semibold uppercase tracking-wider text-sm">Head of Office</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mt-2 mb-4">
                  {siteData.team[0].name}
                </h2>
                <p className="text-xl text-gold-600 font-medium mb-6">
                  {siteData.team[0].designation}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {siteData.team[0].description} With decades of experience in constitutional law, 
                  he has successfully represented the Federation in numerous landmark cases before 
                  the Supreme Court and High Courts of Pakistan.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white hover:bg-primary-700 transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">
            Additional & Deputy Advocates General
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.team.slice(1).map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
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
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gold-600 font-medium text-sm mb-3">
                    {member.designation}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgesContent;