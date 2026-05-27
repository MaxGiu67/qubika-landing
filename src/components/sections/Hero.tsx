import { ScrollReveal } from '@/components/animations'

/**
 * Hero — sezione di apertura della landing.
 *
 * Stile minimal-tech: eyebrow mono, claim ampio in display sans, sotto-claim
 * di servizio, due CTA con gerarchia chiara (primario = contatti, secondario =
 * approccio interno).
 *
 * Niente animazioni complesse: due ScrollReveal in sequenza con delay leggero.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="border-ink-200/60 dark:border-ink-800 relative border-b"
    >
      <div className="container-tech flex min-h-svh flex-col justify-center gap-10 py-24 md:gap-14 md:py-32">
        <ScrollReveal delay={0} distance={16}>
          <p className="text-mono text-ink-500 dark:text-ink-400 text-xs uppercase tracking-[0.24em]">
            <span aria-hidden="true" className="text-accent-600 dark:text-accent-500">●</span>{' '}
            <span>qubika.studio · roma · est. 2023</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} distance={24}>
          <h1 className="text-ink-900 dark:text-ink-50 max-w-4xl text-balance text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Game design, R&amp;D e tecnologie{' '}
            <span className="text-accent-500">immersive</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.16} distance={24}>
          <p className="text-ink-500 dark:text-ink-300 max-w-2xl text-balance text-lg leading-relaxed md:text-xl">
            Qubika è uno studio italiano che produce giochi multi-piattaforma,
            serious games e soluzioni di realtà aumentata, virtuale e
            intelligenza artificiale. Lavoriamo sul confine tra intrattenimento,
            formazione e ricerca applicata.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24} distance={16}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contatti"
              className="group bg-ink-900 text-ink-50 hover:bg-ink-700 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-ink-200 inline-flex items-center gap-3 rounded-none px-6 py-3.5 text-sm font-medium transition-colors duration-300"
            >
              <span>Iniziamo una conversazione</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#approccio"
              className="text-ink-700 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50 border-ink-300 dark:border-ink-700 hover:border-ink-900 dark:hover:border-ink-50 inline-flex items-center gap-3 border-b px-1 py-2 text-sm font-medium transition-colors duration-300"
            >
              <span>Come lavoriamo</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </ScrollReveal>

        {/* meta-strip in fondo alla hero, mono tech */}
        <ScrollReveal delay={0.4} distance={12}>
          <dl className="text-mono text-ink-400 dark:text-ink-500 mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-3 text-xs uppercase tracking-wider md:grid-cols-4">
            <div>
              <dt className="text-ink-500 dark:text-ink-400">{'// settore'}</dt>
              <dd className="text-ink-700 dark:text-ink-200 mt-1">
                Edizione videogiochi
              </dd>
            </div>
            <div>
              <dt className="text-ink-500 dark:text-ink-400">{'// ateco'}</dt>
              <dd className="text-ink-700 dark:text-ink-200 mt-1">58.21.00</dd>
            </div>
            <div>
              <dt className="text-ink-500 dark:text-ink-400">{'// team'}</dt>
              <dd className="text-ink-700 dark:text-ink-200 mt-1">6 persone</dd>
            </div>
            <div>
              <dt className="text-ink-500 dark:text-ink-400">{'// sede'}</dt>
              <dd className="text-ink-700 dark:text-ink-200 mt-1">Roma, IT</dd>
            </div>
          </dl>
        </ScrollReveal>
      </div>
    </section>
  )
}
