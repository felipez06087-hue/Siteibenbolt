import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brandBorder py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
          <span className="font-heading font-black text-white text-2xl tracking-widest">IBEN</span>
          <div className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 pl-3 border-l border-zinc-800 leading-tight">
            Igreja Batista<br />Engenho Novo<br /><span className="text-zinc-700">Barueri — SP</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/ministerio.iben/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brandYellow transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brandYellow transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@MINISTERIOIBEN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brandYellow transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[10px] text-zinc-600 tracking-wider uppercase">Foco no Reino. Conectando Pessoas.</p>
        </div>

        <div className="text-center md:text-right text-[10px] text-zinc-600 uppercase tracking-widest">
          &copy; 2026 IBEN. Todos os direitos reservados.
          <br />
          <span className="text-zinc-700">Rua Tibagi 230, Vila São Silvestre — Barueri</span>
        </div>
      </div>
    </footer>
  );
}
