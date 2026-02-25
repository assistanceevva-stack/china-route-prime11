import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import logoIcon from "@/assets/ChatGPT Image 19 февр. 2026 г., 20_43_59-2.png";
import PrivacyModal from "@/components/PrivacyModal";

export default function FooterSection() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <footer className="bg-graphite py-12 px-6 border-t-2 border-emerald-brand/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logoIcon} alt="" className="w-7 h-7 rounded-lg object-cover" aria-hidden />
              <span className="font-display font-semibold text-white text-lg tracking-tight">
                AΛEΘ<span className="text-emerald-brand">-9</span> cargo
              </span>
            </div>
            <p className="font-body text-xs text-graphite-light max-w-xs leading-relaxed">
              Проверка и доставка товаров из Китая в Россию. Контроль на каждом этапе.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-body font-medium text-graphite-light uppercase tracking-widest mb-1">
              Навигация
            </span>
            {["Карго", "Доставка", "Прозрачность", "О компании", "Преимущества", "Отзывы", "FAQ"].map((label, i) => {
              const hrefs = ["#cargo", "#delivery", "#transparency", "#about", "#why", "#testimonials", "#faq"];
              return (
                <a
                  key={label}
                  href={hrefs[i]}
                  className="font-body text-sm text-white/70 hover:text-emerald-light transition-colors"
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-body font-medium text-graphite-light uppercase tracking-widest mb-1">
              Контакты
            </span>
            <a
              href="https://t.me/the_golden_jet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-body text-sm text-white/70 hover:text-emerald-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Telegram
            </a>
            <a
              href="tel:+79102266619"
              className="flex items-center gap-2.5 font-body text-sm text-white/70 hover:text-emerald-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 (910) 226-66-19
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-graphite-light">
            © 2024 AΛEΘ-9. Все права защищены.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="font-body text-xs text-white/70 hover:text-emerald-light transition-colors text-left"
            >
              Политика конфиденциальности
            </button>
            <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
            <p className="font-body text-xs text-graphite-light">
              Организация проверки и доставки грузов из Китая
            </p>
          </div>
        </div>
        <div className="mt-4 font-body text-xs text-graphite-light text-center md:text-left">
          <p>ООО «Алео-9»</p>
          <p>ИНН 3100049830</p>
          <p>ОГРН 1253100008886</p>
        </div>
      </div>
    </footer>
  );
}
