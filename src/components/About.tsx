import { Target, Search, LineChart } from 'lucide-react'
import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

const principles = [
  {
    icon: Target,
    title: 'Results over tools',
    body: "We're not judged on how many workflows we ship — only on what changes in your numbers because of them.",
  },
  {
    icon: Search,
    title: 'No build before audit',
    body: "We map how leads actually move through your business before we touch a single automation.",
  },
  {
    icon: LineChart,
    title: 'Numbers, not vibes',
    body: 'Hours saved, leads recovered, revenue booked — every system ships with a way to measure it.',
  },
]

export default function About() {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <GlowBlob className="absolute -top-32 left-1/2 h-[460px] w-[460px] -translate-x-1/2" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-6xl">
            We learn the business
            <br />
            <span className="text-muted-foreground">before we touch the tech.</span>
          </h2>
          <div className="shimmer-line mx-auto mt-6 w-40" />
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-3xl px-6 text-center">
        <Reveal>
          <p className="section-eyebrow mb-6">The Colloraa story</p>
          <p className="mb-5 leading-relaxed text-muted-foreground">
            Colloraa started from a simple pattern we kept seeing: businesses
            weren't short on effort, they were short on systems. Leads sat
            unanswered, teams re-did the same manual steps every week, and
            nobody had a clean way to see what it was actually costing them.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            So we built the other half — the AI agents, automations, and
            capture systems that quietly close those gaps, so your team's
            time goes toward the work only people can do.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 text-sm italic text-muted-foreground">
            Have a specific problem in mind? Reach out directly at{' '}
            <a
              href="mailto:mohdatif2291@gmail.com"
              className="font-semibold not-italic text-primary hover:underline"
            >
              mohdatif2291@gmail.com
            </a>
            .
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">How we operate</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="glow-card h-full p-8 text-center">
                <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <p.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold">
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
