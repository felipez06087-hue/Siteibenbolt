export default function About() {
  const pillars = [
    { title: 'ACOLHER', description: 'Braços abertos para todos, independentemente do ponto de partida.' },
    { title: 'EDIFICAR', description: 'Crescimento espiritual sólido e formação do caráter cristão.' },
    { title: 'ENVIAR', description: 'Capacitar líderes e servos para impactar toda a sociedade.' },
  ];

  return (
    <section id="sobre" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">
            QUEM SOMOS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            VIVENDO O REINO NO CORAÇÃO DE BARUERI.
          </h2>
          <div className="w-16 h-1 bg-brandYellow" />

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            A <strong className="text-white font-semibold">Igreja Batista no Engenho Novo, em Barueri</strong>, é uma comunidade cristã comprometida em viver e compartilhar o amor de Deus. Nossa missão é anunciar o Evangelho de Jesus Cristo, promover o crescimento espiritual de cada pessoa e servir nossa cidade com fé, esperança e amor.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Cremos que a Bíblia é a Palavra de Deus e a base para nossa fé e prática. Buscamos glorificar a Deus por meio da adoração, da comunhão entre os irmãos, do ensino bíblico e do serviço ao próximo.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Somos uma igreja acolhedora, formada por pessoas e famílias de diferentes histórias, unidas pelo propósito de seguir a Cristo e fazer discípulos. Aqui você encontrará um ambiente de amizade, cuidado e encorajamento para crescer em sua caminhada com Deus.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Nossa oração é que cada pessoa que nos visita possa experimentar a graça de Deus, encontrar um lugar para pertencer e desenvolver um relacionamento cada vez mais profundo com Jesus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-brandBorder p-5 hover:border-brandYellow transition-all duration-300 bg-zinc-950/50 group"
              >
                <span className="block font-heading text-lg font-bold mb-1 group-hover:text-brandYellow transition-colors">{pillar.title}</span>
                <p className="text-xs text-zinc-500">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-brandYellow/20 -z-10 translate-x-1 translate-y-1" />
          <div className="relative bg-zinc-900 aspect-square overflow-hidden border-2 border-brandYellow flex items-center justify-center">
            <img
              src="/WhatsApp_Image_2026-06-16_at_14.19.02.jpeg"
              alt="Logo IBEN"
              className="w-3/4 h-3/4 object-contain p-4 transition-all duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-brandYellow text-black p-4 font-heading text-xs font-black tracking-widest">
              BARUERI — SP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
