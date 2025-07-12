import React from 'react';

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
        
        {/* Header */}
        <div className="relative p-6 border-b border-gray-100"
             style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                  {product.modelCode}
                </span>
                <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                  product.inStock ? 'bg-green-500/80' : 'bg-red-500/80'
                }`}>
                  {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-120px)] overflow-hidden">
          
          {/* Left Side - Image */}
          <div className="lg:w-1/2 p-6 bg-gray-50 flex items-center justify-center">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-80 object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/f8f9fa/3fb8f6?text=Product+Image';
                }}
              />
              {product.isNew && (
                <div className="absolute -top-2 -right-2 px-3 py-1 text-white text-xs font-bold rounded-full"
                     style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}>
                  NEW
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="lg:w-1/2 p-6 overflow-y-auto">
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#040404' }}>Description</h3>
              <p className="leading-relaxed" style={{ color: '#6e6e6e' }}>
                {product.description}
              </p>
            </div>

            {/* General Functionality */}
            {product.generalFunctionality && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#040404' }}>General Functionality</h3>
                <div className="space-y-2">
                  {product.generalFunctionality.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                           style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
                      <span className="text-sm" style={{ color: '#4f4f4f' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#040404' }}>Technical Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                {Object.entries(product.specifications).map(([category, specs]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm mb-2 uppercase tracking-wide" 
                        style={{ color: '#3fb8f6' }}>{category}</h4>
                    <div className="space-y-1">
                      {specs.map((spec, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="text-sm font-medium" style={{ color: '#4f4f4f' }}>
                            {spec.label}:
                          </span>
                          <span className="text-sm text-right ml-4" style={{ color: '#6e6e6e' }}>
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input/Output Ports */}
            {(product.inputs || product.outputs) && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#040404' }}>Connectivity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.inputs && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2" style={{ color: '#3fb8f6' }}>INPUTS</h4>
                      <div className="space-y-1">
                        {product.inputs.map((input, index) => (
                          <div key={index} className="text-sm" style={{ color: '#4f4f4f' }}>
                            • {input}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.outputs && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2" style={{ color: '#3fb8f6' }}>OUTPUTS</h4>
                      <div className="space-y-1">
                        {product.outputs.map((output, index) => (
                          <div key={index} className="text-sm" style={{ color: '#4f4f4f' }}>
                            • {output}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Software Included */}
            {product.softwareIncluded && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: '#040404' }}>Software Included</h3>
                <div className="space-y-2">
                  {product.softwareIncluded.map((software, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                           style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}></div>
                      <span className="text-sm" style={{ color: '#4f4f4f' }}>{software}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {/* <div className="flex space-x-4 pt-4 border-t border-gray-100">
              <button 
                className="flex-1 py-3 px-6 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #3fb8f6, #6c6ffb)' }}
              >
                Request Quote
              </button>
              <button 
                className="px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: '#3fb8f6', 
                  color: '#3fb8f6' 
                }}
              >
                Download Specs
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;