import React, { useState, useEffect } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'story', label: 'Our Story', icon: '🚀' },
    { id: 'mission', label: 'Mission', icon: '🎯' },
    { id: 'expertise', label: 'Expertise', icon: '⚡' },
    { id: 'values', label: 'Values', icon: '💎' }
  ];

  const productCategories = [
    {
      title: 'Interactive Touch Solutions',
      description: 'Écrans tactiles professionnels avec technologie infrarouge 10 points',
      icon: '👆',
      highlights: ['Technologie infrarouge 10 points', 'Haute luminosité 400 cd/m²', '50 000 heures de durée de vie']
    },
    {
      title: 'LED Video Walls',
      description: 'Solutions d\'affichage haute performance avec clarté visuelle exceptionnelle',
      icon: '📺',
      highlights: ['Lecture 4K', 'Bordure ultra fine 0.88mm', 'Fonctionnement 24/7']
    },
    {
      title: 'LCD Video Walls',
      description: 'Écrans LCD série Miroir pour collaboration polyvalente et flexible',
      icon: '🖥️',
      highlights: ['Uniformité des couleurs optimisée', 'Étalonnage précis pixel', 'Design élégant à cadre fin']
    },
    {
      title: 'OPS Integrated Systems',
      description: 'PC multifonction puissant pour environnements professionnels',
      icon: '💻',
      highlights: ['Processeur Intel Core i5-11G', 'Windows 10 Pro installé', 'Connectivité avancée']
    },
    {
      title: 'PTZ Camera Systems',
      description: 'Caméras professionnelles avec résolutions FHD, UHD et 4K',
      icon: '📹',
      highlights: ['Vidéo Ultra-HD 4K', 'Zoom HD 15x', 'Compatibilité Teams, Zoom, Meet']
    },
    {
      title: 'Interactive Whiteboards',
      description: 'Tableaux blancs coulissants professionnels avec surface céramique',
      icon: '📋',
      highlights: ['Surface céramique émaillée', 'Système coulissant fluide', 'Durabilité 9H anti-rayures']
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl"
             style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-5 blur-3xl"
             style={{ background: 'linear-gradient(135deg, #6c6ffb, #3fb8f6)' }}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-3 blur-2xl"
             style={{ background: 'radial-gradient(circle, #3fb8f6, transparent)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full mb-8 backdrop-blur-md border"
               style={{ 
                 backgroundColor: 'rgba(63, 184, 246, 0.1)', 
                 borderColor: 'rgba(63, 184, 246, 0.2)' 
               }}>
            <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#3fb8f6' }}></div>
            <span className="text-sm font-semibold tracking-wide" style={{ color: '#3fb8f6' }}>
              À PROPOS D'INVISION
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#040404', fontFamily: '"Inter", sans-serif' }}>
            Là Où la <span style={{ 
              background: 'linear-gradient(135deg, #3fb8f6 0%, #6c6ffb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Technologie</span><br />
            Rencontre l'<span style={{ 
              background: 'linear-gradient(135deg, #6c6ffb 0%, #3fb8f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Impact Visuel</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#6e6e6e' }}>
            L'art d'engager, d'émerveiller et de convertir à travers des solutions d'affichage innovantes
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 bg-white/50 hover:bg-white'
              }`}
              style={{
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' 
                  : undefined
              }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Our Story Tab */}
          {activeTab === 'story' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-6" style={{ color: '#040404' }}>
                  Notre Histoire
                </h3>
                <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#6e6e6e' }}>
                  <p>
                    <strong>INVISION Solutions</strong> révolutionne l'expérience client et professionnelle à travers des solutions d'affichage interactif de pointe. Nous concevons des systèmes clé-en-main qui transforment les magasins, salles d'exposition et espaces événementiels.
                  </p>
                  <p>
                    Notre expertise s'étend des écrans tactiles infrarouges aux murs vidéo LED spectaculaires, en passant par des systèmes de collaboration avancés. Chaque solution est pensée pour offrir une interaction fluide et intuitive.
                  </p>
                  <p>
                    Grâce à notre technologie propriétaire et notre approche sur mesure, nous garantissons des installations qui subliment chaque image dans toutes les conditions lumineuses.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                  <h4 className="text-2xl font-bold mb-6" style={{ color: '#040404' }}>
                    Nos Chiffres Clés
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '50,000+', label: 'Heures de Durée de Vie' },
                      { number: '400', label: 'cd/m² Luminosité' },
                      { number: '10', label: 'Points Tactiles' },
                      { number: '4K', label: 'Résolution Ultra-HD' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold mb-2"
                             style={{ 
                               background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)',
                               WebkitBackgroundClip: 'text',
                               WebkitTextFillColor: 'transparent'
                             }}>
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium" style={{ color: '#4f4f4f' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission Tab */}
          {activeTab === 'mission' && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 mb-12">
                <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-bold mb-6" style={{ color: '#040404' }}>
                  Notre Mission
                </h3>
                <p className="text-xl leading-relaxed mb-8" style={{ color: '#6e6e6e' }}>
                  Révolutionner l'expérience visuelle et interactive en proposant des solutions d'affichage innovantes qui transforment la façon dont les entreprises communiquent, collaborent et engagent leur audience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Innovation', desc: 'Technologies de pointe pour des expériences exceptionnelles' },
                    { title: 'Qualité', desc: 'Fiabilité et performance dans chaque installation' },
                    { title: 'Service', desc: 'Accompagnement personnalisé de A à Z' }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(63, 184, 246, 0.05)' }}>
                      <h4 className="font-bold mb-2" style={{ color: '#040404' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: '#6e6e6e' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Expertise Tab */}
          {activeTab === 'expertise' && (
            <div>
              <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#040404' }}>
                Notre Expertise Technique
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((category, index) => (
                  <div key={index} 
                       className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h4 className="text-xl font-bold mb-3" style={{ color: '#040404' }}>
                      {category.title}
                    </h4>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6e6e6e' }}>
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full mr-3"
                               style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
                          <span style={{ color: '#4f4f4f' }}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Excellence Technique',
                  description: 'Nous utilisons les technologies les plus avancées pour garantir des performances exceptionnelles et une fiabilité à toute épreuve.',
                  icon: '🔧',
                  features: ['Processeurs Intel dernière génération', 'Technologie infrarouge 10 points', 'Résolutions 4K Ultra-HD', 'Durabilité 50,000+ heures']
                },
                {
                  title: 'Approche Sur-Mesure',
                  description: 'Chaque projet est unique. Nous concevons des solutions personnalisées qui s\'adaptent parfaitement à vos besoins spécifiques.',
                  icon: '🎨',
                  features: ['Configurations flexibles', 'Installations sur mesure', 'Support personnalisé', 'Formation complète']
                },
                {
                  title: 'Innovation Continue',
                  description: 'Nous restons à la pointe de l\'innovation pour vous offrir les solutions d\'affichage les plus modernes du marché.',
                  icon: '⚡',
                  features: ['R&D permanente', 'Veille technologique', 'Partenariats stratégiques', 'Évolution constante']
                },
                {
                  title: 'Service Client Premium',
                  description: 'Notre engagement ne s\'arrête pas à l\'installation. Nous vous accompagnons tout au long de la vie de vos équipements.',
                  icon: '🤝',
                  features: ['Support technique 24/7', 'Maintenance préventive', 'Formation utilisateurs', 'Garanties étendues']
                }
              ].map((value, index) => (
                <div key={index} 
                     className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h4 className="text-2xl font-bold mb-4" style={{ color: '#040404' }}>
                    {value.title}
                  </h4>
                  <p className="text-lg mb-6 leading-relaxed" style={{ color: '#6e6e6e' }}>
                    {value.description}
                  </p>
                  <div className="space-y-3">
                    {value.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-3"
                             style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
                        <span className="font-medium" style={{ color: '#4f4f4f' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#040404' }}>
              Prêt à Transformer Votre Espace ?
            </h3>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#6e6e6e' }}>
              Découvrez comment nos solutions d'affichage interactif peuvent révolutionner votre environnement professionnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}>
                Demander un Devis
              </button>
              <button className="px-8 py-4 border-2 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-white"
                      style={{ 
                        borderColor: '#3fb8f6', 
                        color: '#3fb8f6' 
                      }}>
                Voir Nos Réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;