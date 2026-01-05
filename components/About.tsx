import React from 'react';
import { Button } from './Button';
import { MapPin, Wifi, Coffee, ShowerHead } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-2xl overflow-hidden h-[500px] group">
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Interior do Studio Nexus" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8">
               <div className="flex items-center gap-2 text-brand-300 mb-2">
                 <MapPin className="w-5 h-5" />
                 <span className="font-bold tracking-wide uppercase">Localização Premium</span>
               </div>
               <p className="text-white text-lg font-medium">Rua das Acácias, 1200 - Jardins</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Uma estrutura pensada para o seu <span className="text-brand-300">Conforto</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              No Nexus, cada detalhe foi desenhado para que sua única preocupação seja o seu treino. Um ambiente climatizado, equipamentos de ponta importados e vestiários completos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg border border-dark-700">
                <Wifi className="text-brand-300 w-5 h-5" />
                <span className="text-sm text-gray-200">Wi-Fi de Alta Velocidade</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg border border-dark-700">
                <ShowerHead className="text-brand-300 w-5 h-5" />
                <span className="text-sm text-gray-200">Vestiários Completos</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg border border-dark-700">
                <Coffee className="text-brand-300 w-5 h-5" />
                <span className="text-sm text-gray-200">Área de Café & Lounge</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-dark-800 rounded-lg border border-dark-700">
                <MapPin className="text-brand-300 w-5 h-5" />
                <span className="text-sm text-gray-200">Estacionamento Grátis</span>
              </div>
            </div>

            <div className="pt-4">
               <Button variant="outline">Conhecer o espaço</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};