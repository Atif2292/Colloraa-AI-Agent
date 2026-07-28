import Reveal from './Reveal'

// Placeholder percentage-lift stats — swap for real client numbers once
// we have them. Framing kept generic (lift/multiplier, not a specific
// rupee figure) so it doesn't read as a fabricated case study.
const stats = [
  { value: '38%', label: 'More leads converted to booked calls' },
  { value: '3.2x', label: 'Increase in response speed' },
  { value: '40%', label: 'Conversion lift on qualified leads' },
]

export default function ResultsStats() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="rounded-2xl border border-border bg-card/60 p-8 text-center">
                <p className="gradient-text font-heading text-4xl font-bold">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
