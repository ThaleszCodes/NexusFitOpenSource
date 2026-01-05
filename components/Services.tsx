import React from 'react';
import { SERVICES, BENEFITS } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark-800 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Services Column */}
            <div className="space-y-12">
                <div className="space-y-4">
                    <span className="text-brand-300 font-bold uppercase tracking-widest text-sm">Nossos Serviços</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Tudo que você precisa para <br/>
                        <span className="text-gray-400">atingir seu ápice.</span>
                    </h2>
                </div>

                <div className="grid gap-6">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="flex gap-4 p-6 rounded-xl hover:bg-dark-800 transition-colors border border-transparent hover:border-dark-700 group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-dark-800 group-hover:bg-brand-300 flex items-center justify-center transition-colors">
                                    <service.icon className="w-6 h-6 text-brand-300 group-hover:text-dark-900 transition-colors" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Column (Visual) */}
            <div className="relative mt-12 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                    {BENEFITS.map((benefit, idx) => (
                        <div key={benefit.id} className={`bg-dark-800 p-6 rounded-2xl border border-dark-700 flex flex-col justify-between h-48 hover:border-brand-300/30 transition-all hover:-translate-y-1 ${idx % 2 !== 0 ? 'mt-8' : ''}`}>
                            <span className="text-4xl font-black text-dark-700">0{benefit.id}</span>
                            <div>
                                <h4 className="text-lg font-bold text-brand-100 mb-2">{benefit.title}</h4>
                                <p className="text-xs text-gray-400">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};