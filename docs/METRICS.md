# Метрики сборки (Этап 4)

Замеры после выполнения этапов 1–3 и этапа 4 оптимизации.

## Размеры бандлов (production build)

**Дата замера:** 2026-02-25

### JS-чанки (gzip)

| Чанк | Размер (gzip) |
|------|----------------|
| index (main + Hero) | ~49 kB |
| vendor-react | ~56 kB |
| vendor-query | ~8 kB |
| vendor-router | ~6 kB |
| CargoSection | ~2.7 kB |
| TestimonialsSection | ~3.5 kB |
| CertificationSection | ~2.3 kB |
| AboutSection | ~2.2 kB |
| WhySection | ~2.2 kB |
| FaqSection | ~2.2 kB |
| DeliverySection | ~2 kB |
| TransparencySection | ~1.2 kB |
| ChinaPartnersSection | ~1.5 kB |
| InsuranceBlock | ~0.9 kB |
| StorageBlock | ~0.7 kB |

**Суммарный JS (критичный путь для первого экрана):** index + vendor-react ≈ 105 kB (gzip). Остальные секции подгружаются лениво.

### CSS

- `index-*.css`: ~81 kB (gzip ~14.5 kB)

### Крупные ассеты (не в gzip)

- hero-banner: ~5 MB (PNG)
- video-warehouse: ~15.9 MB (MP4)
- video-process: ~6.1 MB (MP4)
- video-control / video-control2: ~4.6–4.7 MB (MP4)
- truck.png: ~2.2 MB
- market.png, ozon.png: ~1.5 MB
- cargo-main.jpg: ~984 kB
- cta-bg.jpg: ~506 kB

Видео в WhySection используют `preload="metadata"`, полная загрузка — по воспроизведению.

## Зависимости (Этап 4.4)

### Неиспользуемые (depcheck)

- **dependencies:** `@hookform/resolvers`, `zod` — возможно используются формами (shadcn/ui); перед удалением проверить использование.
- **devDependencies:** `@tailwindcss/typography`, `@testing-library/react`, `autoprefixer`, `postcss` — типично используются Tailwind/тестами; при отсутствии конфига typography и тестов можно удалить после проверки.

### Безопасность (npm audit)

На момент замера: 10 уязвимостей (5 moderate, 5 high). Рекомендуется выполнить `npm audit fix` и пересобрать проект; при необходимости — `npm audit fix --force` с последующей проверкой приложения.

---

## Рекомендации для дальнейших замеров

- **Lighthouse:** выполнить вручную в Chrome DevTools (Lighthouse) по развёрнутому сайту или локально (`npx serve dist`), сохранить отчёт в `docs/lighthouse-report.json` или скрин.
- **FCP / TTI:** смотреть в Lighthouse или в панели Performance.
- При деплое на Vercel/Netlify можно включить Lighthouse в preview-сборках для регрессий.
