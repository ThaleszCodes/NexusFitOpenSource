import React, { useState, useEffect } from 'react';
import { APP_NAME, NAV_LINKS } from '../constants';
import { Menu, X, Dumbbell } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-300 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Dumbbell className="w-6 h-6 text-dark-900" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
            NEXUS<span className="text-brand-300">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-brand-300 text-sm font-medium transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            className="px-5 py-2 border border-brand-300 text-brand-300 rounded-full text-xs font-bold uppercase hover:bg-brand-300 hover:text-dark-900 transition-all"
          >
            Falar no WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-800 border-t border-dark-700 p-6 flex flex-col gap-4 md:hidden shadow-2xl animate-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-gray-200 hover:text-brand-300 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5511999999999"
            className="mt-4 w-full bg-brand-300 text-dark-900 py-3 rounded-lg text-center font-bold"
          >
            Agendar Aula
          </a>
        </div>
      )}
    </header>
  );
};