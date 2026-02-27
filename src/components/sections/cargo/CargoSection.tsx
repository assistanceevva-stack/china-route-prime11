import { useState, useEffect, useRef } from "react";
import { Package, CheckCircle2, Truck, Clock } from "lucide-react";
import cargoImage from "@/assets/sections/cargo/cargo-main.jpg";
import cargoSlide1 from "@/assets/sections/cargo/slide-1.png";
import cargoSlide2 from "@/assets/sections/cargo/slide-2.png";
import cargoSlide3 from "@/assets/sections/cargo/slide-3.png";

const SERVICES = [
  { icon: CheckCircle2, label: "Проверка по ТЗ" },
  { icon: Package, label: "Консолидация на складе" },
  { icon: Truck, label: "Доставка в РФ" },
  { icon: Clock, label: "От 5 до 30 дней" },
];

const SLIDES = [
  {
    title: "Что такое карго?",
    text: "Карго — это быстрый и удобный способ доставки из Китая без сложной бюрократии.",
    showButton: true,
    buttonLabel: "Заказать",
  },
  {
    title: "Что входит?",
    text: "Забираем товар, проверяем, упаковываем и доставляем в Россию. Вы получаете готовый результат.",
    showButton: false,
  },
  {
    title: "Почему выбирают карго?",
    text: "Меньше документов, быстрее сроки, ниже издержки.",
    showButton: false,
  },
];

const CARGO_IMAGES = [cargoSlide1, cargoSlide2, cargoSlide3];

// Порог скролла для переключения между слайдами (0↔1↔2)
const getScrollThreshold = () => Math.max(230, window.innerHeight * 0.7);
// Порог для отпускания после третьего слайда — меньше, чтобы не листать слишком долго
const getReleaseThreshold = () => Math.max(120, window.innerHeight * 0.35);

