import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown, Monitor, Zap, BookOpen } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div></div>
    // <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    //   {/* Dynamic Background */}
    //   <div className="absolute inset-0">
    //     {/* Gradient base */}
    //     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        
    //     {/* Interactive mouse-following gradient */}
    //     <div 
    //       className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
    //       style={{
    //         background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
    //       }}
    //     ></div>
        
    //     {/* Animated tech elements */}
    //     <div className="absolute inset-0 opacity-40">
    //       {/* Circuit dots */}
    //       <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
    //       <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
    //       <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-500"></div>
    //       <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1500"></div>
    //       <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-2000"></div>
          
    //       {/* Circuit lines */}
    //       <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
    //       <div className="absolute top-1/3 right-1/3 w-24 h-px bg-gradient-to-l from-blue-300/50 to-transparent rotate-45"></div>
    //       <div className="absolute bottom-1/4 left-1/3 w-28 h-px bg-gradient-to-r from-blue-500/50 to-transparent -rotate-12"></div>
    //       <div className="absolute top-1/2 right-1/4 w-20 h-px bg-gradient-to-l from-blue-400/50 to-transparent rotate-90"></div>
          
    //       {/* Floating particles */}
    //       <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-blue-500/20 rounded-full animate-float"></div>
    //       <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-blue-400/20 rounded-full animate-float delay-1000"></div>
    //       <div className="absolute bottom-1/5 left-2/3 w-5 h-5 bg-blue-600/20 rounded-full animate-float delay-2000"></div>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
    //     <div className="grid lg:grid-cols-2 gap-16 items-center">
          
    //       {/* Left Content */}
    //       <div className="space-y-8 text-center lg:text-left">
    //         {/* Badge */}
    //         <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
    //           <div className="flex items-center space-x-2">
    //             <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
    //             <span className="text-blue-400 text-sm font-medium">Technologie • Innovation • Impact</span>
    //           </div>
    //         </div>
            
    //         {/* Main Headline */}
    //         <div className="space-y-4">
    //           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
    //             <span className="block text-white animate-fade-in-up">Là Où la</span>
    //             <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-up delay-200">
    //               Technologie
    //             </span>
    //             <span className="block text-white animate-fade-in-up delay-400">Rencontre</span>
    //             <span className="block text-blue-400 font-light animate-fade-in-up delay-600">l'Impact Visuel</span>
    //           </h1>
    //         </div>
            
    //         {/* Description */}
    //         <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up delay-800">
    //           Invision Solutions révolutionne les environnements d'apprentissage et de travail 
    //           avec des <span className="text-blue-400 font-semibold">solutions interactives de pointe</span>, 
    //           alliant performance et innovation.
    //         </p>

    //         {/* Key Features */}
    //         <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-fade-in-up delay-1000">
    //           {[
    //             { icon: <Monitor className="h-5 w-5" />, text: "Écrans Interactifs" },
    //             { icon: <Zap className="h-5 w-5" />, text: "Intégration TIC" },
    //             { icon: <BookOpen className="h-5 w-5" />, text: "Solutions Pédagogiques" }
    //           ].map((feature, index) => (
    //             <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-lg border border-blue-500/20">
    //               <div className="text-blue-400">
    //                 {feature.icon}
    //               </div>
    //               <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
    //             </div>
    //           ))}
    //         </div>

    //         {/* CTA Buttons */}
    //         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-1200">
    //           <button 
    //             onClick={() => scrollToSection('products')}
    //             className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-white relative overflow-hidden"
    //           >
    //             <div className="relative z-10 flex items-center justify-center space-x-2">
    //               <span>Découvrir nos produits</span>
    //               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
    //             </div>
    //             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //           </button>
              
    //           <button className="group px-8 py-4 border border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-500/10 relative overflow-hidden">
    //             <div className="relative z-10 flex items-center justify-center space-x-2">
    //               <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
    //               <span>Voir la démo</span>
    //             </div>
    //             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //           </button>
    //         </div>
    //       </div>

    //       {/* Right Content - Hero Image/Visual */}
    //       <div className="relative animate-fade-in-up delay-600">
    //         <div className="relative">
    //           {/* Main visual container */}
    //           <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-blue-500/20 shadow-2xl backdrop-blur-sm">
    //             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
                
    //             {/* Hero Image Placeholder */}
    //             <div className="relative">
    //               <div className="bg-black/60 rounded-2xl p-8 mb-6 border border-blue-500/30 backdrop-blur-sm">
    //                 <div className="text-center text-gray-400">
    //                   <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-blue-500/30">
    //                     <Monitor className="h-12 w-12 text-blue-400" />
    //                   </div>
    //                   <p className="text-lg font-semibold text-blue-400 mb-2">Espace pour Image Hero Principal</p>
    //                   <p className="text-sm text-gray-500">Écran interactif, environnement technologique</p>
    //                   <p className="text-xs text-gray-600 mt-2">Recommandé: 800x600px, format moderne</p>
    //                 </div>
    //               </div>
                  
    //               {/* Feature highlights */}
    //               <div className="grid grid-cols-3 gap-3">
    //                 {[
    //                   { icon: <Monitor className="h-4 w-4" />, label: "4K Display" },
    //                   { icon: <Zap className="h-4 w-4" />, label: "Smart Tech" },
    //                   { icon: <BookOpen className="h-4 w-4" />, label: "Education" }
    //                 ].map((item, index) => (
    //                   <div key={index} className="bg-black/40 rounded-lg p-3 border border-blue-500/20 text-center hover:bg-black/60 transition-colors duration-300">
    //                     <div className="w-8 h-8 bg-blue-500/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
    //                       <div className="text-blue-400">
    //                         {item.icon}
    //                       </div>
    //                     </div>
    //                     <div className="text-xs text-gray-400 font-medium">{item.label}</div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
              
    //           {/* Floating elements */}
    //           <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center backdrop-blur-sm animate-float">
    //             <Zap className="h-8 w-8 text-blue-400" />
    //           </div>
              
    //           <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center backdrop-blur-sm animate-float delay-1000">
    //             <BookOpen className="h-6 w-6 text-purple-400" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Scroll Indicator */}
    //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    //     <button 
    //       onClick={() => scrollToSection('about')}
    //       className="p-2 rounded-full bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors duration-300 group"
    //     >
    //       <ChevronDown className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
    //     </button>
    //   </div>
    // </section>
  );
};

export default Hero;