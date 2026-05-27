/**
 * Utility helpers shared across components.
 *
 * `cn()` — concatena classi con dedup e filtraggio falsy (alternativa minimal a clsx).
 * Lo stile minimal-tech del progetto evita di trascinare clsx/twMerge a meno che
 * non emergano conflitti di utility Tailwind in conflitto.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Clamp numerico — usato dagli hook scroll/counter per limitare i valori.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Linear interpolation — usato dagli effetti scroll-driven.
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}
