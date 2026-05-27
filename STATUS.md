# qubika-landing — Status Dashboard

**Ultimo aggiornamento**: 2026-05-27
**Stato globale**: 🟢 **Live in produzione, QA verde**

## Link

| | |
|--|--|
| **Production** | https://qubika-landing-production.up.railway.app |
| Repo | https://github.com/MaxGiu67/qubika-landing |
| Railway project | [`qubika-landing`](https://railway.com/project/3a2393c7-1cdd-42b3-88ce-77b144dfc152) |

## Sezioni della landing

| # | Sezione | File | Stato |
|---|---------|------|-------|
| 1 | **Hero** | `src/components/sections/Hero.tsx` | ✅ Done |
| 2 | **Features** (4 capability cards) | `src/components/sections/Features.tsx` | ✅ Done |
| 3 | **Stats + Principi** | `src/components/sections/Stats.tsx` | ✅ Done |
| 4 | **CTA Contatti** | `src/components/sections/CTA.tsx` | ✅ Done |
| 5 | **Footer** (dati legali) | `src/components/sections/Footer.tsx` | ✅ Done |

5 / 5 sezioni live.

## Score Lighthouse (deploy live)

```
Performance     ████████████████████░ 99/100
Accessibility   █████████████████████ 100/100
Best Practices  █████████████████████ 100/100
SEO             █████████████████████ 100/100
```

Core Web Vitals: LCP 1.5s · CLS 0 · TBT 0ms · TTI 1.5s — tutti verdi.

## Checklist QA

- [x] Build (`pnpm build`)
- [x] Type-check (`tsc -b`)
- [x] Lint (`pnpm lint`, 0 warning)
- [x] Lighthouse Performance ≥ 90
- [x] Lighthouse Accessibility ≥ 90
- [x] Lighthouse Best Practices ≥ 90
- [x] Lighthouse SEO ≥ 90
- [x] Core Web Vitals nel verde
- [x] Responsive 375 / 768 / 1440 (screenshot in `qa-screenshots/`)
- [x] Zero console error / warning
- [x] `prefers-reduced-motion` rispettato
- [x] WCAG color contrast (AA)
- [x] `robots.txt` + `sitemap.xml`
- [ ] Open Graph tags (per condivisione social) — _low priority_
- [ ] Analytics (GA4/Plausible) — _da decidere col cliente_
- [ ] Form contatti reale (oggi solo `mailto:`) — _opzionale_

## Animazioni (audit codice)

- [x] `ScrollReveal` rispetta `prefers-reduced-motion`
- [x] `StaggerContainer` rispetta `prefers-reduced-motion`
- [x] `CountUp` rispetta `prefers-reduced-motion` + cleanup GSAP `tween.kill()`
- [x] Durate / ease centralizzati in `src/lib/animation-config.ts`
- [x] Animazioni usano solo `transform` + `opacity` (no layout shift)
- [x] Ease tecnici coerenti (`power2.out`, `[0.16, 1, 0.3, 1]`)

## Storia delle iterazioni

| Data | Cambio | Commit |
|------|--------|--------|
| 2026-05-27 | Scaffold Vite + React 19 + Tailwind v4 + GSAP + Motion | `5024771` |
| 2026-05-27 | 5 sezioni implementate, build verde, deploy Railway | `5024771` |
| 2026-05-27 | Fix deploy: rimosso `railway.json`, pin pnpm 10.20 | `b72f3ac` |
| 2026-05-27 | Doc operativa: live URL + Railway notes | `fd6dd39` |
| 2026-05-27 | Fix A11y (color contrast) + SEO (robots, sitemap) | `c398341` |
| 2026-05-27 | Polish accent-500 in light mode → accent-600 | `4e740f0` |

## Bundle

| Asset | gzip |
|-------|------|
| `index.html` | 0.4 kB |
| CSS | 5.0 kB |
| JS | **131.3 kB** |

131 kB gz JS — accettabile per landing animata (GSAP + Motion sono il 70% del peso).
Margine di ottimizzazione futuro: lazy-import GSAP solo per CountUp.

## Prossimi step suggeriti

1. **Cliente** — far validare copy e dati a Massimiliano Giurelli (AU Qubika)
2. **Open Graph** — aggiungere `og:image` + tag per condivisione su LinkedIn / X
3. **Analytics** — decidere se aggiungere GA4 o Plausible (D10 era 0 in `bs-assess`, ma potrebbe cambiare opinione)
4. **LinkedIn link reale** — sostituire il placeholder `/company/qubika` con la pagina vera quando esiste
5. **Custom domain** — quando Qubika comprerà `qubika.studio` (o simile), collegarlo via Railway

## Comandi rapidi

```bash
pnpm dev                                # http://localhost:5173
pnpm build                              # produzione
railway logs --service qubika-landing   # logs runtime
railway up --service qubika-landing     # nuovo deploy
```
