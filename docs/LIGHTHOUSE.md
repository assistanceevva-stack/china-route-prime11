# Lighthouse

В среде без Chrome (например, на сервере) Lighthouse не запускается. Ниже — как прогнать его у себя и куда сохранить результат.

---

## Как прогнать у себя

1. **Соберите проект:**  
   `npm run build`

2. **Поднимите локальный сервер раздачи `dist`:**  
   `npx serve dist -l 5132`  
   Откройте в браузере: http://localhost:5132

3. **Запустите Lighthouse в Chrome:**
   - Откройте сайт в **Chrome**
   - DevTools: **F12** → вкладка **Lighthouse**
   - Выберите категории (например, Performance, Accessibility, Best Practices, SEO), режим Mobile или Desktop
   - Нажмите **Analyze page load**

4. **Сохраните результат:**
   - В отчёте Lighthouse нажмите **Save report** (стрелка вниз) → сохраните как `docs/lighthouse-report.html`, или
   - Экспортируйте JSON (если доступно) в `docs/lighthouse-report.json`

**Через CLI (если установлен Chrome):**  
`npx lighthouse http://localhost:5132 --output=json --output-path=docs/lighthouse-report.json`

---

## Отчёт (заполнить после прогона)

После того как прогнали Lighthouse, можно зафиксировать баллы здесь для истории.

| Категория      | Балл (0–100) | Дата       |
|----------------|---------------|------------|
| Performance    | 64            | 2026-02-25 |
| Accessibility  | 96            | 2026-02-25 |
| Best Practices | 100           | 2026-02-25 |
| SEO            | 100           | 2026-02-25 |

**Метрики:** FCP 4242 ms, LCP 8895 ms, TBT 0 ms, CLS 0

Полный отчёт: `docs/lighthouse-report.json` (сгенерирован автоматически через Lighthouse CLI).

---

Так можно фиксировать эффект оптимизаций и отслеживать регрессии после изменений.
