import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Background images - you can replace these with your actual electronics images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Change background image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: 'calc(110vh - 64px)' }}
    >
      
      {/* Background Images with Transition Effect */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Tech Badge */}
        <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-4 hover:bg-white/20 transition-all duration-300">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <span className="text-white text-xs font-Electro Holic tracking-wider">NEXT-GEN ELECTRONICS</span>
        </div>

        {/* Main Title */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl electro-font mb-4 leading-tight transition-all duration-1200 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="block text-white drop-shadow-lg">INVISION</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 drop-shadow-lg">
            ELECTRONICS
          </span>
          <span className="block text-white font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1">
            REIMAGINED
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md transition-all duration-1200 delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Cutting-edge technology meets innovative design.
          <span className="block mt-1 text-blue-300">
            Experience the future of electronics today.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 transition-all duration-1200 delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              EXPLORE PRODUCTS
            </span>
          </button>
          
          <button className="group px-6 py-2.5 border-2 border-white/40 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              WATCH DEMO
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto transition-all duration-1200 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: '50+', label: 'Premium Brands' },
            { number: '24/7', label: 'Tech Support' },
            { number: '10K+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-lg font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/70 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-4 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-4 h-6 border border-white/40 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 bg-white/60 rounded-full mt-1 animate-pulse"></div>
          </div>
          <span className="text-xs mt-1">SCROLL</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;