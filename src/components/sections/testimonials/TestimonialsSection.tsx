import { useState, useCallback, useEffect, useLayoutEffect } from "react";
import { X, User } from "lucide-react";
import img01 from "@/assets/sections/testimonials/photo-01.jpeg?url";
import img02 from "@/assets/sections/testimonials/photo-02.jpeg?url";
import img03 from "@/assets/sections/testimonials/photo-03.jpeg?url";
import img04 from "@/assets/sections/testimonials/photo-04.jpeg?url";
import img05 from "@/assets/sections/testimonials/photo-05.jpeg?url";
import img06 from "@/assets/sections/testimonials/photo-06.jpeg?url";
import img07 from "@/assets/sections/testimonials/photo-07.jpeg?url";
import img08 from "@/assets/sections/testimonials/photo-08.jpeg?url";
import img09 from "@/assets/sections/testimonials/photo-09.jpeg?url";
import img10 from "@/assets/sections/testimonials/photo-10.jpeg?url";
import img11 from "@/assets/sections/testimonials/photo-11.jpeg?url";
import img12 from "@/assets/sections/testimonials/photo-12.jpeg?url";
import img13 from "@/assets/sections/testimonials/photo-13.jpeg?url";
import img14 from "@/assets/sections/testimonials/photo-14.jpeg?url";
import img15 from "@/assets/sections/testimonials/photo-15.jpeg?url";
import img16 from "@/assets/sections/testimonials/photo-16.jpeg?url";
import img17 from "@/assets/sections/testimonials/photo-17.jpeg?url";
import img18 from "@/assets/sections/testimonials/photo-18.jpeg?url";

const REVIEW_IMAGES = [
  img01, img02, img03, img04, img05, img06, img07, img08, img09,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
];

const REVIEWS = [
  {
    name: "Сергей",
    role: "Предприниматель, Москва",
    text: "Работаем с AΛEΘ-9 несколько месяцев. Проверка товара по ТЗ — это то, что нужно: получаем фото до отправки, никаких сюрпризов на складе. Удобно.",
    rating: 5,
  },
  {
    name: "Кирилл",
    role: "Владелец магазина электроники",
    text: "Пробовал разные варианты доставки из Китая. Здесь понравился принцип: один менеджер на весь процесс, не нужно объяснять ситуацию заново каждый раз.",
    rating: 5,
  },
  {
    name: "Александра",
    role: "Байер, текстиль",
    text: "Консолидация от нескольких поставщиков в одну отправку сэкономила хорошую сумму на логистике. Результат — стабильный.",
    rating: 5,
  },
  {
    name: "Валерий",
    role: "Оптовый импортёр",
    text: "Отчёт перед отправкой с фотографиями — ключевое для меня. Раньше терял деньги на браке, сейчас ситуация стабилизировалась.",
    rating: 5,
  },
  {
    name: "Константин",
    role: "Маркетплейс-продавец",
    text: "Сроки соблюдают, менеджер на связи. Для регулярных поставок — то что нужно. Работаем уже год.",
    rating: 5,
  },
  {
    name: "Дмитрий",
    role: "Импорт техники",
    text: "Проверка на складе в Китае спасла нас от партии с дефектами. Всё зафиксировали до отправки — претензии решили с поставщиком, груз не пришлось возвращать.",
    rating: 5,
  },
  {
    name: "Елена",
    role: "Закупки для ритейла",
    text: "Прозрачные этапы и один контакт — менеджер. Никакой путаницы между отделами. Рекомендую для тех, кто ценит предсказуемость.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxClosing, setLightboxClosing] = useState(false);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const closeGallery = useCallback(() => setGalleryOpen(false), []);

  const closeLightbox = useCallback(() => {
    setLightboxClosing(true);
  }, []);

  const handleLightboxTransitionEnd = useCallback(() => {
    if (lightboxClosing) {
      setLightboxIndex(null);
      setLightboxClosing(false);
      setLightboxVisible(false);
    }
  }, [lightboxClosing]);

  useLayoutEffect(() => {
    if (lightboxIndex === null) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setLightboxVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, [lightboxIndex]);

  useEffect(() => {
    if (!galleryOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) closeLightbox();
        else closeGallery();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [galleryOpen, closeGallery, closeLightbox, lightboxIndex]);

  const lightboxOpacity = lightboxClosing ? 0 : lightboxVisible ? 1 : 0;

  return (
    <section id="testimonials" className="relative pt-[0.8cm] pb-[1.2cm] px-6 md:px-8 overflow-hidden border-y-4 border-white/20" aria-label="Отзывы клиентов">
      <div className="absolute inset-0 bg-emerald-block" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
            Что говорят клиенты
          </h2>
        </div>

        <div className="overflow-x-auto overflow-y-hidden scroll-smooth -mx-6 px-6 md:-mx-8 md:px-8">
          <div className="flex gap-6 pb-2" style={{ width: "max-content" }}>
            {REVIEWS.map((review, index) => (
              <div
                key={review.name}
                className="flex-shrink-0 w-[min(100%,320px)] sm:w-[340px] min-h-[300px] flex flex-col bg-white/15 rounded-3xl overflow-hidden border border-white/20 shadow-card hover:shadow-emerald-glow transition-shadow duration-300"
              >
                <div className="p-7 flex flex-col flex-1 min-h-0">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-sm text-white/95 leading-relaxed mb-5 flex-1 min-h-0">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex-shrink-0 flex items-center justify-center" aria-hidden>
                      <User className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-body text-sm font-semibold text-white">{review.name}</div>
                      <div className="font-body text-xs text-white/80">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="pill-button inline-flex items-center justify-center bg-white/20 text-white border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/30 transition-colors"
          >
            Больше отзывов
          </button>
        </div>
      </div>

      {/* Полноэкранный попап с фото отзывов */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-graphite"
          role="dialog"
          aria-modal
          aria-label="Галерея отзывов"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
            <h3 className="font-display text-lg text-white">Фото отзывов</h3>
            <button
              type="button"
              onClick={closeGallery}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {REVIEW_IMAGES.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                {REVIEW_IMAGES.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="aspect-square rounded-2xl overflow-hidden bg-white/5 block w-full text-left cursor-pointer hover:ring-2 ring-emerald-brand/50 ring-offset-2 ring-offset-graphite transition-shadow"
                  >
                    <img
                      src={src}
                      alt={`Отзыв ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-graphite-light font-body py-12">
                Добавьте фото в папку <code className="bg-white/10 px-2 py-1 rounded text-sm">src/assets/otzyvy</code>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Лайтбокс: открытое фото по клику */}
      {galleryOpen && lightboxIndex !== null && REVIEW_IMAGES[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out"
          style={{ opacity: lightboxOpacity }}
          onClick={closeLightbox}
          onTransitionEnd={(e) => {
            if (e.target === e.currentTarget && lightboxClosing) handleLightboxTransitionEnd();
          }}
          role="dialog"
          aria-modal
          aria-label="Просмотр фото"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={REVIEW_IMAGES[lightboxIndex]}
            alt={`Отзыв ${lightboxIndex + 1}`}
            loading="lazy"
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out"
            style={{
              opacity: lightboxOpacity,
              transform: `scale(${0.92 + lightboxOpacity * 0.08})`,
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
