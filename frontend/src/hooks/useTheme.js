import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'ak.theme'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme)

  const setTheme = useMemo(
    () => (next) => {
      setThemeState(next)
      localStorage.setItem(STORAGE_KEY, next)
    },
    [],
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return { theme, setTheme }
}

