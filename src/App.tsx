import { Hero, Features, Stats, CTA, Footer } from '@/components/sections'

/**
 * Qubika Landing — composizione delle sezioni.
 *
 * Ordine narrativo:
 *   1. Hero          → chi siamo, claim principale
 *   2. Features      → cosa sappiamo fare (4 capability cards)
 *   3. Stats         → quanto valiamo (numeri reali + principi)
 *   4. CTA           → come contattarci
 *   5. Footer        → dati legali completi
 *
 * Le animazioni sono già incapsulate nei singoli componenti tramite
 * ScrollReveal/StaggerContainer/CountUp.
 */
export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
