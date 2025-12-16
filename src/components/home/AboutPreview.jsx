import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Scale, BookOpen, Users } from 'lucide-react';
import { siteData } from '../../data/siteData';

const AboutPreview = () => {
  const features = [
    "Constitutional law expertise",
    "Supreme Court representation",
    "Federal legal advisory",
    "Legislative drafting services"
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
                  alt="Legal Excellence"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700">1947</div>
                    <div className="text-sm text-gray-500">Established</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card 2 */}
              <div className="absolute -top-6 -left-6 bg-gold-400 rounded-2xl p-5 shadow-xl">
                <BookOpen className="w-8 h-8 text-primary-800" />
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-primary-100 rounded-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-gold-400"></span>
              <span className="text-gold-600 font-semibold uppercase tracking-wider text-sm">About Us</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-800 mb-6 leading-tight">
              Defending the Constitution with{' '}
              <span className="text-gold-500">Excellence & Integrity</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {siteData.aboutContent.mission}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-10 pb-10 border-b border-gray-200">
              <div>
                <div className="text-4xl font-bold text-primary-700">500+</div>
                <div className="text-sm text-gray-500">Legal Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-700">10K+</div>
                <div className="text-sm text-gray-500">Cases Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-700">50+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold group"
            >
              Learn More About Our Legacy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;