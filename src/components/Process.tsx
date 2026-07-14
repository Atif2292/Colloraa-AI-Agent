import { Search, Blocks, Rocket, LineChart } from 'lucide-react'
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
