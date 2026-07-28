import { Search, Blocks, Rocket, LineChart, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const steps = [
  {
    icon: Search,
    title: 'Audit',
    body: 'We map your funnel end-to-end and find exactly where leads and hours are leaking.',
  },
  {
    icon: Blocks,
    title: 'Build',
    body: 'We design and ship the voice agents, bots, and automations for your specific systems.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    body: 'We connect everything to your CRM and calendars, then run it live with your team.',
  },
  {
    icon: LineChart,
    title: 'Optimize',
    body: 'We monitor performance weekly and tune the systems as your volume grows.',
  },
]

export default function Process() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow mb-3">How it works</p>
              <h2 className="font-heading text-3xl font-bold">
                Experience a live system in 7 days.
              </h2>
            </div>
            <Link
              to="/growth-systems"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
            >
              View Our Systems
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="glow-card relative h-full p-7">
                <span className="absolute right-6 top-6 font-heading text-4xl font-bold text-border">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <s.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
