import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ANIMATION } from '@/lib/animation-config'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CountUpProps {
  /** Valore finale */
  to: number
  /** Valore iniziale. Default 0 */
  from?: number
  /** Durata in secondi. Default = ANIMATION.duration.slow */
  duration?: number
  /** Numero di decimali. Default 0 */
  decimals?: number
  /** Prefisso (es. "+") */
  prefix?: string
  /** Suffisso (es. "%", "+") */
  suffix?: string
  /** Classi Tailwind */
  className?: string
  /** Separatore migliaia. Default ' ' (narrow no-break) */
  thousandsSeparator?: string
}

/**
 * Counter animato GSAP — incrementa da `from` a `to` quando entra in viewport.
 * Usato per stat blocks tipo "+50 progetti", "6 anni", etc.
 *
 * Reduced-motion-safe: mostra direttamente il valore finale.
 */
export function CountUp({
  to,
  from = 0,
  duration = ANIMATION.duration.slow,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
  thousandsSeparator = ' ',
}: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ once: true })
  const reduced = useReducedMotion()

  const formatValue = (value: number): string => {
    const fixed = value.toFixed(decimals)
    const [int, dec] = fixed.split('.')
    const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
    return dec ? `${withSep}.${dec}` : withSep
  }

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (reduced || !inView) {
      node.textContent = `${prefix}${formatValue(reduced ? to : from)}${suffix}`
      return
    }

    const counter = { value: from }
    const tween = gsap.to(counter, {
      value: to,
      duration,
      ease: ANIMATION.ease.default,
      onUpdate: () => {
        node.textContent = `${prefix}${formatValue(counter.value)}${suffix}`
      },
    })

    return () => {
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, to, from, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(reduced ? to : from)}
      {suffix}
    </span>
  )
}
