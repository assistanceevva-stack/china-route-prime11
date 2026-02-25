import partnersBg from "@/assets/IMAGE 2026-02-19 17_56_22.png";

const TELEGRAM_LINK = "https://t.me/the_golden_jet";

const PARTNERS = [
  "1688",
  "Alibaba",
  "Taobao",
  "Poizon",
  "Banggood",
  "Made-in-China",
  "Suning",
  "Yiwu-Go",
  "Pinduoduo",
  "Global-Sources",
  "Jing Dong (JD)",
];

export default function ChinaPartnersSection() {
  return (
    <section id="partners" className="relative pt-[0.8cm] pb-[0.8cm] px-6 md:px-8 overflow-hidden">
      <img
        src={partnersBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-milk/90" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-graphite leading-tight mb-[0.4cm]">
          Работаем с крупнейшими торговыми площадками и фабриками Китая
        </h2>
      </div>
      {/* Бегущая строка от края до края — в стиле изумрудного блока */}
      <div className="relative z-10 w-screen left-1/2 -translate-x-1/2 overflow-hidden py-6 mb-[0.4cm] border-y-4 border-white/20" aria-hidden>
        <div className="absolute inset-0 bg-emerald-block" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex items-center gap-6 w-max animate-partners-marquee uppercase font-body text-2xl font-semibold text-white tracking-wide py-2">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <span key={`${name}-${i}`} className="contents flex items-center gap-6">
              {i > 0 && <span className="flex-shrink-0 text-white/70 font-normal">•</span>}
              <span className="flex-shrink-0 font-porsche text-white">{name}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="space-y-6 font-body text-base text-graphite-mid leading-relaxed mb-10">
          <p>
            Имеем широкую базу проверенных поставщиков и напрямую сотрудничаем с фабриками Китая.
            Подберём надёжного производителя под ваш запрос за 3–5 дней, часто — быстрее.
          </p>
          <p>
            Если вы планируете выпуск продукции под своим брендом,
            организуем производство «под ключ»:
            дизайн, материалы, упаковка — с учётом всех ваших требований.
          </p>
        </div>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-button inline-flex items-center justify-center border border-white/20 convex-graphite text-white px-8 py-3.5 text-sm font-medium hover:bg-graphite/90 emerald-hover"
        >
          Обсудить проект
        </a>
      </div>
    </section>
  );
}
