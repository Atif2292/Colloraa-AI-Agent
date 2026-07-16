import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import WorkflowDiagram from './WorkflowDiagram'
import GlowBlob from './GlowBlob'

const badges = ['Leads', 'Follow-up', 'Bookings', '24/7 Calls', 'WhatsApp']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <GlowBlob className="absolute -top-32 left-[10%] h-[420px] w-[420px]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'radial-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 lg:grid-cols-[2fr_3fr] lg:items-center">
        <div className="animate-hero-in flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-chat-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Built by Colloraa
            </span>
          </div>

          <div className="shimmer-line mb-6 w-40" />

          <h1 className="mb-8 font-heading text-5xl font-bold leading-[1.06] tracking-tight md:text-6xl">
            Every unanswered lead
            <br />
            is <span className="gradient-text">money walking</span> out.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Colloraa designs AI voice agents, automations, and web systems
            that respond, qualify, and follow up the moment a customer shows
            interest — so nothing slips through your team's cracks.
          </p>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link to="/contact" className="btn-gradient">
              Book a Free Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/growth-systems" className="btn-outline">
              <Sparkles className="h-4 w-4 text-primary" />
              See Our Systems
            </Link>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>

          <svg
            width="90"
            height="70"
            viewBox="0 0 90 70"
            fill="none"
            className="hidden text-foreground/70 lg:block"
            aria-hidden="true"
          >
            <path
              d="M4 8C24 4 30 24 50 22C66 20.5 62 4 78 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
            <path
              d="M78 6L84 14M78 6L70 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div
          className="animate-hero-in min-w-0"
          style={{ animationDelay: '200ms' }}
        >
          <div className="animate-float min-w-0 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
            <div className="min-w-[560px]">
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
