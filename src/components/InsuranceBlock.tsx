import { Shield } from "lucide-react";
import decoImageLeft from "@/assets/IMG_0056-3.png";
import decoImageRight from "@/assets/IMG_0056-2.png";

export default function InsuranceBlock() {
  return (
    <section
      className="relative pt-[0.8cm] pb-12 md:pb-16 px-6 md:px-8 overflow-hidden border-y-4 border-white/20"
      aria-labelledby="insurance-heading"
    >
      <div className="absolute inset-0 bg-emerald-block" />
      {/* Фоновые изображения — под градиентом, приглушённые */}
      <div
        className="absolute left-0 top-[-2.2cm] z-0 h-[30rem] w-[30rem] flex items-start justify-start pointer-events-none"
        aria-hidden
      >
        <img
          src={decoImageLeft}
          alt=""
          className="h-full w-full object-contain object-[left_top] opacity-40"
        />
      </div>
      <div
        className="absolute right-0 top-[-2.5cm] z-0 h-[30rem] w-[30rem] flex items-start justify-end pointer-events-none"
        aria-hidden
      >
        <img
          src={decoImageRight}
          alt=""
          className="h-full w-full object-contain object-[right_top] opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-[1]" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 md:mb-8">
          <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
        </div>
        <h2
          id="insurance-heading"
          className="font-display text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight mb-4"
        >
          Страхуем ваш груз
        </h2>
        <p className="font-body text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
          Если произойдёт утеря — мы компенсируем всю стоимость товара
        </p>
      </div>
    </section>
  );
}
