import { useState, useEffect } from "react";
import logoIcon from "@/assets/shared/logo.png";

const TELEGRAM_LINK = "https://t.me/the_golden_jet";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-milk/95 backdrop-blur-md border-b-2 border-emerald-brand/20 shadow-premium"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — клик ведёт в начало страницы */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <img src={logoIcon} alt="" className="w-7 h-7 rounded-lg object-cover" aria-hidden />
          <span className="font-display font-semibold text-graphite text-lg tracking-tight">
            AΛEΘ<span className="text-emerald-brand">-9</span> cargo
          </span>
        </a>

        {/* Nav Links — desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-graphite-mid">
          <a href="#cargo" className="hover:text-emerald-brand transition-colors">Карго</a>
          <a href="#delivery" className="hover:text-emerald-brand transition-colors">Доставка</a>
          <a href="#transparency" className="hover:text-emerald-brand transition-colors">Прозрачность</a>
          <a href="#about" className="hover:text-emerald-brand transition-colors">О компании</a>
          <a href="#why" className="hover:text-emerald-brand transition-colors">Преимущества</a>
          <a href="#testimonials" className="hover:text-emerald-brand transition-colors">Отзывы</a>
          <a href="#faq" className="hover:text-emerald-brand transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-button bg-graphite text-white text-sm px-5 py-2.5 hover:bg-graphite/90 emerald-hover"
        >
          Telegram
        </a>
      </div>
    </header>
  );
}
