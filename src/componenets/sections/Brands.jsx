import React, { useState, useEffect } from 'react';

const Brands = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePartner, setActivePartner] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const partners = [
    {
      id: 1,
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
      category: 'Display Technology',
      description: 'Leading manufacturer of professional displays and LED walls',
      partnership: 'Authorized Partner',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      name: 'LG',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg',
      category: 'Display Solutions',
      description: 'Premium OLED and LCD display technologies',
      partnership: 'Premium Partner',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 3,
      name: 'Sony',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
      category: 'Professional AV',
      description: 'High-end professional audio-visual equipment',
      partnership: 'Technology Partner',
      color: 'from-gray-800 to-black'
    },
    {
      id: 4,
      name: 'Panasonic',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Panasonic_logo_%28Blue%29.svg',
      category: 'Digital Signage',
      description: 'Innovative digital signage and display solutions',
      partnership: 'Strategic Partner',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 5,
      name: 'Philips',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg',
      category: 'LED Technology',
      description: 'Advanced LED display and lighting solutions',
      partnership: 'Certified Partner',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 6,
      name: 'Sharp',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Sharp_logo.svg',
      category: 'Interactive Displays',
      description: 'Touch-enabled interactive display systems',
      partnership: 'Authorized Dealer',
      color: 'from-red-600 to-red-800'
    }
  ];

  const certifications = [
    {
      name: 'ISO 9001',
      description: 'Quality Management System',
      icon: '🏆'
    },
    {
      name: 'CE Marking',
      description: 'European Conformity',
      icon: '✓'
    },
    {
      name: 'FCC Certified',
      description: 'Federal Communications Commission',
      icon: '📡'
    },
    {
      name: 'RoHS Compliant',
      description: 'Restriction of Hazardous Substances',
      icon: '🌱'
    }
  ];

  return (
    <section 
      id="brands" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23040404' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider uppercase">
              Our Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with the world's leading technology brands to deliver 
            cutting-edge display solutions that exceed expectations.
          </p>
        </div>

        {/* Partners Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-300"
              onMouseEnter={() => setActivePartner(partner.id)}
              onMouseLeave={() => setActivePartner(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{partner.category}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${partner.color}`}>
                  {partner.partnership}
                </span>
              </div>

              {/* Hover Details */}
              <div className={`absolute inset-0 bg-white rounded-2xl p-4 flex flex-col justify-center transition-all duration-300 ${
                activePartner === partner.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Team Section */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0"
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                     backgroundSize: '40px 40px'
                   }}></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Content */}
              <div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
                    Marketing Partner
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Website Powered by{' '}
                  <span className="text-cyan-200">EVO Market</span>
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  Our digital presence and marketing strategies are expertly crafted by 
                  EVO Market, specialists in technology sector marketing and web development.
                </p>
                
                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Web Development',
                    'Digital Marketing',
                    'SEO Optimization',
                    'Brand Strategy',
                    'Content Creation',
                    'Social Media Management'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                      <span className="text-white/90 font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Visit EVO Market</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Right - Logo/Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
                        <span className="text-3xl font-black text-blue-600">EVO</span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">EVO Market</h4>
                      <p className="text-cyan-200 text-sm">Marketing Excellence</p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Partnership{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Impact
                </span>
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our strategic partnerships enable us to deliver exceptional results and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '6+', label: 'Global Partners' },
                { number: '500+', label: 'Projects Delivered' },
                { number: '50+', label: 'Countries Served' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;