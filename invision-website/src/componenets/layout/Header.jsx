import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'products', label: 'Produits' },
    { id: 'brands', label: 'Marques' },
    { id: 'quality', label: 'Qualité' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar styling
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'products', 'brands', 'quality', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-blue-500/30' 
        : 'bg-black/80 backdrop-blur-sm border-b border-blue-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent font-mono">
                  IV
                </span>
                <span className="text-blue-400 ml-1 font-light transition-colors group-hover:text-blue-300">
                  Invision
                </span>
              </div>
              {/* Animated underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 w-full h-px bg-blue-400"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-blue-500/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-all duration-300 relative group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 transform transition-transform duration-200" />
                ) : (
                  <Menu className="h-6 w-6 transform transition-transform duration-200" />
                )}
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out border-t border-blue-500/20 ${
        isMenuOpen 
          ? 'max-h-80 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-2 bg-black/95 backdrop-blur-lg">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                activeSection === item.id
                  ? 'text-blue-400 bg-blue-500/10 translate-x-2'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-white/5 hover:translate-x-2'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;