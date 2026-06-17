import { MapPin } from 'lucide-react';

const eventsData = [
  {
    day: '27',
    month: 'JUN',
    tag: 'Jovens',
    title: 'ENCONTRO CONECTADOS',
    location: 'Sede IBEN - Auditorio Principal',
    time: 'Sabado as 19:30',
  },
  {
    day: '12',
    month: 'JUL',
    tag: 'Mulheres',
    title: 'CAFE COM GRACA',
    location: 'Espaco de Comunhao IBEN',
    time: 'Domingo as 09:00',
  },
  {
    day: '01',
    month: 'AGO',
    tag: 'Acao Social',
    title: 'ACAO COMUNITARIA ENGENHO NOVO',
    location: 'Praca Principal do Engenho Novo',
    time: 'Sabado as 08:00',
  },
];

export default function Events() {
  return (
    <section id="eventos" className="bg-zinc-950 border-y border-brandBorder py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-zinc-500">CONECTE-SE</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-1">
              PROXIMOS EVENTOS
            </h2>
          </div>
          <a
            href="#contato"
            className="text-xs font-bold uppercase tracking-widest text-white border-b border-white hover:opacity-60 transition-opacity mt-4 md:mt-0"
          >
            Fale Conosco para Detalhes
          </a>
        </div>

        <div className="space-y-4">
          {eventsData.map((event) => (
            <div
              key={event.title}
              className="bg-black border border-brandBorder p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-white transition-all duration-300"
            >
              <div className="flex items-center space-x-6">
                <div className="border-r border-zinc-800 pr-6 text-center">
                  <span className="block font-heading text-3xl font-black">{event.day}</span>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-zinc-500">{event.month}</span>
                </div>
                <div>
                  <span className="bg-zinc-900 border border-brandBorder text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 text-zinc-400">
                    {event.tag}
                  </span>
                  <h3 className="font-heading text-xl font-black uppercase mt-2">{event.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> {event.location}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-xs font-extrabold tracking-widest uppercase text-white bg-zinc-900 border border-zinc-800 px-5 py-2">
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
