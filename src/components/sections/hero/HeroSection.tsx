import { useState } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import heroPng from "@/assets/sections/hero/hero-banner.png";
import heroWebp from "@/assets/sections/hero/hero-banner.webp";

const TELEGRAM_LINK = "https://t.me/the_golden_jet";
const PHONE_NUMBER = "tel:+79102266619";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

function FormModal({ open, onClose }: FormModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setContact("");
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-graphite/40 backdrop-blur-sm" />
      <div
        className="relative bg-milk rounded-3xl p-8 w-full max-w-md shadow-premium animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-graphite-light hover:text-graphite transition-colors"
        >
          ×
        </button>
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
              <div className="w-5 h-5 rounded-full bg-emerald-brand" />
            </div>
            <h3 className="font-display text-xl text-graphite font-semibold mb-2">Заявка принята</h3>
            <p className="text-sm text-graphite-light">Менеджер свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl text-graphite font-semibold mb-1">Оставить заявку</h3>
            <p className="text-sm text-graphite-light mb-6">Менеджер уточнит детали и рассчитает сроки.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl bg-milk-warm border border-border text-sm text-graphite placeholder:text-graphite-light focus:outline-none focus:border-emerald-brand transition-colors font-body"
              />
              <input
                type="text"
                placeholder="Telegram или телефон"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl bg-milk-warm border border-border text-sm text-graphite placeholder:text-graphite-light focus:outline-none focus:border-emerald-brand transition-colors font-body"
              />
              <button
                type="submit"
                className="w-full pill-button bg-graphite text-white py-3 text-sm emerald-hover"
              >
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [phoneExpanded, setPhoneExpanded] = useState(false);
  const [formBtnExpanded, setFormBtnExpanded] = useState(false);

  return (
    <>
      <section className="bg-milk flex flex-col min-h-screen pt-24 pb-[1.2cm]" aria-label="Главный экран">
        <div className="flex flex-col justify-center flex-1 px-4 md:px-6 min-h-[560px] md:min-h-0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="hero-container overflow-hidden rounded-[2rem] shadow-premium">
              <div className="grid md:grid-cols-2 min-h-[560px] md:h-[560px]">
                {/* Left: 3D diorama China */}
                <div className="relative flex items-center justify-center overflow-hidden h-full min-h-[320px] md:min-h-0 bg-graphite">
                  <picture className="block w-full h-full">
                    <source srcSet={heroWebp} type="image/webp" />
                    <img
                      src={heroPng}
                      alt="Диорама Китая, маршрут доставки"
                      className="block w-full h-full object-cover object-center"
                      style={{ minHeight: "320px" }}
                      fetchPriority="high"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-graphite/70 md:to-graphite/50 pointer-events-none" />
                  {/* Red verification stamp */}
                  <div
                    className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-14 h-14 rounded-full border-2 flex items-center justify-center border-[hsl(4_80%_42%)] bg-[hsl(4_80%_42%_/_.12)] convex-light"
                    aria-hidden
                  >
                    <span className="text-[10px] font-display font-semibold text-[hsl(4_80%_42%)]">验</span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-between px-8 md:px-12 py-8 bg-graphite border-l-2 border-emerald-brand/40 h-full">
                  <div>
                  <div className="inline-flex items-center gap-2 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-brand" />
                    <span className="text-xs font-body font-medium text-graphite-light tracking-widest uppercase">
                      Китай → Россия
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="font-bebas text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.15] text-white mb-5">
                    Товар из Китая —
                    <br />
                    с проверкой перед отправкой
                    <br />
                    и доставкой по всей России.
                  </h1>

                  {/* Subheadline */}
                  <p className="font-body text-base text-graphite-light leading-relaxed mb-10">
                    Принимаем товар на складе в Китае, консолидируем грузы<br />
                    и организуем отправку удобным маршрутом.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-3 flex-wrap mb-6">
                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-button flex items-center gap-2.5 bg-graphite text-white px-6 py-3 text-sm font-medium hover:bg-graphite/90 emerald-hover shadow-premium border border-graphite"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Написать в Telegram
                    </a>
                    <a
                      href={PHONE_NUMBER}
                      className="pill-button flex items-center gap-2.5 bg-emerald-block text-white border border-white/20 hover:bg-emerald-brand/90 overflow-hidden py-3 emerald-hover"
                      style={{
                        paddingLeft: 14,
                        paddingRight: phoneExpanded ? 20 : 14,
                        width: phoneExpanded ? 137 : 48,
                        transition: "width 0.45s cubic-bezier(0.33, 1, 0.68, 1), padding 0.45s cubic-bezier(0.33, 1, 0.68, 1)",
                      }}
                      onMouseEnter={() => setPhoneExpanded(true)}
                      onMouseLeave={() => setPhoneExpanded(false)}
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span
                        className="text-sm font-medium whitespace-nowrap overflow-hidden"
                        style={{
                          maxWidth: phoneExpanded ? 120 : 0,
                          opacity: phoneExpanded ? 1 : 0,
                          transition: "max-width 0.45s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.35s cubic-bezier(0.33, 1, 0.68, 1)",
                        }}
                      >
                        Позвонить
                      </span>
                    </a>
                    <button
                      onClick={() => setFormOpen(true)}
                      className="pill-button flex items-center gap-2.5 bg-emerald-block text-white border border-white/20 hover:bg-emerald-brand/90 overflow-hidden py-3 emerald-hover"
                      style={{
                        paddingLeft: 14,
                        paddingRight: formBtnExpanded ? 20 : 14,
                        width: formBtnExpanded ? 184 : 48,
                        transition: "width 0.45s cubic-bezier(0.33, 1, 0.68, 1), padding 0.45s cubic-bezier(0.33, 1, 0.68, 1)",
                      }}
                      onMouseEnter={() => setFormBtnExpanded(true)}
                      onMouseLeave={() => setFormBtnExpanded(false)}
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      <span
                        className="text-sm font-medium whitespace-nowrap overflow-hidden"
                        style={{
                          maxWidth: formBtnExpanded ? 160 : 0,
                          opacity: formBtnExpanded ? 1 : 0,
                          transition: "max-width 0.45s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.35s cubic-bezier(0.33, 1, 0.68, 1)",
                        }}
                      >
                        Оставить заявку
                      </span>
                    </button>
                  </div>
                  </div>

                  <div className="border-t border-white/20 flex items-center gap-8 md:gap-12 py-8 flex-1 min-h-[120px]">
                    <div className="text-center">
                      <div className="text-white font-bebas text-3xl md:text-4xl font-bold">5+</div>
                      <div className="text-white/80 text-sm font-body mt-1">лет на рынке</div>
                    </div>
                    <div className="w-px h-14 bg-white/20 self-stretch" />
                    <div className="text-center">
                      <div className="text-white font-bebas text-3xl md:text-4xl font-bold">500+</div>
                      <div className="text-white/80 text-sm font-body mt-1">клиентов</div>
                    </div>
                    <div className="w-px h-14 bg-white/20 self-stretch" />
                    <div className="text-center">
                      <div className="text-white font-bebas text-3xl md:text-4xl font-bold">5</div>
                      <div className="text-white/80 text-sm font-body mt-1">маршрутов доставки</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
