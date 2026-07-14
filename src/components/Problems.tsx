import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const problems = [
  {
    n: '01',
    title: 'The Follow-up Gap',
    body: "A prospect messages at 9pm on a Saturday. Nobody's watching the inbox. By Monday, they've already booked with someone who answered first.",
  },
  {
    n: '02',
    title: 'Hours Lost to Busywork',
    body: 'Copy-pasting leads between spreadsheets, chasing status updates, building the same report every Friday — hours your team could spend closing instead.',
  },
  {
    n: '03',
    title: 'A Site That Just Sits There',
    body: "Visitors show up, skim, and bounce. Without something actively qualifying and capturing them, that traffic is spend you can't get back.",
  },
]

export default function Problems() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Good marketing, good team —
            <br />
            <span className="text-muted-foreground">still leaving money on the table.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Here's what's usually behind it.{' '}
            <Link to="/revenue-systems" className="font-semibold text-primary hover:underline">
              See our fix
            </Link>
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 120}>
              <div className="glow-card h-full p-8">
                <span className="font-mono text-sm font-semibold text-primary/70">
                  {p.n}
                </span>
                <h3 className="mb-3 mt-3 font-heading text-xl font-bold">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
