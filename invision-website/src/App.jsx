import React from 'react';
import Header from './componenets/layout/Header.jsx';
import Hero from './componenets/sections/Hero.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        
        {/* Placeholder sections - we'll build these next */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">About Section</h2>
            <p className="text-gray-400">Coming next...</p>
          </div>
        </section>

        <section id="products" className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Products Section</h2>
            <p className="text-gray-400">Coming next...</p>
          </div>
        </section>

        <section id="brands" className="min-h-screen flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Brands Section</h2>
            <p className="text-gray-400">Coming next...</p>
          </div>
        </section>

        <section id="quality" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Quality Section</h2>
            <p className="text-gray-400">Coming next...</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Section</h2>
            <p className="text-gray-400">Coming next...</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;