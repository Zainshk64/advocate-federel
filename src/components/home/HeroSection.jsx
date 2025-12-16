import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Play, Scale, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
      
        >
          <source
            src="https://www.pexels.com/download/video/5636977/"
            type="video/mp4"
          />
          {/* Fallback for smaller screens */}
          <source
            src="https://www.pexels.com/download/video/5636977/"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/95 via-40% to-primary-900/60"></div>
        
        {/* Additional Dark Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gold-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Decorative Line */}
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent hidden lg:block"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Content with Fade In Animation */}
          <div className={`transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-white">Official Government Portal</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Office of the{' '}
              <span className="text-gradient block sm:inline">Advocate General</span>
            </h1>

            <p className={`text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-6 transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Federal Government of Pakistan
            </p>

            {/* Description */}
            <p className={`text-base lg:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Upholding justice, defending the Constitution, and providing expert legal 
              counsel with integrity and excellence.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Link
                to="/services"
                className="group bg-gradient-to-r from-gold-400 to-gold-500 text-primary-800 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-gold-400/25 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Learn More
              </Link>
            </div>

            {/* Stats Row */}
           
          </div>
        </div>

        {/* Right Side - Floating Justice Icon (visible on large screens) */}
        <div className={`hidden xl:block absolute right-20 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          <div className="relative">
            <div className="w-32 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center animate-float">
              <Scale className="w-16 h-16 text-gold-400/80" />
            </div>
            {/* Floating rings */}
            <div className="absolute -inset-4 border border-gold-400/20 rounded-3xl animate-ping-slow"></div>
            <div className="absolute -inset-8 border border-gold-400/10 rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToNext}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-gold-400 transition-all duration-300 cursor-pointer group ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Bottom Wave */}
       {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div> */}

    </section>
  );
};

export default HeroSection;