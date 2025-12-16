import { Scale, Users, FileCheck, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Scale, value: '50+', label: 'Years of Service', suffix: '' },
    { icon: FileCheck, value: '10,000', label: 'Cases Handled', suffix: '+' },
    { icon: Users, value: '500', label: 'Legal Experts', suffix: '+' },
    { icon: Award, value: '100', label: 'Success Rate', suffix: '%' }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold-400/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-400/10 rounded-full"></div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 group-hover:bg-gold-400 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-gold-400 group-hover:text-primary-800 transition-colors duration-300" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}<span className="text-gold-400">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;