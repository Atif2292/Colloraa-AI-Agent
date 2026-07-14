const industries = [
  'Real Estate',
  'Clinics & Healthcare',
  'Coaches & Consultants',
  'D2C Brands',
  'Legal Firms',
  'E-commerce',
  'SaaS Startups',
]

export default function Industries() {
  const loop = [...industries, ...industries]

  return (
    <section className="border-y border-border/60 bg-card/30 py-10">
      <p className="section-eyebrow mb-6 text-center">Systems built for</p>
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee">
          {loop.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="whitespace-nowrap rounded-full border border-border/60 bg-background/60 px-6 py-2.5 font-heading text-sm font-semibold text-foreground"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  )
}
