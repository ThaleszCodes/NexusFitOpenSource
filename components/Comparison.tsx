import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-300/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Por que escolher o <span className="text-brand-300">Nexus</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A diferença entre alugar um aparelho e ter um acompanhamento profissional de verdade.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-6 border-b border-dark-700 text-sm tracking-widest uppercase font-semibold text-gray-500">
            <div className="col-span-4 pl-4">Critério</div>
            <div className="col-span-4 text-center">Academia Comum</div>
            <div className="col-span-4 text-center text-brand-300">Nexus Studio</div>
          </div>

          <div className="space-y-4 mt-4">
            {COMPARISON_DATA.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-dark-900/50 hover:bg-dark-900 border border-dark-700/50 rounded-xl p-6 md:p-4 transition-all duration-300 hover:border-brand-500/30"
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4 font-bold text-white">
                    {item.feature}
                  </div>
                  
                  <div className="col-span-4 flex items-center justify-center gap-3 text-gray-500 text-sm text-center">
                    <X className="w-4 h-4 text-red-500/50 shrink-0" />
                    <span>{item.gym}</span>
                  </div>

                  <div className="col-span-4 flex items-center justify-center gap-3 text-brand-100 text-sm font-medium text-center bg-brand-900/10 py-2 rounded-lg border border-brand-500/10 shadow-[0_0_15px_rgba(190,242,100,0.05)]">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>{item.studio}</span>
                  </div>
                </div>

                {/* Mobile Layout (Card Style) */}
                <div className="md:hidden space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-dark-700 pb-2 mb-2">
                    {item.feature}
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Gym Side Mobile */}
                    <div className="flex items-start gap-3 text-gray-500 text-sm">
                      <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider mb-0.5 opacity-50">Academia Comum</span>
                        {item.gym}
                      </div>
                    </div>

                    {/* Studio Side Mobile */}
                    <div className="flex items-start gap-3 text-brand-100 text-sm bg-brand-900/10 p-3 rounded-lg border border-brand-500/10">
                      <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                      <div>
                         <span className="block text-xs uppercase tracking-wider mb-0.5 text-brand-400">Nexus Studio</span>
                         {item.studio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              * Resultados podem variar de acordo com a frequência e dedicação individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};