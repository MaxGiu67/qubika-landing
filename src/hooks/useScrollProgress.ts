import { useEffect, useState } from 'react'
import { clamp } from '@/lib/utils'

/**
 * Restituisce un valore 0..1 che rappresenta lo scroll progress del documento.
 * Usato per scroll-driven effects (progress bar, parallax leggero).
 *
 * Throttle implicito via rAF — niente listener "scroll" pesante.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    let rafId: number | null = null

    const compute = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const next = docHeight > 0 ? clamp(scrollTop / docHeight, 0, 1) : 0
      setProgress(next)
      rafId = null
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', compute)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return progress
}
