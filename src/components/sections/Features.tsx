import { ScrollReveal, StaggerContainer } from '@/components/animations'

/**
 * Features — 4 capability cards che mappano le aree d'attività di Qubika
 * estratte dall'oggetto sociale di visura camerale:
 *   1. Game Development multi-piattaforma
 *   2. Serious Games & Formazione
 *   3. Realtà immersiva (VR/AR/MR)
 *   4. AI applicata & R&D
 *
 * Card minimal-tech: numero mono, titolo, descrizione, bullet di tecniche.
 * Niente icone illustrative (coerente con stile mono-cromatico).
 */

const capabilities = [
  {
    n: '01',
    title: 'Game Development',
    description:
      'Giochi multi-piattaforma per PC, mobile, console e visori. Dal concept allo shipping, controlliamo l’intera pipeline produttiva.',
    items: [
      'Unity & Unreal Engine',
      'Cross-platform (iOS, Android, Web, Steam)',
      'Live ops e publishing',
    ],
  },
  {
    n: '02',
    title: 'Serious Games',
    description:
      'Esperienze formative gamificate per aziende, scuole e PA. Apprendimento misurabile attraverso meccaniche ludiche.',
    items: [
      'Training simulazioni',
      'Edutainment scuole e musei',
      'Analytics di apprendimento',
    ],
  },
  {
    n: '03',
    title: 'Realtà immersiva',
    description:
      'Soluzioni di realtà virtuale, aumentata e mista per contesti culturali, commerciali e industriali.',
    items: [
      'VR su Quest, Vive, Pico',
      'AR mobile e WebXR',
      'Twin digitali e visualizzazione 3D',
    ],
  },
  {
    n: '04',
    title: 'AI & R&D',
    description:
      'Applicazione di intelligenza artificiale, IoT e sistemi previsionali a problemi del mondo reale. Prototipi e prodotti.',
    items: [
      'Machine learning applicato',
      'IoT, sensoristica e GIS',
      'Sistemi previsionali e modellizzazione',
    ],
  },
] as const

export function Features() {
  return (
    <section
      id="approccio"
      className="border-ink-200/60 dark:border-ink-800 border-b"
    >
      <div className="container-tech py-24 md:py-32">
        <ScrollReveal delay={0} distance={16}>
          <p className="text-mono text-ink-400 dark:text-ink-500 mb-6 text-xs uppercase tracking-[0.24em]">
            {'// 01 — capacità'}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} distance={24}>
          <h2 className="text-ink-900 dark:text-ink-50 mb-6 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Quattro aree, una sola pipeline di prodotto.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16} distance={20}>
          <p className="text-ink-500 dark:text-ink-300 mb-16 max-w-2xl text-balance text-base leading-relaxed md:text-lg">
            Non separiamo entertainment, formazione e ricerca applicata: per noi
            sono lo stesso lavoro letto da punti di vista diversi. Le tecnologie
            si parlano, i team anche.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 gap-px md:grid-cols-2"
          stagger={0.08}
        >
          {capabilities.map((c) => (
            <article
              key={c.n}
              className="bg-ink-50 dark:bg-ink-900 outline-ink-200/60 dark:outline-ink-800 group relative flex flex-col gap-5 p-8 outline outline-1 md:p-10"
            >
              <header className="flex items-baseline justify-between">
                <span className="text-mono text-ink-300 dark:text-ink-700 text-xs">
                  {c.n}
                </span>
                <span
                  aria-hidden="true"
                  className="text-ink-300 dark:text-ink-700 group-hover:text-accent-500 text-xl transition-colors duration-300"
                >
                  →
                </span>
              </header>

              <h3 className="text-ink-900 dark:text-ink-50 text-2xl font-medium tracking-tight md:text-3xl">
                {c.title}
              </h3>

              <p className="text-ink-500 dark:text-ink-300 leading-relaxed">
                {c.description}
              </p>

              <ul className="text-mono text-ink-400 dark:text-ink-500 mt-auto flex flex-col gap-1.5 pt-4 text-xs uppercase tracking-wider">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="before:text-accent-500 before:mr-2 before:content-['+']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
