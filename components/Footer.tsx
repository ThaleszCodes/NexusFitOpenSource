import React from 'react';
import { APP_NAME, NAV_LINKS } from '../constants';
import { Button } from './Button';
import { Instagram, Facebook, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      {/* Final CTA Strip */}
      <div className="bg-brand-300 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-dark-900 mb-2">
            COMECE SUA TRANSFORMAÇÃO HOJE.
          </h2>
          <p className="text-dark-800 text-xl font-medium max-w-2xl mx-auto">
            Não deixe para amanhã a saúde que você pode conquistar hoje. Vagas limitadas para novos alunos.
          </p>
          <div className="pt-4">
             <Button variant="secondary" className="shadow-2xl">Agendar Aula Experimental</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2 space-y-6">
             <h3 className="text-2xl font-bold text-white">{APP_NAME}</h3>
             <p className="text-gray-500 max-w-sm">
                Studio premium focado em excelência, biomecânica e resultados reais. Seu corpo é seu templo, cuide dele com quem entende.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-brand-300 hover:text-dark-900 transition-all">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-brand-300 hover:text-dark-900 transition-all">
                    <Facebook className="w-5 h-5" />
                </a>
             </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                    <li key={link.label}>
                        <a href={link.href} className="text-gray-500 hover:text-brand-300 transition-colors text-sm">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contato</h4>
            <div className="space-y-3 text-sm text-gray-500">
                <p>Rua das Acácias, 1200</p>
                <p>Jardins - São Paulo/SP</p>
                <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> contato@nexusstudio.com.br
                </p>
                <p>(11) 99999-9999</p>
            </div>
          </div>

        </div>

        <div className="border-t border-dark-800 mt-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <div className="text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} {APP_NAME}. Todos os direitos reservados.</p>
                <p className="mt-1 opacity-60">Este é um site modelo/exemplo para portfólio.</p>
            </div>
            
            <div className="flex items-center gap-1">
                <span>Desenvolvido por</span>
                <a 
                    href="https://axium-web.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-300 hover:text-white transition-colors font-bold flex items-center gap-1"
                >
                    Axium Web
                    <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};