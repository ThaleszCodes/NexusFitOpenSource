import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-brand-300 selection:text-dark-900">
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Services />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;