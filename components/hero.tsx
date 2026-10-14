import { MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-5 pt-16 pb-12 sm:pt-24 sm:pb-16">
      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-4 text-primary" aria-hidden="true" />
        {profile.location}
      </p>
      <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {profile.headline}
      </p>
      <p className="mt-3 text-base font-medium text-foreground">
        Explore my interests and projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}>
          View Projects
        </a>
        <a
          href="#contact"
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5')}
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
