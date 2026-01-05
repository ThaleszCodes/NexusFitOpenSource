import React from 'react';
import { HERO_CONTENT } from '../constants';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Treino Funcional" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-transparent to-transparent opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/50 border border-dark-700 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-300 animate-pulse"></span>
            <span className="text-xs text-brand-300 font-bold uppercase tracking-wider">Vagas limitadas para este mês</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Transforme <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">
              Seu Corpo.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed border-l-4 border-brand-300 pl-6">
            {HERO_CONTENT.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button>{HERO_CONTENT.cta}</Button>
          </div>

          <div className="flex items-center gap-6 pt-8 text-sm text-gray-400">
             <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-300 w-4 h-4" />
                <span>Metodologia Exclusiva</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-300 w-4 h-4" />
                <span>Ambiente Premium</span>
             </div>
          </div>
        </div>

        {/* Abstract/Image side for desktop balance */}
        <div className="hidden md:block relative animate-in zoom-in duration-1000 delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-900/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Personal Trainer ajudando aluno"
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};