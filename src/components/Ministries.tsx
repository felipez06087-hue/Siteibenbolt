import { Music2, Users, Heart, Baby, ShieldCheck } from 'lucide-react';

const ministriesData = [
  {
    title: 'DANÇA',
    description: 'Expressão artística de adoração através da dança, glorificando a Deus com o corpo e com a alma em cada culto e evento.',
    icon: <Music2 className="w-6 h-6" />,
  },
  {
    title: 'JOVENS',
    description: 'Espaço de conexão e crescimento para a juventude, com comunhão genuína, a Palavra de Deus e serviço ativo na comunidade.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'MULHERES',
    description: 'Ministério dedicado ao cuidado, edificação e fortalecimento das mulheres da igreja, promovendo identidade e propósito em Cristo.',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'KIDS',
    description: 'Cuidado espiritual e aprendizado criativo para as crianças, com atividades interativas e ensinamentos bíblicos adaptados para cada idade.',
    icon: <Baby className="w-6 h-6" />,
  },
  {
    title: 'DIACONATO',
    description: 'Serviços de apoio, suporte e cuidado prático da igreja. Os diáconos garantem que cada membro e visitante seja bem acolhido.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

export default function Ministries() {
  return (
    <section id="ministerios" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">ONDE SERVIR</span>
        <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-1">
          NOSSOS MINISTÉRIOS
        </h2>
        <div className="w-16 h-1 bg-brandYellow mx-auto mt-4 mb-4" />
        <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
          Descubra as áreas de atuação da IBEN e saiba como você pode engajar seus talentos para servir à comunidade.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {ministriesData.map((ministry) => (
          <div
            key={ministry.title}
            className="bg-zinc-950 border border-brandBorder p-6 transition-all duration-300 hover:bg-zinc-900 hover:border-brandYellow group text-center"
          >
            <div className="w-14 h-14 bg-white/10 flex items-center justify-center text-white group-hover:bg-brandYellow group-hover:text-black transition-all mb-5 mx-auto">
              {ministry.icon}
            </div>
            <h3 className="font-heading text-base font-black uppercase mb-3 group-hover:text-brandYellow transition-colors">{ministry.title}</h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">{ministry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
