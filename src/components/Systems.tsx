import { Check, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const systems = [
  {
    tag: 'System 1',
    flagship: false,
    title: 'Revenue Capture',
    blurb: 'Contact, qualify, and book leads in seconds.',
    features: [
      'AI Voice Agent (24/7)',
      'WhatsApp & SMS Bot',
      'Instant CRM Sync',
      'Smart Lead Scoring',
      'Auto Follow-up Sequences',
    ],
    price: 'From ₹60,000',
  },
  {
    tag: 'System 2',
    flagship: true,
    title: 'Ops Efficiency',
    blurb: 'Eliminate 20–40 hours of manual work weekly.',
    features: [
      'Workflow Process Mapping',
      '3–5 Core Automations',
      'Custom n8n / Make Logic',
      'Reporting Dashboards',
      'Team Training & Handover',
    ],
    price: 'From ₹1,00,000',
  },
  {
    tag: 'System 3',
    flagship: false,
    title: 'Web Capture',
    blurb: 'Turn passive website visitors into qualified leads.',
    features: [
      'High-Converting Landing Pages',
      'Frictionless Lead Capture',
      'Automated WhatsApp Triggers',
      'On-page Chat Concierge',
      'Analytics & A/B Testing',
    ],
    price: 'From ₹50,000',
  },
]

export default function Systems() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  s.flagship
                    ? 'border-primary/60 bg-card shadow-[0_0_50px_hsl(var(--primary)/0.15)]'
                    : 'border-border bg-card/60 hover:border-primary/40'
                }`}
              >
                {s.flagship && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-bold text-primary-foreground">
                    FLAGSHIP
                  </span>
                )}
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.tag}
                </span>
                <h3 className="mb-2 mt-3 font-heading text-2xl font-bold">
                  {s.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">{s.blurb}</p>

                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Key features
                </p>
                <ul className="mb-8 flex-1 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between border-t border-border/60 pt-6">
                  <span className="font-heading text-lg font-bold">
                    {s.price}
                  </span>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      s.flagship
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)]'
                        : 'border border-border hover:border-primary hover:text-primary'
                    }`}
                  >
                    Explore
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
