export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[10000ms]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1438210159951-dc7d883b68c6?q=80&w=1920')",
          filter: 'grayscale(100%) contrast(120%)',
        }}
      />
      <div className="absolute inset-0 hero-overlay z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
        <span className="inline-block bg-brandYellow text-black text-xs font-black tracking-[0.3em] uppercase px-4 py-1.5 mb-8">
          SEJA BEM-VINDO À IBEN
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-4 uppercase">
          IGREJA BATISTA<br className="hidden md:block" />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #F5C000' }}>
            NO ENGENHO NOVO
          </span>
        </h1>
        <p className="text-zinc-400 font-sans text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 tracking-wide font-light">
          Uma comunidade ativa em Barueri, focada no verdadeiro evangelho de Cristo, resgatando vidas e construindo relacionamentos profundos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cultos"
            className="w-full sm:w-auto px-8 py-4 bg-brandYellow text-black text-xs font-bold uppercase tracking-widest border border-brandYellow transition-all duration-300 hover:bg-black hover:text-brandYellow"
          >
            Nossos Cultos
          </a>
          <a
            href="#sobre"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white text-xs font-bold uppercase tracking-widest border border-white/40 transition-all duration-300 hover:bg-brandYellow hover:text-black hover:border-brandYellow"
          >
            Quem Somos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center space-y-2 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white">Role para explorar</span>
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brandYellow animate-bounce" />
        </div>
      </div>
    </section>
  );
}
