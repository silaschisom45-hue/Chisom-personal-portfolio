import { Hero } from '@/components/hero'
import { About, Contact, Projects, Skills } from '@/components/portfolio-sections'
import { SiteHeader } from '@/components/site-header'
import { profile } from '@/lib/portfolio'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <p className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  )
}
