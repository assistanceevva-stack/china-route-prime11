import { useState, useCallback, useEffect, useRef } from "react";
import { Shield, Package, Route, User, X, Video } from "lucide-react";
import videoControl from "@/assets/sections/why/video-control.mp4";
import videoControl2 from "@/assets/sections/why/video-control2.mp4";
import videoWarehouse from "@/assets/sections/why/video-warehouse.mp4";
import videoProcess from "@/assets/sections/why/video-process.mp4";

const CARDS = [
  {
    icon: Shield,
    title: "Контроль перед отправкой",
    desc: "Проверяем товар по вашему техническому заданию до отправки. Фото- и видеоотчёт по каждой партии.",
  },
  {
    icon: Package,
    title: "Склад и консолидация",
    desc: "Принимаем товары от разных поставщиков на складе в Китае и объединяем в одну отправку.",
  },
  {
    icon: Route,
    title: "Предсказуемый процесс",
    desc: "Чёткие этапы, трекинг на каждом шаге. Вы знаете, где находится ваш груз в любой момент.",
  },
  {
    icon: User,
    title: "Персональный менеджер",
    desc: "Один менеджер ведёт ваш заказ от начала до конца. Никаких передач между отделами.",
  },
];

type VideoPopup = "control" | "warehouse" | "process" | null;

export default function WhySection() {
  const [videoOpen, setVideoOpen] = useState<VideoPopup>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRefWarehouse = useRef<HTMLVideoElement>(null);
  const videoRefProcess = useRef<HTMLVideoElement>(null);
  const closeVideo = useCallback(() => {
    videoRef.current?.pause();
    videoRef2.current?.pause();
    videoRefWarehouse.current?.pause();
    videoRefProcess.current?.pause();
    setVideoOpen(null);
  }, []);

  useEffect(() => {
    if (!videoOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [videoOpen, closeVideo]);

  return (
    <section id="why" className="pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 bg-milk" aria-label="Почему выбирают нас">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-graphite leading-tight max-w-md">
            Почему выбирают нас
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isVideoCard = idx === 0 || idx === 1 || idx === 2;
            const openPopup = idx === 0 ? () => setVideoOpen("control") : idx === 1 ? () => setVideoOpen("warehouse") : idx === 2 ? () => setVideoOpen("process") : undefined;
            return (
              <div
                key={card.title}
                role={isVideoCard ? "button" : undefined}
                tabIndex={isVideoCard ? 0 : undefined}
                onClick={openPopup}
                onKeyDown={isVideoCard ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPopup?.(); } } : undefined}
                className={`relative bg-milk-warm rounded-3xl p-7 border border-border shadow-card group hover:border-emerald-brand/30 hover:shadow-[0_12px_40px_-8px_hsl(220_10%_12%_/_0.14),0_0_24px_0_hsl(160_78%_23%_/_0.2)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300${isVideoCard ? " cursor-pointer" : ""}`}
              >
                {isVideoCard && (
                  <div className="absolute top-7 right-7 w-9 h-9 rounded-full bg-emerald-block text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 convex-emerald border border-white/20" aria-hidden>
                    <Video className="w-4 h-4" strokeWidth={2} />
                  </div>
                )}
                {/* Icon — выровнен по высоте с кнопкой в углу (top-7) */}
                <div className="w-11 h-11 rounded-2xl bg-graphite/6 flex items-center justify-center mb-6 group-hover:bg-emerald-light transition-colors duration-300 convex-light">
                  <Icon className="w-5 h-5 text-graphite-mid group-hover:text-emerald-brand transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <div className="font-display text-xs text-graphite-light mb-3">
                  0{idx + 1}
                </div>

                <h3 className="font-display text-lg text-graphite font-semibold leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-graphite-mid leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Попап с видео */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite/60 backdrop-blur-sm"
          onClick={closeVideo}
          aria-modal
          role="dialog"
          aria-label={videoOpen === "control" ? "Видео: контроль перед отправкой" : videoOpen === "warehouse" ? "Видео: склад и консолидация" : "Видео: предсказуемый процесс"}
        >
          <div
            className="relative w-[min(768px,100%)] h-[420px] rounded-2xl overflow-hidden bg-graphite shadow-premium animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
            <div className={`flex-1 flex items-center justify-center p-4 pt-14 min-h-0 ${videoOpen === "control" ? "flex gap-[0.5cm]" : ""}`}>
              {videoOpen === "control" && (
                <>
                  <video
                    ref={videoRef}
                    src={videoControl}
                    controls
                    preload="metadata"
                    className="flex-1 min-w-0 aspect-video rounded-xl max-h-full object-contain"
                  />
                  <video
                    ref={videoRef2}
                    src={videoControl2}
                    controls
                    preload="metadata"
                    className="flex-1 min-w-0 aspect-video rounded-xl max-h-full object-contain"
                  />
                </>
              )}
              {videoOpen === "warehouse" && (
                <video
                  ref={videoRefWarehouse}
                  src={videoWarehouse}
                  controls
                  preload="metadata"
                  className="w-full max-h-full aspect-video rounded-xl object-contain"
                />
              )}
              {videoOpen === "process" && (
                <video
                  ref={videoRefProcess}
                  src={videoProcess}
                  controls
                  preload="metadata"
                  className="w-full max-h-full aspect-video rounded-xl object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
