import { FileStack, Calculator, Phone } from "lucide-react";

export default function TransparencySection() {
  return (
    <section id="transparency" className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk-warm" aria-label="Прозрачность работы">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-graphite text-center leading-tight mb-[0.8cm]">
          Прозрачность работы
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Module 1: Official import vs cargo — 3D documents + container */}
          <div className="rounded-[2rem] overflow-hidden border border-border bg-milk shadow-card px-8 md:px-10 py-4 md:py-5 flex flex-col md:flex-row gap-8 items-center group/card hover:shadow-lg hover:border-emerald-brand/20 transition-all duration-300">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer select-none active:scale-[0.98] transition-transform h-[4.5rem] md:h-[5rem]">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border border-white/20 convex-graphite shadow-md group-hover/card:shadow-emerald-glow/30 transition-shadow duration-300"
                style={{ transform: "perspective(600px) rotateY(-12deg) rotateX(4deg)" }}
              >
                <FileStack className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
              </div>
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-milk-warm border-2 border-graphite/20 flex items-center justify-center convex-light shadow-sm group-hover/card:border-emerald-brand/30 transition-colors duration-300"
                style={{ transform: "perspective(600px) rotateY(8deg)" }}
              >
                <span className="text-[8px] md:text-[9px] font-body font-bold text-emerald-brand tracking-widest">CARGO</span>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-graphite font-semibold mb-3">
                Официальный ввоз или карго
              </h3>
              <p className="font-body text-sm text-graphite-mid leading-relaxed">
                Вы можете выбрать официальный ввоз или карго-схему. Мы помогаем определить оптимальный вариант.
              </p>
            </div>
          </div>

          {/* Module 2: Cost calculation — 3D box + scale + calculator */}
          <div className="rounded-[2rem] overflow-hidden border border-border bg-milk shadow-card px-8 md:px-10 py-4 md:py-5 flex flex-col md:flex-row gap-8 items-center group/card hover:shadow-lg hover:border-emerald-brand/20 transition-all duration-300">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer select-none active:scale-[0.98] transition-transform h-[4.5rem] md:h-[5rem]">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border border-white/20 convex-graphite shadow-md group-hover/card:shadow-emerald-glow/30 transition-shadow duration-300"
                style={{ transform: "perspective(600px) rotateY(-8deg) rotateX(6deg)" }}
              >
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
              </div>
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-milk-warm border-2 border-graphite/20 flex items-center justify-center convex-light shadow-sm group-hover/card:border-emerald-brand/30 transition-colors duration-300"
                style={{ transform: "perspective(600px) rotateY(8deg)" }}
              >
                <Calculator className="w-5 h-5 md:w-6 md:h-6 text-emerald-brand" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl text-graphite font-semibold mb-3">
                Расчёт стоимости
              </h3>
              <p className="font-body text-sm text-graphite-mid leading-relaxed">
                Стоимость рассчитывается после фактической проверки на складе. Это исключает ошибки и скрытые доплаты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
