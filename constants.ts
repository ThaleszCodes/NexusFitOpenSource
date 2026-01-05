import { Dumbbell, Users, HeartPulse, Brain, Trophy, Clock, Target } from 'lucide-react';
import { Service, Benefit, Testimonial, ComparisonPoint } from './types';

export const APP_NAME = "Nexus Personal Studio";
export const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20no%20Nexus.";

export const NAV_LINKS = [
  { label: 'O Studio', href: '#sobre' },
  { label: 'Metodologia', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export const HERO_CONTENT = {
  headline: "Transforme seu corpo. Respeite seu ritmo.",
  subheadline: "Fuja da lotação das academias convencionais. Aqui você tem treino personalizado, atenção exclusiva e um ambiente focado no seu resultado real.",
  cta: "Agendar Aula Experimental Grátis",
};

export const COMPARISON_DATA: ComparisonPoint[] = [
  { feature: "Atenção do Professor", studio: "100% focado em você e na sua execução.", gym: "Dividida com 30+ pessoas no salão." },
  { feature: "Ambiente", studio: "Controlado, limpo e sem filas.", gym: "Barulhento, lotado e disputa por aparelho." },
  { feature: "Treino", studio: "Planejado para sua biologia e objetivos.", gym: "Fichas genéricas e repetitivas." },
  { feature: "Resultado", studio: "Acompanhado semanalmente com métricas.", gym: "Você treina meses sem saber se evoluiu." },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Personal Training",
    description: "Treinos montados exclusivamente para sua biomecânica e objetivos, com supervisão total.",
    icon: Dumbbell
  },
  {
    id: 2,
    title: "Avaliação Física 360º",
    description: "Análise de composição corporal, postura e mobilidade para garantir segurança e eficiência.",
    icon: Target
  },
  {
    id: 3,
    title: "Grupos Reduzidos",
    description: "A energia do treino em grupo com a atenção individualizada que você precisa (máx 4 alunos).",
    icon: Users
  },
  {
    id: 4,
    title: "Longevidade & Saúde",
    description: "Foco em fortalecimento, prevenção de lesões e melhoria da qualidade de vida.",
    icon: HeartPulse
  }
];

export const BENEFITS: Benefit[] = [
  { id: 1, title: "Emagrecimento Saudável", description: "Protocolos metabólicos que queimam gordura sem destruir sua massa magra." },
  { id: 2, title: "Definição e Força", description: "Aumente seu tônus muscular com técnicas avançadas de musculação." },
  { id: 3, title: "Autoestima Elevada", description: "Sinta-se bem ao se olhar no espelho e vestir suas roupas favoritas." },
  { id: 4, title: "Mente Sã", description: "O exercício como válvula de escape para o estresse e ansiedade do dia a dia." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "Advogada, 34 anos",
    text: "Eu odiava academia. Me sentia perdida e ninguém me ajudava. No Nexus, redescobri o prazer de treinar. Perdi 8kg em 3 meses com saúde!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Ricardo Alves",
    role: "Empresário, 42 anos",
    text: "A exclusividade é o diferencial. Não perco tempo esperando aparelho e o professor corrige cada movimento. Meu joelho nunca mais doeu.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    role: "Médica, 29 anos",
    text: "O ambiente é acolhedor e super profissional. Sinto que aqui meu tempo é valorizado e os resultados são visíveis.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];