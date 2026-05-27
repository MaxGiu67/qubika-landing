import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  /** Margin to expand/contract the root bounding box. Default '0px 0px -10% 0px' */
  rootMargin?: string
  /** Trigger threshold (0..1). Default 0.15 */
  threshold?: number
  /** If true, l'hook disconnette dopo il primo trigger (one-shot reveal). Default true */
  once?: boolean
}

/**
 * Hook minimal su IntersectionObserver, usato dai wrapper animazione.
 * Per logica più ricca preferire `useInView` di motion/react (già installato).
 */
export function useInView<T extends Element = HTMLDivElement>({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.15,
  once = true,
}: UseInViewOptions = {}): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold, once])

  return [ref, inView]
}
