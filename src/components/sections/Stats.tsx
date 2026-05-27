import { ScrollReveal, CountUp } from '@/components/animations'

/**
 * Stats — sostituisce la "Testimonials" classica del template lp-section.
 *
 * Decisione consapevole: senza clienti pubblici da citare, niente fake
 * testimonial. Mostriamo invece numeri reali da visura camerale + 3 principi
 * che orientano il lavoro dello studio.
 *
 * I numeri sono animati via CountUp (GSAP) al primo ingresso in viewport.
 */

const stats = [
  { value: 2023, label: 'Anno di costituzione', suffix: '' },
  { value: 6, label: 'Persone nel team', suffix: '' },
  { value: 8, label: 'Tecnologie di riferimento', suffix: '+' },
  { value: 4, label: 'Aree di prodotto', suffix: '' },
] as const

const principles = [
  {
    n: '01',
    title: 'R&D-first.',
    body: 'Ogni progetto è un’occasione per investire in tecnologia nuova. La ricerca non è un reparto: è il metodo.',
  },
  {
    n: '02',
    title: 'Multi-piattaforma per default.',
    body: 'Mobile, web, console, visori e ambienti cloud. Scegliamo la piattaforma giusta per il problema, non viceversa.',
  },
  {
    n: '03',
    title: 'Ludico e formativo non si escludono.',
    body: 'I migliori serious games sono giochi veri. Le migliori esperienze di intrattenimento insegnano qualcosa.',
  },
] as const

export function Stats() {
  return (
    <section
      id="studio"
      className="bg-ink-900 dark:bg-ink-950 text-ink-100 border-b border-ink-800"
    >
      <div className="container-tech py-24 md:py-32">
        <ScrollReveal delay={0} distance={16}>
          <p className="text-mono text-ink-500 mb-6 text-xs uppercase tracking-[0.24em]">
            {'// 02 — studio'}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} distance={24}>
          <h2 className="text-ink-50 mb-16 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Uno studio piccolo che ragiona come un laboratorio.
          </h2>
        </ScrollReveal>

        {/* Stats grid con CountUp */}
        <dl className="border-ink-800 mb-20 grid grid-cols-2 gap-px overflow-hidden border md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-ink-900 outline-ink-800 flex flex-col gap-3 p-6 outline outline-1 md:p-8"
            >
              <dt className="text-mono text-ink-500 text-xs uppercase tracking-wider">
                {s.label}
              </dt>
              <dd className="text-ink-50 text-4xl font-medium tracking-tight md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} duration={1.2} />
              </dd>
            </div>
          ))}
        </dl>

        {/* Principi */}
        <ScrollReveal delay={0} distance={16}>
          <p className="text-mono text-ink-500 mb-6 text-xs uppercase tracking-[0.24em]">
            {'// principi operativi'}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {principles.map((p, i) => (
            <ScrollReveal
              key={p.n}
              delay={0.1 + i * 0.08}
              distance={20}
              className="border-ink-800 border-t pt-6"
            >
              <p className="text-mono text-accent-500 mb-3 text-xs">{p.n}</p>
              <h3 className="text-ink-50 mb-3 text-2xl font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="text-ink-400 leading-relaxed">{p.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
