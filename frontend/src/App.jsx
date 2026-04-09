import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { profile } from './data/profile.js'
import { useTheme } from './hooks/useTheme.js'
import { Navbar } from './components/Navbar.jsx'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { Hero } from './sections/Hero.jsx'
import { About } from './sections/About.jsx'
import { Skills } from './sections/Skills.jsx'
import { Projects } from './sections/Projects.jsx'
import { Experience } from './sections/Experience.jsx'
import { Certifications } from './sections/Certifications.jsx'
import { Contact } from './sections/Contact.jsx'
import { Footer } from './sections/Footer.jsx'

function App() {
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 650)
    return () => clearTimeout(t)
  }, [])

  const title = useMemo(
    () => `${profile.name} | Full Stack Developer (MERN)`,
    [],
  )

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={profile.seoDescription} />
        <meta name="author" content={profile.name} />
        <link rel="canonical" href={profile.canonicalUrl} />
      </Helmet>

      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-cyan-500/25 blur-3xl dark:from-violet-500/20 dark:via-fuchsia-500/15 dark:to-cyan-500/15" />
        <div className="absolute bottom-0 right-[-180px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-400/15 via-sky-500/15 to-violet-500/10 blur-3xl dark:from-emerald-400/10 dark:via-sky-500/10 dark:to-violet-500/10" />
      </div>

      <Navbar theme={theme} setTheme={setTheme} />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="flex min-h-[70vh] items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <div className="h-3 w-3 animate-pulse rounded-full bg-violet-500" />
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Loading portfolio…
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
