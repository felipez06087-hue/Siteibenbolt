const newsItems = [
  'CULTO DOMINGO ÀS 9H E 18H30',
  'INTERCESSÃO SEGUNDA-FEIRA ÀS 19H30',
  'A FORJA — TERÇA-FEIRA ÀS 19H30',
  'CULTO QUARTA-FEIRA ÀS 19H30',
  'FAÇA PARTE DE UM DOS NOSSOS MINISTÉRIOS',
  'RUA TIBAGI 230 — VILA SÃO SILVESTRE — BARUERI',
];

export default function NewsBar() {
  return (
    <section className="bg-zinc-950 border-y border-brandBorder py-4 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee md:animate-marquee-slow text-xs font-black tracking-[0.2em] uppercase text-zinc-400">
        {[...newsItems, ...newsItems].map((item, index) => (
          <span key={index} className="mx-8">
            <span className="text-brandYellow mr-2">&#9733;</span> {item}
          </span>
        ))}
      </div>
    </section>
  );
}
