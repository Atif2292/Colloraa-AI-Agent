import { ArrowUpRight, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const systems = [
  {
    tag: 'System 1',
    title: 'Inbound AI Agent',
    nickname: 'The Answer',
    blurb: 'Every call picked up in 2 rings — day, night, weekends, doesn’t matter.',
    how: 'Trained on your actual call flow. Answers questions, qualifies the caller, books them straight into your calendar — sounds like a real front desk, not a menu of "press 1 for..."',
    stat: 'Avg. response time: under 3 seconds',
  },
  {
    tag: 'System 2',
    title: 'Outbound AI Agent',
    nickname: 'The Follow-Up',
    blurb: 'Old leads, missed calls, form fills that went cold — this calls them back before you even think to.',
    how: 'Triggers automatically on any unresponded lead, calls or texts within minutes, and keeps trying on a smart schedule instead of one-and-done.',
    stat: 'Re-engages leads you’d already written off',
  },
  {
    tag: 'System 3',
    title: 'WhatsApp Chatbot',
    nickname: 'The Second Line',
    blurb: 'Where your leads actually are. Most Indian customers won’t call — they’ll WhatsApp. This one never leaves them on read.',
    how: 'Answers FAQs, sends pricing, shares availability, and hands off to a human the moment it’s needed — instant, not "we’ll get back to you."',
    stat: 'Runs 24/7, replies in seconds',
  },
]

export default function Systems() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-8 transition-all duration-300 hover:border-primary/40">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.tag}
                </span>
                <h3 className="mb-1 mt-3 font-heading text-2xl font-bold">
                  {s.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-primary">
                  {s.nickname}
                </p>
                <p className="mb-5 text-sm text-foreground/90">{s.blurb}</p>

                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  How it works
                </p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.how}
                </p>

                <p className="mb-6 text-sm font-semibold text-secondary">
                  → {s.stat}
                </p>

                <div className="flex gap-3 border-t border-border/60 pt-6">
                  {/* TODO: replace with the real call-recording link once it's shared */}
                  <a
                    href="#"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch it work
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)]"
                  >
                    See Pricing
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
