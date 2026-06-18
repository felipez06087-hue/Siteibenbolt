import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Youtube, Loader2, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contato" className="bg-zinc-950 border-t border-brandBorder py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">VAMOS CONVERSAR</span>
              <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-1">
                FALE CONOSCO
              </h2>
              <div className="w-16 h-1 bg-brandYellow mt-4" />
              <p className="text-zinc-400 text-sm mt-4 font-light">
                Dúvidas, pedidos de oração ou informações sobre batismos e eventos. Envie-nos uma mensagem!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border border-brandBorder focus:border-brandYellow p-3 text-sm text-white focus:outline-none transition-all rounded"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-black border border-brandBorder focus:border-brandYellow p-3 text-sm text-white focus:outline-none transition-all rounded"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Assunto</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border border-brandBorder focus:border-brandYellow p-3 text-sm text-white focus:outline-none transition-all rounded"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-black border border-brandBorder focus:border-brandYellow p-3 text-sm text-white focus:outline-none transition-all resize-none rounded"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brandYellow text-black font-extrabold uppercase tracking-widest border border-brandYellow text-xs transition-all duration-300 hover:bg-black hover:text-brandYellow disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
              {isSuccess && (
                <div className="p-3 bg-green-950/20 border border-green-900/40 text-xs text-green-400 text-center rounded flex items-center justify-center">
                  <Check className="w-4 h-4 mr-2" /> Mensagem enviada com sucesso! Em breve entraremos em contato.
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-brandYellow">VISITAÇÃO</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                ONDE ESTAMOS
              </h2>
              <div className="w-16 h-1 bg-brandYellow" />

              <div className="space-y-4 text-sm text-zinc-300 pt-2">
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mt-1 mr-3 text-brandYellow flex-shrink-0" />
                  <span>Rua Tibagi 230, Vila São Silvestre — Barueri, SP</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-brandYellow flex-shrink-0" />
                  <span>(11) 91095-0226</span>
                </p>
                <a
                  href="https://wa.me/5511910950226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Fale pelo WhatsApp</span>
                </a>
              </div>

              <a
                href="https://wa.me/5511910950226"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-green-600 hover:bg-green-500 text-white font-bold uppercase text-xs tracking-widest px-6 py-3 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Abrir WhatsApp
              </a>
              <a
                href="https://www.youtube.com/@MINISTERIOIBEN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs tracking-widest px-6 py-3 transition-colors"
              >
                <Youtube className="w-4 h-4" /> YouTube IBEN
              </a>
            </div>

            <div className="relative bg-zinc-900 border border-brandBorder aspect-video w-full flex flex-col items-center justify-center p-6 text-center group overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-70 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-brandYellow text-black flex items-center justify-center text-xl mx-auto animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="block font-heading text-base font-black uppercase tracking-wider">
                  Templo Principal IBEN
                </span>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Rua Tibagi 230, Vila São Silvestre — Barueri, SP. Fácil acesso com estacionamento.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brandYellow text-black font-bold uppercase text-[10px] tracking-widest px-4 py-2 hover:bg-yellow-400 transition-colors"
                >
                  Abrir no Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
