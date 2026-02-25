import imgMarket from "@/assets/IMG_0012.PNG";
import imgOzon from "@/assets/IMG_0010.PNG";
import imgWb from "@/assets/IMG_0005-2.png";
import imgIcon from "@/assets/IMG_9999-2.png";

const SELLER_ITEMS = [
  "Проведем анализ ниши и конкурентов",
  "Рассчитаем юнит-экономику",
  "Создадим магазин под ключ",
  "Поможем в продвижении товаров и SEO оптимизации",
  "И решим другие задачи вашего бизнеса",
];

const BADGES = [
  { src: imgMarket, alt: "Маркетплейсы" },
  { src: imgOzon, alt: "Ozon" },
  { src: imgWb, alt: "Wildberries" },
  { src: imgIcon, alt: "" },
];

const convexButtonStyle: React.CSSProperties = {
  boxShadow: [
    "0 16px 48px -12px hsl(var(--graphite) / 0.55)",
    "0 6px 16px -4px hsl(var(--graphite) / 0.3)",
    "inset 0 4px 0 0 hsl(0 0% 100% / 0.26)",
    "inset 0 3px 0 0 hsl(0 0% 100% / 0.16)",
    "inset 0 2px 0 0 hsl(0 0% 100% / 0.08)",
    "inset 0 -6px 12px 0 hsl(0 0% 0% / 0.5)",
    "inset 0 -3px 6px 0 hsl(0 0% 0% / 0.35)",
    "inset 0 0 32px -6px hsl(0 0% 0% / 0.28)",
  ].join(", "),
  background: [
    "radial-gradient(ellipse 75% 45% at 50% 15%, hsl(220 10% 26%) 0%, transparent 60%)",
    "linear-gradient(180deg, hsl(220 10% 22%) 0%, hsl(220 10% 14%) 35%, hsl(220 10% 9%) 100%)",
    "linear-gradient(180deg, hsl(0 0% 100% / 0.09) 0%, transparent 35%, hsl(0 0% 0% / 0.18) 100%)",
  ].join(", "),
};

export default function CertificationSection() {
  return (
    <section id="certification" className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk border-t-2 border-emerald-brand/15">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Карточка: сертификация + услуги для продавцов — экспозиционный блок */}
        <div className="relative rounded-[2rem] overflow-hidden border-y-4 border-white/20 shadow-card min-h-[320px] md:min-h-[360px]">
          <div className="absolute inset-0 bg-emerald-block" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 pointer-events-none" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-white/15 pointer-events-none hidden md:block" aria-hidden />
          <div className="relative z-10 py-8 md:py-10 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[320px] md:min-h-[360px]">
            {/* Левая колонка: текст, справа от него полоса РФ→CN */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 min-w-0 md:pr-8">
              <div className="min-w-0 flex-1">
                <span className="inline-block text-[10px] md:text-xs font-body font-medium text-white/70 tracking-[0.2em] uppercase mb-3">
                  Маркетплейсы
                </span>
                <h2 className="font-display text-2xl md:text-[2rem] lg:text-[2.25rem] text-white leading-[1.15] tracking-tight mb-4">
                  Организуем сертификацию товаров
                </h2>
                <p className="font-body text-sm md:text-base text-white/90 leading-relaxed max-w-md">
                  Поможем с сертификацией товаров. Работаем с надёжными партнёрами, которые оформят все необходимые сертификаты для продажи на маркетплейсах, включая Ozon и Wildberries.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-between flex-shrink-0 w-fit h-[15rem] md:h-[17rem] md:ml-auto"
                style={{ transform: "perspective(600px) rotateY(8deg)" }}
                aria-hidden
              >
                <div className="w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-body font-bold text-white tracking-widest">РФ</span>
                </div>
                <svg className="w-6 h-4 text-white/50 flex-shrink-0" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 0v16" strokeLinecap="round" />
                </svg>
                <div className="w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center shadow-sm" title="Сертификация">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="2" width="16" height="18" rx="1" />
                    <line x1="7" y1="7" x2="17" y2="7" />
                    <line x1="7" y1="11" x2="14" y2="11" />
                    <line x1="7" y1="15" x2="12" y2="15" />
                    <circle cx="17" cy="18" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
                    <path d="M16 18l1.5 1.5L19 17" strokeWidth="1.2" />
                  </svg>
                </div>
                <svg className="w-6 h-4 text-white/50 flex-shrink-0" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 0v16" strokeLinecap="round" />
                </svg>
                <div className="w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-body font-bold text-white tracking-widest">CN</span>
                </div>
              </div>
            </div>
            {/* Правая колонка: список «Что входит», справа от него полоса бейджей */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 min-w-0 md:pl-8">
              <div className="min-w-0 flex-1">
                <span className="inline-block text-[10px] md:text-xs font-body font-medium text-white/70 tracking-[0.2em] uppercase mb-3">
                  Что входит
                </span>
                <ul className="font-body text-sm md:text-base text-white/95 leading-relaxed list-none space-y-3">
                  {SELLER_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="flex flex-col items-center gap-0 flex-shrink-0 h-[15rem] md:h-[17rem] md:ml-auto"
                style={{ transform: "perspective(600px) rotateY(-6deg)" }}
                aria-hidden
              >
                {BADGES.map(({ src, alt }, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img src={src} alt={alt} className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl flex-shrink-0" />
                    {i < BADGES.length - 1 && (
                      <svg className="w-5 h-4 text-white/40 flex-shrink-0" viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 0v16" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-border bg-milk-warm shadow-card py-[0.5cm] px-8 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-graphite leading-tight font-semibold mb-4">
              Цена доставки от 1$
            </h3>
            <p className="font-body text-sm text-graphite-mid leading-relaxed mb-4">
              Цена меняется по курсу на день доставки. Все налоговые пошлины и сборы уже включены в стоимость.
            </p>
            <p className="font-body text-sm text-graphite-mid leading-relaxed">
              Доступны все виды оплаты + оплата на расчётный счёт.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 p-6 md:p-6 text-white overflow-hidden bg-emerald-block shadow-card">
            <p className="font-body text-sm text-white/95 leading-relaxed">
              Вы оплачиваете услуги доставки после того, как товары прибудут в Россию — никаких авансов за транспортировку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
