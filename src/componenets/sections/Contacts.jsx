import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    object: '',
    message: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    setIsLoaded(true);
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init('O218oA-dhibNp_v2g');
      setEmailJSLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.object.trim()) {
      newErrors.object = 'L\'objet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Format de téléphone invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailJSLoaded || !validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Generic timestamp automatically added
      const currentTime = new Date().toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });

      const emailData = {
        ...formData,
        time: `Formulaire soumis le ${currentTime}` // Always generic timestamp
      };

      await window.emailjs.send(
        'service_fidjkxv',
        'template_kmh80kd',
        emailData,
        'O218oA-dhibNp_v2g'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        object: '',
        message: '',
        phone: '',
        company: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Professional Tech Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f0f2f5" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundColor: '#f8fafc'
          }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-gray-50/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section with Photo */}
        <div className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Text Content */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-medium tracking-wider uppercase text-blue-600">
                  Contact
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Notre équipe d'experts en solutions d'affichage est à votre écoute pour 
                concrétiser vos projets technologiques.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24h</div>
                  <div className="text-sm text-gray-500">Temps de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-500">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-500">Support technique</div>
                </div>
              </div>
            </div>

            {/* Right - Company Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/assests/WhatsApp Image 2025-07-08 à 12.18.13_ee974e18.jpg"
                  alt="INVISION Solutions - Notre équipe"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white">
                    <h3 className="text-lg font-semibold mb-1">INVISION Solutions</h3>
                    <p className="text-sm opacity-90">Excellence en solutions d'affichage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Adresse</div>
                  <div className="text-gray-900">
                    123 Avenue de la Technologie<br/>
                    75001 Paris, France
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Téléphone</div>
                  <a href="tel:+212661442247" className="text-blue-600 hover:underline">
                    +212 661 442 247
                  </a>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Email</div>
                  <a href="mailto:invision.electro@gmail.com" className="text-blue-600 hover:underline">
                    invision.electro@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-2">Horaires</div>
                  <div className="text-gray-900">
                    Lundi - Vendredi: 9h - 18h<br/>
                    Samedi: 9h - 12h
                  </div>
                </div>
              </div>
            </div>

            {/* Electronic Products */}
            <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Nos spécialités
              </h4>
              <div className="space-y-3">
                {[
                  'Écrans tactiles professionnels',
                  'Murs LED haute définition',
                  'Systèmes OPS intégrés',
                  'Caméras PTZ 4K'
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Envoyez-nous un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom"
                      style={{ color: '#1f2937' }}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="votre@email.com"
                      style={{ color: '#1f2937' }}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="+212 661 442 247"
                      style={{ color: '#1f2937' }}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                 
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="object"
                    value={formData.object}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('object')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.object ? 'border-red-300' : 'border-gray-300'
                    }`}
                    style={{ color: '#1f2937' }}
                  >
                    <option value="" style={{ color: '#9ca3af' }}>Sélectionnez un sujet</option>
                    <option value="Demande de devis - Écrans tactiles" style={{ color: '#1f2937' }}>Demande de devis - Écrans tactiles</option>
                    <option value="Demande de devis - Murs LED" style={{ color: '#1f2937' }}>Demande de devis - Murs LED</option>
                    <option value="Demande de devis - Systèmes OPS" style={{ color: '#1f2937' }}>Demande de devis - Systèmes OPS</option>
                    <option value="Demande de devis - Caméras PTZ" style={{ color: '#1f2937' }}>Demande de devis - Caméras PTZ</option>
                    <option value="Support technique" style={{ color: '#1f2937' }}>Support technique</option>
                    <option value="Information produit" style={{ color: '#1f2937' }}>Information produit</option>
                    <option value="Autre" style={{ color: '#1f2937' }}>Autre</option>
                  </select>
                  {errors.object && <p className="mt-1 text-sm text-red-600">{errors.object}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Décrivez votre projet ou vos besoins..."
                    style={{ color: '#1f2937' }}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <p className={`text-sm ${
                      submitStatus === 'success' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {submitStatus === 'success' 
                        ? 'Message envoyé avec succès! Nous vous recontacterons rapidement.' 
                        : 'Une erreur est survenue. Veuillez réessayer.'}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !emailJSLoaded}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
                    isSubmitting || !emailJSLoaded
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : !emailJSLoaded ? (
                    'Chargement...'
                  ) : (
                    'Envoyer le message'
                  )}
                </button>

                {/* Footer Note */}
                <p className="text-xs text-center text-gray-500 pt-4">
                  En envoyant ce formulaire, vous acceptez d'être contacté par notre équipe 
                  dans le cadre de votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for better visibility */}
      <style jsx>{`
        input, textarea, select {
          color: #1f2937 !important;
        }
        input::placeholder, textarea::placeholder {
          color: #9ca3af !important;
        }
        option {
          color: #1f2937 !important;
          background-color: white !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;