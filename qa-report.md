# QA Report — qubika-landing

**Data**: 2026-05-27
**Target audit**: https://qubika-landing-production.up.railway.app
**Strumenti**: Lighthouse 12, Playwright (Chromium headless), `tsc -b`, ESLint flat config

---

## Risultati globali

| Area | Score | Status |
|------|-------|--------|
| Build (`pnpm build`) | Pass | ✅ OK |
| TypeScript (`tsc -b`) | Pass | ✅ OK |
| ESLint (`pnpm lint`) | 0 warning | ✅ OK |
| Lighthouse Performance | **99/100** | ✅ OK |
| Lighthouse Accessibility | **100/100** | ✅ OK |
| Lighthouse Best Practices | **100/100** | ✅ OK |
| Lighthouse SEO | **100/100** | ✅ OK |
| Responsive 375 / 768 / 1440 | 3 / 3 viewport, no overflow | ✅ OK |
| Console errors / warnings | 0 / 0 | ✅ OK |

## Core Web Vitals

| Metrica | Valore | Target | Status |
|---------|--------|--------|--------|
| Largest Contentful Paint (LCP) | **1.5 s** | < 2.5 s | ✅ |
| Cumulative Layout Shift (CLS) | **0** | < 0.1 | ✅ |
| Total Blocking Time (TBT) | **0 ms** | < 200 ms | ✅ |
| First Contentful Paint (FCP) | 1.5 s | < 1.8 s | ✅ |
| Speed Index | 1.5–2.7 s | < 3.4 s | ✅ |
| Time to Interactive (TTI) | 1.5 s | < 3.8 s | ✅ |

Edge region misurato: `europe-west4-drams3a` (Amsterdam).

## Bundle in produzione

| Asset | Raw | gzip |
|-------|-----|------|
| `index.html` | 0.73 kB | 0.42 kB |
| `index-*.css` | 20.57 kB | 5.04 kB |
| `index-*.js` | 401.26 kB | **131.33 kB** |

131 kB di JS gzipped è atteso: GSAP + Motion sono librerie corpose. Margini di
miglioramento futuri: lazy-import di GSAP solo per CountUp se davvero serve, o
sostituzione di CountUp con un'animazione puramente Motion.

## Iterazione QA (3 cicli Lighthouse)

| Run | Perf | A11y | BP | SEO | Fix applicato dopo il run |
|-----|------|------|-----|-----|---------------------------|
| #1 (baseline) | 99 | 95 | 100 | 91 | 8 contrast fix + `robots.txt` + `sitemap.xml` |
| #2 (post fix iniziali) | 100 | 95 | 100 | 100 | Polish accent-500 → accent-600 in light mode |
| #3 (finale) | **99** | **100** | **100** | **100** | — |

## Accessibility checks manuali

| Check | Esito |
|-------|-------|
| `<html lang="it">` | ✅ |
| Heading hierarchy (1 × h1, 3 × h2, 7 × h3) | ✅ |
| Meta description presente | ✅ |
| Immagini senza alt | 0 / 0 (la landing non usa `<img>`) |
| Bottoni / link senza label | 0 |
| Focus visible su CTA | ✅ (browser default + transition styles) |
| Color contrast WCAG AA | ✅ tutti i casi flaggati corretti |
| `prefers-reduced-motion` | ✅ rispettato a livello CSS globale + in tutti i wrapper Motion (ScrollReveal, StaggerContainer, CountUp) |

## Responsive

Screenshot full-page salvati in `qa-screenshots/`:

- `mobile-375.png` (375 × 812) — viewport iPhone 12/13/14
- `tablet-768.png` (768 × 1024) — viewport iPad
- `desktop-1440.png` (1440 × 900) — viewport laptop standard

Nessun overflow orizzontale su nessuno dei 3 viewport (`scrollWidth ===
innerWidth`).

## SEO

| Check | Esito |
|-------|-------|
| `<title>` univoco e descrittivo | ✅ "Qubika — Game design, R&D e tecnologie immersive" |
| Meta description | ✅ 145 caratteri, focus su 4 capability |
| `lang="it"` sull'`<html>` | ✅ |
| `robots.txt` valido | ✅ allow + link al sitemap |
| `sitemap.xml` valido | ✅ 1 URL (landing è single-page) |
| Open Graph tags | ⚠️ non presenti — da aggiungere se la landing verrà condivisa su LinkedIn/X |

## Fix applicati durante il QA

### Color contrast (commit `c398341`)

- Eyebrow Hero: `text-ink-400` → `text-ink-500` (chiaro su bg-ink-50)
- Dot eyebrow Hero: rimasto `text-accent-500` ma marcato `aria-hidden="true"`
- Meta-strip Hero: 4 × `text-ink-300` → `text-ink-500`
- Labels Stats su bg scuro: 4 × `text-ink-500` → `text-ink-300`

### Accent-500 in light mode (commit `4e740f0`)

- Hero claim "immersive": `text-accent-500` → `text-accent-600 dark:text-accent-500`
- CTA "Parliamone." + "Scrivici →" + "Seguici →": idem
- Features bullet `before:` accent: idem

### SEO (commit `c398341`)

- Aggiunto `public/robots.txt` (allow + sitemap)
- Aggiunto `public/sitemap.xml` minimale con la home

## Issue residui (non blocking)

| Issue | Severity | Note |
|-------|----------|------|
| Unused JavaScript ~71 KiB | Low | Tree-shaking limitato su GSAP/Motion. Futuro: lazy-load GSAP per CountUp. |
| Cache lifetimes su asset Caddy | Low | Headers cache default Railway/Caddy. Configurabile via `Caddyfile` custom se necessario. |
| Open Graph tags assenti | Low | Aggiungere `og:title`, `og:description`, `og:image` quando si condividerà su social. |

Nessun issue blocking, la landing è pronta per il pubblico.

## Comandi per riprodurre

```bash
cd qubika-landing
pnpm build && pnpm lint
pnpm dlx lighthouse https://qubika-landing-production.up.railway.app \
  --output=json --output=html --output-path=./lighthouse-report \
  --chrome-flags="--headless --no-sandbox" --quiet \
  --only-categories=performance,accessibility,best-practices,seo
```

Report HTML completo: `lighthouse-report.report.html`.
