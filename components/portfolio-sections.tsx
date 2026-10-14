import { ArrowUpRight, Mail } from 'lucide-react'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile, projects } from '@/lib/portfolio'

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
        <p>
          {"I'm"} {profile.name}, a Computer Science graduate currently studying Leadership and
          Project Management in IT at NAIT.
        </p>
        <p>
          {"I'm"} based in {profile.location}. My interests include technology, project
          planning, cybersecurity, and web development.
        </p>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="flex flex-wrap gap-2">
        {profile.interests.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col rounded-xl border border-dashed border-border p-5"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'sm' }), 'mt-4 self-start')}
              >
                View project
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl leading-relaxed text-muted-foreground">
        Interested in connecting? Reach out using the link below.
      </p>
      <div className="mt-6">
        {profile.contactUrl ? (
          <a
            href={profile.contactUrl}
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}
          >
            <Mail data-icon="inline-start" aria-hidden="true" />
            Get in Touch
          </a>
        ) : (
          <span
            aria-disabled="true"
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 cursor-not-allowed px-5 opacity-60')}
          >
            <Mail data-icon="inline-start" aria-hidden="true" />
            Contact link coming soon
          </span>
        )}
      </div>
    </Section>
  )
}
