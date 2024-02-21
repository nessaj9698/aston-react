import { useRef, useCallback } from "react"

export const useDebounce = (
  callback: () => void,
  delay: number,
): (() => void) => {
  const timer = useRef<NodeJS.Timeout | null>(null)

  const debouncedCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      callback()
    }, delay)
  }, [callback, delay])

  return debouncedCallback
}
