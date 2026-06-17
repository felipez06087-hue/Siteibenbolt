interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-full max-w-xs bg-black z-40 border-l border-brandBorder p-8 flex flex-col justify-between transform transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col space-y-8 mt-20">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-lg font-bold tracking-wider uppercase text-zinc-300 hover:text-brandYellow transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="border-t border-brandBorder pt-6">
        <a
          href="#contato"
          onClick={onClose}
          className="block text-center border border-brandYellow py-3 text-sm font-bold uppercase tracking-widest bg-brandYellow text-black hover:bg-black hover:text-brandYellow transition-all"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  );
}
