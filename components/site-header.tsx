const links = [
  { href: '#about', label: 'About' },
  { href: '#interests', label: 'Interests' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4"
      >
        <a href="#top" className="font-semibold tracking-tight">
          Silas Chisom
        </a>
        <ul className="flex items-center gap-4 text-sm sm:gap-6">
          {links.map((link) => (
            <li key={link.href} className={link.href === '#contact' ? 'hidden sm:block' : ''}>
              <a
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
