import { motion, useInView, type Variants } from 'motion/react'
import { Children, isValidElement, useRef, type ReactNode } from 'react'
import { ANIMATION } from '@/lib/animation-config'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface StaggerContainerProps {
  children: ReactNode
  /** Stagger tra i children in secondi. Default 0.1 */
  stagger?: number
  /** Delay iniziale del primo child */
  delayChildren?: number
  /** Distanza in px */
  distance?: number
  /** Classi Tailwind sul container */
  className?: string
  /** as element — default 'div' */
  as?: 'div' | 'section' | 'ul' | 'ol'
}

const containerVariants = (
  stagger: number,
  delayChildren: number,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
})

const itemVariants = (distance: number): Variants => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.motion,
    },
  },
})

/**
 * Container che applica stagger ai children diretti.
 * Pattern minimal-tech: ogni child sale di pochi px con leggero fade.
 *
 * Usa motion.div per ogni child wrappato, NON modifica gli stili dei child:
 * passa solo opacity/transform via variants.
 */
export function StaggerContainer({
  children,
  stagger = ANIMATION.stagger.normal,
  delayChildren = 0,
  distance = ANIMATION.distance.sm,
  className,
  as = 'div',
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduced = useReducedMotion()

  const ContainerTag = motion[as] as typeof motion.div
  const item = itemVariants(distance)

  if (reduced) {
    const StaticTag = as as 'div'
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <ContainerTag
      ref={ref}
      className={className}
      variants={containerVariants(stagger, delayChildren)}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      {Children.map(children, (child, index) =>
        isValidElement(child) ? (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </ContainerTag>
  )
}
