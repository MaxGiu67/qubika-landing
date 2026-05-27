import { ScrollReveal } from '@/components/animations'

/**
 * CTA — invito al contatto.
 *
 * Decisione: nessun form lead-gen (vetrina, scelta utente in bs-assess).
 * Mostriamo invece i canali ufficiali della società (PEC da visura) e un
 * placeholder LinkedIn — sostituibile quando Qubika avrà una pagina pubblica.
 */
export function CTA() {
  return (
    <section
      id="contatti"
      className="border-ink-200/60 dark:border-ink-800 border-b"
    >
      <div className="container-tech py-24 md:py-32">
        <ScrollReveal delay={0} distance={16}>
          <p className="text-mono text-ink-400 dark:text-ink-500 mb-6 text-xs uppercase tracking-[0.24em]">
            {'// 03 — contatti'}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} distance={24}>
          <h2 className="text-ink-900 dark:text-ink-50 mb-8 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Hai un’idea di gioco, un prototipo R&amp;D, un progetto
            immersivo?{' '}
            <span className="text-accent-600 dark:text-accent-500">Parliamone.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16} distance={20}>
          <p className="text-ink-500 dark:text-ink-300 mb-16 max-w-2xl text-balance text-lg leading-relaxed md:text-xl">
            Scrivici una mail. Ti risponde una persona reale entro 48 ore con
            domande, non con preventivi automatici.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24} distance={16}>
          <ul className="border-ink-200/60 dark:border-ink-800 grid grid-cols-1 gap-px overflow-hidden border md:grid-cols-2">
            <li className="bg-ink-50 dark:bg-ink-900 outline-ink-200/60 dark:outline-ink-800 outline outline-1">
              <a
                href="mailto:qubikasrl@pec.it"
                className="group flex flex-col gap-3 p-8 transition-colors md:p-10"
              >
                <p className="text-mono text-ink-400 dark:text-ink-500 text-xs uppercase tracking-wider">
                  {'// posta certificata (PEC)'}
                </p>
                <p className="text-ink-900 dark:text-ink-50 text-2xl font-medium tracking-tight md:text-3xl">
                  qubikasrl@pec.it
                </p>
                <p className="text-ink-500 dark:text-ink-300 text-sm">
                  Per richieste formali, gare, fornitori istituzionali.
                </p>
                <span
                  aria-hidden="true"
                  className="text-accent-600 dark:text-accent-500 mt-2 text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  Scrivici →
                </span>
              </a>
            </li>

            <li className="bg-ink-50 dark:bg-ink-900 outline-ink-200/60 dark:outline-ink-800 outline outline-1">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col gap-3 p-8 transition-colors md:p-10"
              >
                <p className="text-mono text-ink-400 dark:text-ink-500 text-xs uppercase tracking-wider">
                  {'// linkedin'}
                </p>
                <p className="text-ink-900 dark:text-ink-50 text-2xl font-medium tracking-tight md:text-3xl">
                  /company/qubika
                </p>
                <p className="text-ink-500 dark:text-ink-300 text-sm">
                  Aggiornamenti, opportunità di lavoro, conversazioni aperte.
                </p>
                <span
                  aria-hidden="true"
                  className="text-accent-600 dark:text-accent-500 mt-2 text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  Seguici →
                </span>
              </a>
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
