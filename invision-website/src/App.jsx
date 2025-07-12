import React from 'react';
import Header from './componenets/layout/Header.jsx';
import Hero from './componenets/sections/Hero.jsx';
import Products from './componenets/sections/Products.jsx';
import About from './componenets/sections/About.jsx';
import './App.css';
import Contact from './componenets/sections/Contacts.jsx';
import Brands from './componenets/sections/Brands.jsx';
import Footer from './componenets/layout/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        
        {/* Placeholder sections - we'll build these next */}
        {/* <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">About Section</h2>
            <p className="text-gray-400">Coming next...</p>
          </div>
        </section> */}
        
<About />
        <Products />
        <Brands />
        
{/* 
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
        </section> */}
<Contact />
<Footer />
    
      </main>
    </div>
  );
}

export default App;