import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Background images - you can replace these with your actual electronics images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    '/assests/G5.png',
    '/assests/G2.png',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    '/assests/G8.png'
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
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-600/20 to-blue-800/30"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Tech Badge */}
        {/* <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:bg-white/20 transition-all duration-300">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
          <span className="text-white text-xs sm:text-sm font-medium tracking-wider">PROFESSIONAL DISPLAY SOLUTIONS</span>
        </div> */}

        {/* Cool Title with Mobile Adjustments */}
        <h1 className={`mb-6 sm:mb-8 leading-none transition-all duration-1200 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 16rem)', // Smaller starting size for mobile
              fontWeight: '900',
              letterSpacing: '-0.05em',
              fontFamily: '"Orbitron", "Exo 2", "Rajdhani", sans-serif',
              marginTop: '1rem' // Add top margin for mobile
            }}>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 drop-shadow-2xl"
                style={{ 
                  WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                  textShadow: '0 0 80px rgba(59, 130, 246, 0.8), 0 0 120px rgba(6, 182, 212, 0.6)',
                  filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.8))'
                }}>
            INVISION
          </span>
        </h1>

 
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md transition-all duration-1200 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
             style={{ fontFamily: '"Inter", "Poppins", sans-serif' }}>
            <span className="block mb-2 font-medium">
              Professional Video Walls & Display Solutions
            </span>
            <span className="block text-blue-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light">
              Transforming spaces with cutting-edge technology
            </span>
          </p>

           
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 transition-all duration-1200 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a 
                href="/assests/Catalogue INVISION corpo v2 (1).pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center" style={{ fontFamily: '"Inter", sans-serif' }}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            VIEW CATALOG
                </span>
              </a>
              
              <button 
                onClick={() => {
            document.getElementById('contact').scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
                }} 
                className="group px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full hover:border-blue-400 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="flex items-center justify-center" style={{ fontFamily: '"Inter", sans-serif' }}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            GET QUOTE
                </span>
              </button>
            </div>

            {/* Enhanced Stats with mobile responsive grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto transition-all duration-1200 delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '24/7', label: 'Technical Support' },
            { number: '15+', label: 'Years Experience' },
            { number: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-blue-400/20 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: '"Orbitron", sans-serif' }}>{stat.number}</div>
              <div className="text-blue-200 text-xs sm:text-sm font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50' 
                : 'bg-white/50 hover:bg-blue-300/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-4 sm:right-8 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-4 h-6 sm:w-5 sm:h-8 border-2 border-blue-400/40 rounded-full flex justify-center">
            <div className="w-1 h-1.5 sm:w-1 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs sm:text-sm mt-2 font-medium text-blue-200" style={{ fontFamily: '"Inter", sans-serif' }}>SCROLL</span>
        </div>
      </div>

      {/* Import Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&family=Exo+2:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          h1 {
            font-size: clamp(2.5rem, 12vw, 6rem) !important;
            margin-top: 2rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          /* Reduce spacing on mobile */
          .tech-badge {
            margin-bottom: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: clamp(2rem, 15vw, 4rem) !important;
            margin-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;