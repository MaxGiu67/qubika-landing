/**
 * Footer — informazioni legali e ancore di navigazione.
 *
 * Dati ufficiali dalla visura camerale 27/05/2026. NON modificare senza
 * consultare l'AU della società.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-50 dark:bg-ink-950 text-ink-500 dark:text-ink-400">
      <div className="container-tech py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand block */}
          <div className="flex flex-col gap-3">
            <p className="text-ink-900 dark:text-ink-50 text-2xl font-medium tracking-tight">
              Qubika
            </p>
            <p className="text-mono text-ink-400 dark:text-ink-500 text-xs uppercase tracking-[0.2em]">
              {'// roma · est. 2023'}
            </p>
            <p className="text-ink-500 dark:text-ink-400 mt-2 max-w-xs text-sm leading-relaxed">
              Studio di game design, R&amp;D e tecnologie immersive con sede a
              Roma.
            </p>
          </div>

          {/* Nav block */}
          <nav aria-label="Navigazione" className="flex flex-col gap-3">
            <p className="text-mono text-ink-400 dark:text-ink-500 mb-2 text-xs uppercase tracking-wider">
              {'// navigazione'}
            </p>
            <a
              href="#approccio"
              className="hover:text-ink-900 dark:hover:text-ink-50 text-sm transition-colors"
            >
              Capacità
            </a>
            <a
              href="#studio"
              className="hover:text-ink-900 dark:hover:text-ink-50 text-sm transition-colors"
            >
              Studio
            </a>
            <a
              href="#contatti"
              className="hover:text-ink-900 dark:hover:text-ink-50 text-sm transition-colors"
            >
              Contatti
            </a>
          </nav>

          {/* Legal block — dati visura */}
          <address className="not-italic">
            <p className="text-mono text-ink-400 dark:text-ink-500 mb-2 text-xs uppercase tracking-wider">
              {'// dati legali'}
            </p>
            <dl className="text-ink-500 dark:text-ink-400 flex flex-col gap-1.5 text-sm">
              <div>
                <dt className="sr-only">Ragione sociale</dt>
                <dd className="text-ink-700 dark:text-ink-200">
                  Qubika S.R.L.
                </dd>
              </div>
              <div>
                <dt className="sr-only">Sede legale</dt>
                <dd>Via Antonio Gramsci 20, 00197 Roma (RM)</dd>
              </div>
              <div className="text-mono text-xs">
                <dt className="sr-only">P.IVA / C.F.</dt>
                <dd>P.IVA · CF 16966051001</dd>
              </div>
              <div className="text-mono text-xs">
                <dt className="sr-only">REA</dt>
                <dd>REA RM-1688035</dd>
              </div>
              <div className="text-mono text-xs">
                <dt className="sr-only">Capitale sociale</dt>
                <dd>Cap. soc. €&nbsp;10.000 i.v.</dd>
              </div>
            </dl>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="border-ink-200 dark:border-ink-800 text-mono text-ink-400 dark:text-ink-600 mt-16 flex flex-col gap-2 border-t pt-6 text-xs uppercase tracking-wider md:flex-row md:items-center md:justify-between">
          <p>© {year} Qubika S.R.L. — Tutti i diritti riservati</p>
          <p aria-hidden="true">
            {'/* '}built with React + Vite + Tailwind + GSAP{' */'}
          </p>
        </div>
      </div>
    </footer>
  )
}
