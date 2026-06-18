import { BookOpen, GraduationCap, ArrowRight, Star } from 'lucide-react';

const features = [
  { icon: <BookOpen className="w-5 h-5" />, text: 'Estudo profundo da Palavra de Deus' },
  { icon: <GraduationCap className="w-5 h-5" />, text: 'Formação teológica prática e acessível' },
  { icon: <Star className="w-5 h-5" />, text: 'Capacitação para líderes e servos' },
];

export default function IBSR() {
  return (
    <section id="ibsr" className="bg-zinc-950 border-y border-brandBorder py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">EXTENSÃO IBEN</span>
              <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mt-2">
                IBSR
              </h2>
              <p className="font-heading text-lg sm:text-xl font-bold text-zinc-300 uppercase tracking-wider mt-1">
                Instituto Bíblico Sinalizando o Reino
              </p>
            </div>
            <div className="w-16 h-1 bg-brandYellow" />

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              O <strong className="text-white font-semibold">IBSR</strong> é o instituto bíblico extensão da Igreja Batista Engenho Novo, criado para equipar homens e mulheres com fundamento sólido na Palavra de Deus. Nossa proposta é oferecer ensino bíblico-teológico de qualidade, de forma prática e acessível, para todos que desejam crescer na fé e servir com excelência.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Se você sente o chamado para aprofundar seu conhecimento bíblico, desenvolver liderança cristã ou simplesmente crescer em sua caminhada com Deus, o IBSR é o lugar certo para você.
            </p>

            <ul className="space-y-3 pt-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-zinc-300">
                  <span className="flex-shrink-0 w-9 h-9 bg-brandYellow/10 border border-brandYellow/30 flex items-center justify-center text-brandYellow">
                    {feature.icon}
                  </span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/g6ofZP2kz9cQ4wy99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brandYellow text-black text-xs font-bold uppercase tracking-widest border border-brandYellow transition-all duration-300 hover:bg-black hover:text-brandYellow group"
              >
                Inscreva-se Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 border border-brandYellow/10 translate-x-3 translate-y-3 -z-10" />
            <div className="bg-black border border-brandBorder p-10 space-y-8">
              <div className="text-center space-y-2 border-b border-brandBorder pb-8">
                <span className="font-heading font-black text-6xl text-brandYellow tracking-widest block">IBSR</span>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Instituto Bíblico</p>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Sinalizando o Reino</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-3 border-b border-brandBorder/50">
                  <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">Modalidade</span>
                  <span className="text-white font-semibold">Presencial</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-brandBorder/50">
                  <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">Vinculação</span>
                  <span className="text-white font-semibold">Extensão IBEN</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-brandBorder/50">
                  <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">Local</span>
                  <span className="text-white font-semibold">Barueri — SP</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-zinc-400 uppercase text-xs tracking-wider font-bold">Inscrições</span>
                  <span className="text-brandYellow font-bold">Abertas</span>
                </div>
              </div>

              <a
                href="https://forms.gle/g6ofZP2kz9cQ4wy99"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 border border-brandYellow text-brandYellow text-xs font-bold uppercase tracking-widest hover:bg-brandYellow hover:text-black transition-all duration-300"
              >
                Acessar Formulário de Inscrição
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
