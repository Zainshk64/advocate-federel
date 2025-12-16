import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Shield, Award, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold-400/10 to-transparent"></div>
      </div>

      {/* Government Emblem Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <Scale className="w-[500px] h-[500px] text-white" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">Official Government Portal</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Office of the{' '}
              <span className="text-gradient">Advocate General</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300">Federal Government of Pakistan</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Upholding justice, defending the Constitution, and providing expert legal 
              counsel to the Federal Government with integrity and excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/services"
                className="group bg-gradient-to-r from-gold-400 to-gold-500 text-primary-800 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-gold-400/25 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Learn More
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gold-400">50+</div>
                <div className="text-sm text-gray-400">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gold-400">10K+</div>
                <div className="text-sm text-gray-400">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gold-400">500+</div>
                <div className="text-sm text-gray-400">Legal Experts</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold-400 rounded-2xl flex items-center justify-center">
                      <Scale className="w-9 h-9 text-primary-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Legal Excellence</h3>
                      <p className="text-gold-400">Since 1947</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <Award className="w-5 h-5 text-gold-400" />
                      <span>Constitutional Law Experts</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Award className="w-5 h-5 text-gold-400" />
                      <span>Federal Court Representation</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Award className="w-5 h-5 text-gold-400" />
                      <span>Legislative Drafting</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Award className="w-5 h-5 text-gold-400" />
                      <span>International Legal Affairs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gold-400 text-primary-800 rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Dedication to Justice</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection