/**
 * Animation config — single source of truth per durate, ease e stagger.
 *
 * Stile target: minimal-tech (animazioni discrete, niente bounce).
 * Tutti i componenti animazione (ScrollReveal, StaggerContainer, CountUp,
 * GSAP timelines) leggono i valori da qui. Non hard-codare durate altrove.
 */

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    intro: 1.0,
  },
  ease: {
    /** GSAP string ease, default per la maggior parte delle animazioni */
    default: 'power2.out',
    /** GSAP string ease, per entrate più morbide (hero/intro) */
    smooth: 'power3.out',
    /** Motion.dev cubic-bezier — equivalente di --ease-smooth in globals.css */
    motion: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    /** Motion.dev cubic-bezier "tecnico" — discreto, no overshoot */
    tech: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
  scroll: {
    /** GSAP ScrollTrigger start / end positions */
    start: 'top 80%',
    end: 'top 20%',
  },
  /** Distanze in px per slide-in animations */
  distance: {
    sm: 16,
    md: 24,
    lg: 40,
  },
} as const

export type AnimationDuration = keyof typeof ANIMATION.duration
export type AnimationEase = keyof typeof ANIMATION.ease
export type AnimationStagger = keyof typeof ANIMATION.stagger
