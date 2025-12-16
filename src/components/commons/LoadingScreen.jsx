import { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random increment for natural feel
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    // Complete loading after ~3.5 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 800);
      }, 400);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ${
        isExiting 
          ? 'opacity-0 scale-105' 
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className={`absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 border-2 border-gold-400/30 rounded-full transition-transform duration-1000 ${
            progress > 50 ? 'scale-110 opacity-50' : 'scale-100 opacity-100'
          }`}></div>
          
          {/* Middle Ring - Rotating */}
          <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 border-2 border-transparent border-t-gold-400 rounded-full animate-spin" 
               style={{ animationDuration: '2s' }}></div>
          
          {/* Logo Container */}
          <div className={`w-32 h-32 sm:w-40 sm:h-40 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 ${
            progress === 100 ? 'scale-110' : 'scale-100'
          }`}>
            <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-gold-400/30 transition-all duration-500 ${
              progress === 100 ? 'rotate-0' : '-rotate-6'
            }`}>
              <Scale className={`w-10 h-10 sm:w-12 sm:h-12 text-primary-800 transition-transform duration-500 ${
                progress === 100 ? 'scale-110' : 'scale-100'
              }`} />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Advocate General
          </h1>
          <p className="text-gold-400 text-sm sm:text-base lg:text-lg font-medium">
            Federal Government of Pakistan
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 lg:w-96">
          {/* Progress Track */}
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-gold-400 to-gold-300 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Progress Text */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-white/50 text-xs sm:text-sm">Loading...</span>
            <span className="text-gold-400 font-semibold text-sm sm:text-base">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Message */}
        <div className="mt-8">
          <p className={`text-white/40 text-xs sm:text-sm transition-opacity duration-500 ${
            progress < 33 ? 'opacity-100' : 'opacity-0'
          }`}>
            Initializing legal portal...
          </p>
          <p className={`text-white/40 text-xs sm:text-sm transition-opacity duration-500 absolute ${
            progress >= 33 && progress < 66 ? 'opacity-100' : 'opacity-0'
          }`}>
            Preparing resources...
          </p>
          <p className={`text-white/40 text-xs sm:text-sm transition-opacity duration-500 absolute ${
            progress >= 66 && progress < 100 ? 'opacity-100' : 'opacity-0'
          }`}>
            Almost ready...
          </p>
          <p className={`text-gold-400 text-xs sm:text-sm font-medium transition-opacity duration-500 absolute ${
            progress === 100 ? 'opacity-100' : 'opacity-0'
          }`}>
            Welcome!
          </p>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-20">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;