import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Histórias de <span className="text-brand-300">Sucesso</span>
          </h2>
          <p className="text-gray-400">Pessoas reais que transformaram suas vidas conosco.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-dark-900 p-8 rounded-2xl relative border border-dark-700 hover:border-brand-900 transition-colors">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-dark-700" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-400 fill-brand-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-900"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-500 block">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};