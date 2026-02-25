import { useState } from "react";
import { FileText, MessageCircle } from "lucide-react";

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
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-graphite-light hover:text-graphite transition-colors font-body text-lg"
        >
          ×
        </button>
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
              <div className="w-5 h-5 rounded-full bg-emerald-brand" />
            </div>
            <h3 className="font-display text-xl text-graphite font-semibold mb-2">Заявка принята</h3>
            <p className="text-sm text-graphite-light font-body">Менеджер свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-2xl text-graphite font-semibold mb-1">Оставить заявку</h3>
            <p className="text-sm text-graphite-light mb-6 font-body">Менеджер уточнит детали и рассчитает сроки.</p>
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

export default function AboutSection() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section id="about" className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-graphite leading-tight mb-8">
                AΛEΘ-9 cargo
              </h2>

              <div className="space-y-5 font-body text-base text-graphite-mid leading-relaxed">
                <p>
                  AΛEΘ-9 cargo — ваш надежный партнёр по организации, проверки и доставки товаров из Китая.
                </p>
                <p>
                  Мы предлагаем полное сопровождение на всех этапах: от поиска проверенных поставщиков до доставки товаров на склад клиента.
                </p>
                <p>
                  Мы всегда на связи и при возникновении сложностей оперативно решаем все вопросы в интересах клиента. Наша цель — гарантировать комфорт и надёжность на всех этапах сотрудничества, чтобы каждый клиент оставался доволен.
                </p>
              </div>

              {/* Emerald divider */}
              <div className="mt-10 pt-10 border-t border-border">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { num: "100%", label: "Прозрачность процесса" },
                    { num: "TZ", label: "Проверка по ТЗ" },
                    { num: "24/7", label: "Всегда на связи" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="font-display text-2xl text-graphite font-semibold mb-1">{item.num}</div>
                      <div className="text-xs text-graphite-light font-body leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Manager CTA card */}
            <div className="rounded-3xl p-8 md:p-10 border border-white/20 convex-graphite">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>

              <h3 className="font-display text-2xl text-white font-medium mb-4">
                Свяжитесь с менеджером
              </h3>
              <p className="font-body text-base text-graphite-light leading-relaxed mb-8">
                Оставьте контакт, и с вами свяжется наш менеджер. Он уточнит детали и рассчитает сроки.
              </p>

              <div className="space-y-3">
                <a
                  href="https://t.me/aleth9logistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button w-full flex items-center justify-center gap-2.5 bg-white text-graphite py-3.5 text-sm font-medium hover:bg-white/90 emerald-hover convex-pill-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  Написать в Telegram
                </a>
                <button
                  onClick={() => setFormOpen(true)}
                  className="pill-button w-full flex items-center justify-center gap-2.5 bg-white/10 text-white border border-white/20 py-3.5 text-sm font-medium hover:bg-white/18 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Оставить заявку
                </button>
              </div>

              {/* Response time */}
              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-brand animate-pulse" />
                <span className="text-xs text-graphite-light font-body">
                  Обычно отвечаем в течение 30 минут
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