export default function CargoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardBlockRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0..1 — прогресс до смены кадра (при скролле вниз — заливка, вверх — спуск)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down"); // направление: при вверх полоски пустеют
  const [thirdIndicatorStaysFull, setThirdIndicatorStaysFull] = useState(false);
  const slideIndexRef = useRef(0);
  const accumulatedRef = useRef(0);
  slideIndexRef.current = slideIndex;

  // Только колёсико: стопорим карточку по центру и переключаем слайды. Без scroll-листенера — он давал двойную подгонку и дёрганье.
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const card = cardBlockRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardCenterY = rect.top + rect.height / 2;
      const viewportCenterY = windowHeight / 2;
      const distFromCenter = Math.abs(cardCenterY - viewportCenterY);
      const inCenterZone = distFromCenter < 140;
      const centered = distFromCenter < 50;

      if (!inCenterZone) return;

      const current = slideIndexRef.current;
      const delta = e.deltaY;
      const threshold = getScrollThreshold();
      const releaseThreshold = getReleaseThreshold();

      const offsetToCenter = cardCenterY - viewportCenterY;
      if (delta > 0) {
        setScrollDirection("down");
        if (current >= 2) {
          e.preventDefault();
          accumulatedRef.current += delta;
          setScrollProgress(Math.min(1, accumulatedRef.current / releaseThreshold));
          if (accumulatedRef.current >= releaseThreshold) {
            accumulatedRef.current = 0;
            setScrollProgress(0);
            setThirdIndicatorStaysFull(true);
            window.scrollTo({ top: window.scrollY + Math.max(200, windowHeight * 0.25), behavior: "smooth" });
          }
          return;
        }
        e.preventDefault();
        if (centered) {
          accumulatedRef.current += delta;
          setScrollProgress(Math.min(1, accumulatedRef.current / threshold));
          if (accumulatedRef.current >= threshold) {
            accumulatedRef.current = 0;
            setScrollProgress(0);
            setSlideIndex((prev) => Math.min(2, prev + 1));
          }
        } else {
          const step = Math.sign(offsetToCenter) * Math.min(Math.abs(offsetToCenter), 50);
          window.scrollTo({ top: window.scrollY + step, behavior: "auto" });
        }
        return;
      }
      if (delta < 0) {
        setScrollDirection("up");
        if (current <= 0) return;
        e.preventDefault();
        if (centered) {
          accumulatedRef.current += delta;
          setScrollProgress(Math.min(1, -accumulatedRef.current / threshold));
          if (accumulatedRef.current <= -threshold) {
            accumulatedRef.current = 0;
            setScrollProgress(0);
            setThirdIndicatorStaysFull(false); // при обратном скролле третий индикатор снова ведёт себя как остальные
            setSlideIndex((prev) => Math.max(0, prev - 1));
          }
        } else {
          const step = Math.sign(offsetToCenter) * Math.min(Math.abs(offsetToCenter), 50);
          window.scrollTo({ top: window.scrollY + step, behavior: "auto" });
        }
      }
    };

    const opts = { passive: false };
    window.addEventListener("wheel", handleWheel, opts);
    return () => window.removeEventListener("wheel", handleWheel, opts);
  }, []);

  const slide = SLIDES[slideIndex];

  return (
    <section
      ref={sectionRef}
      id="cargo"
      className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk"
      aria-label="Что такое карго"
    >
      <div className="max-w-7xl mx-auto">
        {/* Блок «Что такое карго» — скролл переключает вкладки, пока не дойдёт до третьей; потом можно скроллить дальше */}
        <div ref={cardBlockRef} className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-graphite text-center leading-tight mb-[0.8cm]">
            Что такое карго
          </h2>
          <div className="rounded-[2rem] overflow-hidden bg-milk-warm border border-border shadow-card grid grid-cols-1 md:grid-cols-2 min-h-[320px] md:min-h-[400px]">
            <div className="relative min-h-[220px] md:min-h-0 overflow-hidden">
              {/* Три датчика: по одному на каждый кадр; заполняются по скроллу */}
              <div
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex gap-1 items-stretch h-32"
                aria-hidden
              >
                {/* 1-й кадр — вниз заливка, вверх потихоньку пустеет (как 2-й и 3-й) */}
                <div className="w-1.5 h-full flex flex-col justify-end rounded-full overflow-hidden bg-white/15 border border-white/20">
                  <div
                    className="w-full rounded-full bg-emerald-brand/80 flex-shrink-0"
                    style={{
                      height: `${slideIndex === 0 ? scrollProgress * 100 : slideIndex === 1 && scrollDirection === "up" ? (1 - scrollProgress) * 100 : 100}%`,
                      transition: "none",
                    }}
                  />
                </div>
                {/* 2-й кадр — вниз заливается, вверх потихоньку пустеет */}
                <div className="w-1.5 h-full flex flex-col justify-end rounded-full overflow-hidden bg-white/15 border border-white/20">
                  <div
                    className="w-full rounded-full flex-shrink-0"
                    style={{
                      height: `${slideIndex >= 2 ? 100 : slideIndex === 1 ? (scrollDirection === "up" ? (1 - scrollProgress) * 100 : scrollProgress * 100) : 0}%`,
                      transition: "none",
                      backgroundColor: "#9B2E3D",
                    }}
                  />
                </div>
                {/* 3-й кадр — вниз заливка, вверх пустеет; после отпускания страницы остаётся полным */}
                <div className="w-1.5 h-full flex flex-col justify-end rounded-full overflow-hidden bg-white/15 border border-white/20">
                  <div
                    className="w-full rounded-full flex-shrink-0"
                    style={{
                      height: `${slideIndex < 2 ? (thirdIndicatorStaysFull ? 100 : 0) : scrollDirection === "up" ? (1 - scrollProgress) * 100 : thirdIndicatorStaysFull ? 100 : scrollProgress * 100}%`,
                      transition: "none",
                      backgroundColor: "#E6E1D6",
                    }}
                  />
                </div>
              </div>
              <img
                src={cargoImage}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-center scale-105 blur-[6px] min-h-[220px] md:min-h-full md:h-full absolute inset-0"
              />
              <div
                className="absolute inset-0 backdrop-blur-[12px] bg-white/30 border-b border-white/40"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/20 pointer-events-none"
                aria-hidden
              />
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="h-[300%] w-full transition-transform duration-[14000ms] ease-[cubic-bezier(0.25,0.25,0.75,0.75)]"
                  style={{ transform: `translateY(-${slideIndex * (100 / 3)}%)` }}
                >
                  {CARGO_IMAGES.map((src, i) => (
                    <div
                      key={i}
                      className="h-1/3 w-full flex items-center justify-center px-[0.8cm]"
                      style={{ minHeight: "33.333%" }}
                    >
                      <img
                        src={src}
                        alt=""
                        className="max-w-full max-h-full w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-8 md:px-12 py-12 bg-graphite overflow-hidden">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-brand" />
                <span className="text-xs font-body font-medium text-graphite-light tracking-widest uppercase">
                  Карго
                </span>
              </div>
              <div key={slideIndex} className="animate-cargo-slide-in">
                <h3 className="font-display text-2xl md:text-3xl leading-[1.2] text-white mb-4">
                  {slide.title}
                </h3>
                <p className="font-body text-base text-graphite-light leading-relaxed max-w-sm mb-8">
                  {slide.text}
                </p>
              </div>
              {slide.showButton && (
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="https://t.me/the_golden_jet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-button inline-flex items-center gap-2 convex-graphite text-white px-5 py-2.5 text-sm font-medium border border-white/20 hover:bg-graphite/90 emerald-hover"
                  >
                    {slide.buttonLabel}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Список и текст — ниже карточки */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 -mt-6 origin-center scale-110">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-graphite/8 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-brand" strokeWidth={1.5} />
                </div>
                <span className="font-body text-sm font-medium text-graphite">{item.label}</span>
              </li>
            );
          })}
        </ul>
        <p className="font-body text-sm text-graphite-light text-center max-w-2xl mx-auto">
          Срок доставки — от 5 до 30 дней в зависимости от выбранного транспорта.
        </p>
      </div>
    </section>
  );
}
