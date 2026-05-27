import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { ANIMATION } from '@/lib/animation-config'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ScrollRevealProps {
  children: ReactNode
  /** Distanza iniziale in px (slide-from-bottom). Default 24 */
  distance?: number
  /** Delay in secondi prima dell'animazione */
  delay?: number
  /** Override durata in secondi */
  duration?: number
  /** Classi Tailwind aggiuntive sul wrapper */
  className?: string
  /** Se true, l'animazione triggera solo la prima volta. Default true */
  once?: boolean
  /** as element — default 'div' */
  as?: 'div' | 'section' | 'article' | 'span'
}

/**
 * Wrapper "reveal su scroll" basato su Motion useInView.
 * Animation discreta (fade + small slide-up) coerente con stile minimal-tech.
 *
 * Reduced-motion-safe: se l'utente ha la preferenza attiva, mostra il contenuto
 * statico senza animare.
 */
export function ScrollReveal({
  children,
  distance = ANIMATION.distance.md,
  delay = 0,
  duration = ANIMATION.duration.normal,
  className,
  once = true,
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '0px 0px -10% 0px' })
  const reduced = useReducedMotion()

  const MotionTag = motion[as] as typeof motion.div

  if (reduced) {
    const StaticTag = as as 'div'
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration, delay, ease: ANIMATION.ease.motion }}
    >
      {children}
    </MotionTag>
  )
}
