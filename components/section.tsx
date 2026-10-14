export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-3xl scroll-mt-20 border-t border-border px-5 py-12 sm:py-16"
    >
      <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}
