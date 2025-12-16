import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import { siteData } from '../../data/siteData';

const NewsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-gold-400"></span>
            <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">Latest Updates</span>
            <span className="w-12 h-0.5 bg-gold-400"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            News & Announcements
          </h2>
          <p className="text-gray-300 text-lg">
            Stay informed about the latest developments, court proceedings, 
            and official announcements from our office.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured News */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/15 transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gold-400 text-primary-800 text-xs font-bold px-3 py-1 rounded-full">
                  {siteData.news[0].category}
                </span>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {siteData.news[0].date}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                {siteData.news[0].title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {siteData.news[0].excerpt}
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-gold-400 font-semibold group/link">
                Read Full Article
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4">
            {siteData.news.slice(1).map((item) => (
              <div 
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-xl flex items-center justify-center">
                      <Tag className="w-5 h-5 text-gold-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gold-400 text-xs font-medium">{item.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-xs">{item.date}</span>
                    </div>
                    <h4 className="text-white font-semibold group-hover:text-gold-400 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gold-400 transition-colors shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gold-400 text-primary-800 px-8 py-4 rounded-xl font-semibold hover:bg-gold-300 transition-colors"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;