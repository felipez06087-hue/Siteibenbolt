import { Clock } from 'lucide-react';

const servicesData = [
  {
    day: 'SEGUNDA-FEIRA',
    title: 'INTERCESSÃO',
    description: 'Momento de oração e intercessão pela igreja, pelas famílias e pela cidade. Um encontro de busca e comunhão com Deus.',
    time: '19:30h',
    mode: 'Presencial',
  },
  {
    day: 'TERÇA-FEIRA',
    title: 'A FORJA',
    description: 'Encontro de formação e discipulado para equipar homens e mulheres com a Palavra de Deus de forma prática e transformadora.',
    time: '19:30h',
    mode: 'Presencial',
  },
  {
    day: 'QUARTA-FEIRA',
    title: 'CULTO MIDWEEK',
    description: 'Culto no meio da semana com louvor e mensagem da Palavra de Deus para renovar as forças e fortalecer a fé.',
    time: '19:30h',
    mode: 'Presencial',
  },
  {
    day: 'DOMINGO',
    title: 'CULTO DA MANHÃ',
    description: 'Comece o domingo louvando e ouvindo a Palavra de Deus em família. Um culto acolhedor para todas as idades.',
    time: '09:00h',
    mode: 'Presencial & Online',
  },
  {
    day: 'DOMINGO',
    title: 'CULTO DA NOITE',
    description: 'Culto noturno de celebração e adoração congregacional intensa com mensagem relevante para o dia a dia.',
    time: '18:30h',
    mode: 'Presencial & Online',
  },
];

export default function Services() {
  return (
    <section id="cultos" className="bg-zinc-950 border-y border-brandBorder py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">AGENDE-SE</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-1">
              NOSSAS CELEBRAÇÕES
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm font-light">
            Escolha o melhor dia para se conectar conosco. Nossos cultos são abertos ao público, dinâmicos e focados na Palavra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-brandBorder p-8 flex flex-col justify-between min-h-64 hover:border-brandYellow transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brandYellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div>
                <span className="text-xs font-bold text-brandYellow tracking-widest uppercase">{service.day}</span>
                <h3 className="font-heading text-2xl font-black uppercase mt-2 mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm font-light">{service.description}</p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-brandBorder mt-6">
                <span className="text-white font-black text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-brandYellow" /> {service.time}
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 group-hover:text-brandYellow transition-colors">
                  {service.mode}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
