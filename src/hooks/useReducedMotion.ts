import { useEffect, useState } from 'react'

/**
 * Restituisce true se l'utente ha la preferenza "prefers-reduced-motion: reduce".
 * Usato per disattivare animazioni non essenziali in tutti i componenti.
 *
 * SSR-safe: durante il primo render restituisce false, poi si allinea al media query.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  return reduced
}
