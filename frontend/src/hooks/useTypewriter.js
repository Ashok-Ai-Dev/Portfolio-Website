import { useEffect, useMemo, useState } from 'react'

export function useTypewriter({
  words,
  typingMs = 55,
  pauseMs = 900,
  deletingMs = 28,
}) {
  const list = useMemo(() => (Array.isArray(words) ? words : []), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!list.length) return
    const current = list[wordIndex % list.length]
    const isDoneTyping = subIndex === current.length && !deleting
    const isDoneDeleting = subIndex === 0 && deleting

    const delay = deleting
      ? deletingMs
      : isDoneTyping
        ? pauseMs
        : typingMs

    const t = setTimeout(() => {
      if (isDoneTyping) {
        setDeleting(true)
        return
      }

      if (isDoneDeleting) {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % list.length)
        return
      }

      setSubIndex((i) => i + (deleting ? -1 : 1))
    }, delay)

    return () => clearTimeout(t)
  }, [deleting, deletingMs, list, pauseMs, subIndex, typingMs, wordIndex])

  const current = list.length ? list[wordIndex % list.length] : ''
  const text = current.substring(0, subIndex)
  const caret = deleting ? '▍' : '▌'
  return { text, caret }
}

