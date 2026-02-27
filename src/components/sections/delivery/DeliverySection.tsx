import { useState } from "react";
import planeSrc from "@/assets/sections/delivery/plane.png";
import expressSrc from "@/assets/sections/delivery/express.png";
import trainSrc from "@/assets/sections/delivery/train.png";
import truckSrc from "@/assets/sections/delivery/truck.png";
import shipSrc from "@/assets/sections/delivery/ship.png";

type TransportKey = "avia" | "express" | "train" | "auto" | "sea";

interface TransportOption {
  key: TransportKey;
  label: string;
  image: string;
  title: string;
  subtitles?: { label: string; days: string }[];
  days?: string;
  description: string;
}

const OPTIONS: TransportOption[] = [
  {
    key: "avia",
    label: "Авиа",
    image: planeSrc,
    title: "Авиадоставка",
    days: "10–12 дней",
    description: "Регулярные авиарейсы из Шанхая, Гуанчжоу и других хабов. Оптимальный баланс скорости и стоимости.",
  },
  {
    key: "express",
    label: "Экспресс",
    image: expressSrc,
    title: "Экспресс-авиа",
    days: "1–3 дня",
    description: "Приоритетная доставка для срочных грузов. Специализированные рейсы с минимальными задержками.",
  },
  {
    key: "train",
    label: "Поезд",
    image: trainSrc,
    title: "Железная дорога",
    subtitles: [
      { label: "Быстрый маршрут", days: "13–15 дней" },
      { label: "Экономичный", days: "25–30 дней" },
    ],
    description: "Надёжный контейнерный поезд по маршруту Китай–Россия. Подходит для большинства категорий товаров.",
  },
  {
    key: "auto",
    label: "Авто",
    image: truckSrc,
    title: "Автомобильный транспорт",
    days: "13–15 дней",
    description: "Фурная доставка «от склада до склада». Гибкость маршрута и возможность частичной загрузки (LTL).",
  },
  {
    key: "sea",
    label: "Море",
    image: shipSrc,
    title: "Морская доставка",
    days: "35–45 дней",
    description: "Контейнерные перевозки через морские порты. Наиболее экономичный способ для крупных партий.",
  },
];

export default function DeliverySection() {
  const [active, setActive] = useState<TransportKey>("avia");

  const current = OPTIONS.find((o) => o.key === active)!;

  return (
    <section id="delivery" className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk" aria-label="Способы доставки">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-graphite leading-tight">
            Выберите маршрут
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-milk-warm rounded-full border border-border w-fit mb-10 flex-wrap">
          {OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActive(opt.key)}
              className={`transport-tab px-5 py-2 ${active === opt.key ? "active shadow-premium" : ""}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Transport Display — фиксированная высота, чтобы не дёргалось при переключении (Поезд с 2 подзаголовками) */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch min-h-[320px] md:min-h-[400px]">
          {/* Image — рамка фиксирована, фото +2см и выходит за рамку */}
          <div className="relative bg-milk-warm rounded-3xl overflow-visible border border-border shadow-card flex items-center justify-center w-fit max-w-full p-1 self-start h-[calc(280px-2cm+0.5rem)] md:h-[calc(360px-2cm+0.5rem)]">
            <img
              key={current.key}
              src={current.image}
              loading="lazy"
              alt={current.title}
              className="max-h-[calc(280px-2cm+2cm)] md:max-h-[calc(360px-2cm+2cm)] w-auto object-contain scale-[2] animate-delivery-image-in block"
            />
          </div>

          {/* Info — справа, не выше рамки с фото */}
          <div className="px-2 md:px-6 flex flex-col self-start max-h-[calc(280px-2cm+0.5rem)] md:max-h-[calc(360px-2cm+0.5rem)] overflow-y-auto">
            <div className="flex-1 min-h-0">
              <h3 className="font-display text-2xl md:text-3xl text-graphite mb-5">
                {current.title}
              </h3>

              {/* Timing */}
              {current.subtitles ? (
                <div className="space-y-3 mb-6">
                  {current.subtitles.map((s) => (
                    <div key={s.label} className="flex items-center justify-between p-4 rounded-2xl bg-milk-warm border border-border">
                      <span className="font-body text-sm text-graphite-mid">{s.label}</span>
                      <span className="font-display text-lg text-graphite font-medium">{s.days}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-emerald-light border border-emerald-brand/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-brand" />
                    <span className="font-display text-2xl text-graphite font-medium">
                      {current.days}
                    </span>
                  </div>
                </div>
              )}

              <p className="font-body text-base text-graphite-mid leading-relaxed mb-6 -mt-[0.3cm]">
                {current.description}
              </p>
            </div>

            <div className="mt-auto pt-4 border-t border-border">
              <p className="font-body text-xs text-graphite-light mb-6">
                Срок зависит от категории товара и маршрута.
              </p>
              <a
                href="https://t.me/the_golden_jet"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button inline-flex items-center gap-2 convex-graphite text-white text-sm px-6 py-3 border border-white/20 hover:bg-graphite/90 emerald-hover"
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
