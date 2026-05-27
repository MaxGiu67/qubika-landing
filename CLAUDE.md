# Qubika Landing — Istruzioni per Claude Code

Landing page vetrina per **Qubika S.R.L.**, studio italiano di game development e R&D
tech (gaming multi-piattaforma, serious games, VR/AR, AI, IoT, GIS).

> Profilo cliente completo + scope: vedi memorie utente
> `qubika-profilo.md` e `qubika-landing-scope.md`.

## Link operativi

- **Live (dominio ufficiale)**: https://www.qubikasrl.it
- **URL Railway (fallback)**: https://qubika-landing-production.up.railway.app
- **Repo**: https://github.com/MaxGiu67/qubika-landing (pubblico)
- **Railway project**: `qubika-landing` (id `3a2393c7-1cdd-42b3-88ce-77b144dfc152`)
- **Railway service**: `qubika-landing` (id `362f771c-fe1c-4a04-b4ad-4b4210b47403`)
- **Region**: europe-west4 (Amsterdam)
- **Cert HTTPS**: Let's Encrypt (CN=www.qubikasrl.it), rinnovo automatico Railway
- **Dominio registrato su**: Register.it (scadenza 27/05/2027)
- **DNS configurati**:
  - `CNAME www.qubikasrl.it → ffs89yns.up.railway.app`
  - `TXT _railway-verify.www.qubikasrl.it → railway-verify=53951389bde71f222c551d2098fad70ce3c6429770e8b112014929f83344ad3e`
  - PEC `qubikasrl@pec.it` (MX/SPF intatti — NON toccare)

## Stack

- **React 19** + **TypeScript 6** (template Vite ufficiale)
- **Vite 8** con `@vitejs/plugin-react` e `@tailwindcss/vite`
- **Tailwind CSS v4** (import via `@import "tailwindcss"` in `src/styles/globals.css`; configurazione `@theme` inline, niente `tailwind.config.js`)
- **GSAP 3.15** + **@gsap/react** per timeline complesse e counter
- **Motion 12** (ex Framer Motion) per reveal su scroll, variants, stagger
- **Prettier 3** (singleQuote, no semi, printWidth 100)
- Package manager: **pnpm 10**
- Path alias: `@/*` → `./src/*`

## Struttura

```
src/
├── components/
│   ├── sections/      # Hero, Features, Testimonials, CTA, Footer (generati via /lp-hero, /lp-section)
│   ├── ui/            # Button, Badge, Card (shadcn-style)
│   └── animations/    # ScrollReveal, StaggerContainer, CountUp (+ index.ts)
├── hooks/             # useReducedMotion, useInView, useScrollProgress
├── lib/               # animation-config.ts, utils.ts (cn, clamp, lerp)
├── styles/            # globals.css (Tailwind + @theme tokens)
├── App.tsx
└── main.tsx
```

## Comandi

```bash
pnpm dev        # dev server Vite
pnpm build      # type-check + build produzione
pnpm preview    # preview build
pnpm lint       # ESLint (config flat)
```

## Stile visivo target: **minimal-tech**

- Palette mono-cromatica (scala `ink-50` → `ink-900`, neri e grigi)
- Singolo accent **electric cyan** (`accent-500: #06b6d4`) — richiama R&D / lab tech
- Tipografia: **Inter** sans + **JetBrains Mono** per dettagli tecnici
- Animazioni discrete: niente bounce, niente overshoot. Solo fade + slide piccoli (16–24 px) con ease tecniche (`power2.out`, `[0.16, 1, 0.3, 1]`)
- Layout generoso, dark mode automatica via `prefers-color-scheme`

## Regole critiche (NON negoziabili)

1. **`prefers-reduced-motion`**: ogni componente animato DEVE rispettare la preferenza utente. Usare `useReducedMotion()` (già implementato). Mai assumere che l'utente voglia animazioni.
2. **Durate/ease centralizzati**: leggere SEMPRE da `src/lib/animation-config.ts`. NIENTE durate hard-codate nei componenti.
3. **Mobile-first**: ogni sezione testata sotto `md` (< 768 px) prima del desktop. La landing rappresenta uno studio che fa app mobile — il mobile non può essere afterthought.
4. **Performance**:
   - immagini in formato moderno (`.webp` o `.avif`), `width`/`height` espliciti per evitare layout shift
   - lazy-loading per asset sotto la fold (`loading="lazy"`)
   - GSAP timeline killate in cleanup (`return () => tween.kill()`)
   - niente librerie pesanti aggiuntive senza valutazione (no lodash, no moment, no clsx finché non serve davvero)
5. **Niente lock-in di copy hard-coded inglese**: tutti i testi devono essere in italiano (lingua principale di Qubika). Eventuale i18n inglese si aggiunge dopo, non ora.
6. **Niente file marketing-fluff**: la landing è vetrina, non lead-magnet. Niente form lead-gen, niente popup, niente exit-intent, niente "subscribe to our newsletter" finché Qubika non chiede esplicitamente.
7. **Dati ufficiali**: usare PEC `qubikasrl@pec.it`, sede `Roma, Via Antonio Gramsci 20` SOLO se servono contatti formali. Per contatti commerciali generici aspettare indicazione dall'utente.

## Workflow di sviluppo

Una sezione = una conversazione. Slash command attesi:

```
/lp-hero [stile]         # genera la hero section
/lp-section features     # genera Features
/lp-section testimonials # genera Testimonials
/lp-section cta          # genera CTA finale
/lp-section footer       # genera Footer
/lp-animate <component>  # aggiunge animazioni custom GSAP a un componente
/lp-qa                   # verifica qualità (Lighthouse, a11y, perf)
/lp-deploy               # deploy a Railway (target scelto)
```

## Hook QA configurati

Vedi `.claude/settings.json`: Prettier auto-format e ESLint auto-fix dopo ogni Edit/Write,
e type-check `tsc --noEmit` allo Stop di ogni risposta.

## Compattazione context

Se la conversazione diventa lunga e serve compact:

- Tenere in priorità: CLAUDE.md, file della sezione in corso, animation-config.ts, globals.css
- Eliminabile dal contesto: file di animation/* dopo averli capiti, hook/*, README esterni

## Deploy target

**Railway** (default MUCC) — già attivo e live.

Pattern usato: **Nixpacks Caddy-Vite preset** (zero-config). Railway rileva
automaticamente Vite, builda `dist/` e serve i file via Caddy. Nessun runtime
Node.js in produzione. Quando servirà un form contatti, valutare se passare a
Express in monorepo come `iridia-landing` o restare statici con un endpoint
serverless tipo Resend/Formspree.

Comandi utili:

```bash
railway up --service qubika-landing            # nuovo deploy dal locale
railway status --service qubika-landing        # stato del servizio
railway logs --build --service qubika-landing  # logs di build
railway logs --service qubika-landing          # logs runtime
railway domain --service qubika-landing        # gestione dominio
```

Pin: `packageManager: "pnpm@10.20.0"` in `package.json` per allineare Railway
alla versione pnpm locale ed evitare problemi con `--frozen-lockfile`.
