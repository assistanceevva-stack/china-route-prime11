import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ctaBg from "@/assets/IMAGE 2026-02-20 15_18_59.jpg";

const FAQS = [
  {
    q: "Как проходит проверка товара перед отправкой?",
    a: "После поступления товара на наш склад в Китае менеджер проводит проверку по вашему техническому заданию: количество единиц, внешний вид, маркировка, базовая функциональность. По итогу вы получаете фото- и видеоотчёт с фиксацией состояния каждой позиции.",
  },
  {
    q: "Что такое консолидация и зачем она нужна?",
    a: "Консолидация — это объединение товаров от нескольких поставщиков в одну отправку. Это позволяет сократить расходы на логистику, так как итоговый груз оформляется как единая партия. Особенно выгодно при работе с 3–5+ поставщиками одновременно.",
  },
  {
    q: "Какой способ доставки лучше выбрать?",
    a: "Зависит от срочности и характеристик груза. Для срочных поставок — экспресс-авиа (1–3 дня) или авиа (10–12 дней). Для регулярных партий — поезд или авто (13–30 дней). Для крупных объёмов — морской контейнер (35–45 дней). Менеджер поможет выбрать оптимальный вариант под ваш товар.",
  },
  {
    q: "Как рассчитывается стоимость доставки?",
    a: "Стоимость формируется на основе веса и объёма груза, категории товара, выбранного маршрута и дополнительных услуг (проверка, упаковка, страхование). Точный расчёт менеджер предоставит после уточнения деталей вашего заказа.",
  },
  {
    q: "Предоставляете ли вы отчёт перед отправкой груза?",
    a: "Да. Перед каждой отправкой вы получаете детализированный отчёт: фотографии товара, данные по количеству, вес, объём, данные упаковки. Груз отправляется только после вашего подтверждения.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-graphite leading-tight">
            Частые вопросы
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              >
                <span className="font-body text-base font-medium text-graphite group-hover:text-graphite/80 transition-colors leading-snug">
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center mt-0.5 group-hover:bg-emerald-light transition-colors duration-200">
                  {open === idx ? (
                    <Minus className="w-3.5 h-3.5 text-graphite-mid" strokeWidth={2} />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-graphite-mid" strokeWidth={2} />
                  )}
                </span>
              </button>

              {open === idx && (
                <div className="pb-6 animate-fade-in">
                  <p className="font-body text-sm text-graphite-mid leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl p-8 md:p-10 text-center border border-white/20 convex-graphite relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${ctaBg})` }}
            aria-hidden
          />
          <div className="absolute inset-0 rounded-3xl bg-[hsl(var(--graphite)/0.66)]" aria-hidden />
          <div className="relative z-10">
          <h3 className="font-display text-2xl md:text-3xl text-white font-medium mb-3">
            Остались вопросы?
          </h3>
          <p className="font-body text-base text-white/90 mb-8 max-w-sm mx-auto">
            Напишите нам в Telegram — ответим в течение 30 минут.
          </p>
          <a
            href="https://t.me/aleth9logistics"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button inline-flex items-center gap-2.5 bg-white text-graphite px-7 py-3.5 text-sm font-medium hover:bg-white/90 emerald-hover"
          >
            Написать в Telegram
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
