import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Contribution() {
  const [copied, setCopied] = useState(false);

  const copyPixKey = () => {
    navigator.clipboard.writeText('12.345.678/0001-99');
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <section id="contribuicao" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">PRINCÍPIO BÍBLICO</span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            DÍZIMOS E OFERTAS
          </h2>
          <div className="w-16 h-1 bg-brandYellow" />
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light italic border-l-2 border-brandYellow pl-4">
            "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." — 2 Coríntios 9:7
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Sua fidelidade financeira possibilita a manutenção de nossos projetos sociais, estrutura do templo local e ações evangelísticas em Barueri e região. Use os canais abaixo para fazer sua contribuição de forma segura.
          </p>
        </div>

        <div className="lg:col-span-6 bg-zinc-950 border border-brandBorder p-8 relative">
          <h3 className="font-heading text-xl font-black uppercase mb-6 pb-4 border-b border-brandBorder">
            Formas de Contribuição
          </h3>

          <div className="space-y-6">
            <div className="p-4 bg-black border border-brandBorder rounded">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brandYellow">Chave PIX (CNPJ)</span>
                <span className="text-[10px] text-zinc-400 uppercase bg-zinc-900 px-2 py-0.5 rounded">Rápido</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-950 border border-brandBorder p-3 rounded">
                <code className="text-xs font-mono font-bold tracking-wider text-white">12.345.678/0001-99</code>
                <button
                  onClick={copyPixKey}
                  className="text-xs bg-brandYellow text-black px-3 py-1.5 font-bold uppercase hover:bg-yellow-400 transition-colors flex items-center"
                >
                  {copied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />} {copied ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-green-400 font-medium mt-2 flex items-center">
                  <Check className="w-3 h-3 mr-1" /> Chave PIX copiada para a área de transferência!
                </p>
              )}
            </div>

            <div className="space-y-2 text-sm text-zinc-400">
              <span className="block text-xs font-bold uppercase tracking-widest text-brandYellow mb-1">
                Transferência Bancária
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs border border-brandBorder/50 p-4 rounded bg-black">
                <div><strong>Banco:</strong> Bradesco (237)</div>
                <div><strong>Agência:</strong> 0123-4</div>
                <div><strong>Conta Corrente:</strong> 98765-4</div>
                <div><strong>Favorecido:</strong> IBEN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
