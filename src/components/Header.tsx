import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '#sobre', label: 'A Igreja' },
  { href: '#cultos', label: 'Cultos' },
  { href: '#ministerios', label: 'Ministérios' },
  { href: '#ibsr', label: 'IBSR' },
  { href: '#contribuicao', label: 'Contribuir' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-brandBorder backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center space-x-3 group">
            <span className="font-heading font-black text-white text-3xl tracking-widest group-hover:text-brandYellow transition-colors duration-300">
              IBEN
            </span>
            <div className="hidden sm:block text-xs font-bold tracking-widest uppercase text-zinc-500 pl-3 border-l border-zinc-800 leading-tight">
              Igreja Batista<br />no Engenho Novo
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-brandYellow transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-brandYellow focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}
