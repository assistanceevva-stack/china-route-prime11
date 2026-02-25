import { Package } from "lucide-react";

export default function StorageBlock() {
  return (
    <section
      className="relative pt-[0.8cm] pb-[0.8cm] px-6 md:px-8 overflow-hidden border-y-4 border-white/10"
      aria-labelledby="storage-heading"
    >
      <div className="absolute inset-0 bg-[hsl(var(--graphite))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-emerald-brand/30 backdrop-blur-sm mb-6 md:mb-8 border border-white/20">
          <Package className="w-8 h-8 md:w-10 md:h-10 text-emerald-light" strokeWidth={2} />
        </div>
        <h2
          id="storage-heading"
          className="font-display text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight mb-4"
        >
          Бесплатно храним ваши товары на складе в Китае
        </h2>
        <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          До момента полного формирования заказа
        </p>
      </div>
    </section>
  );
}
