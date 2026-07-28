// Compact vertical rendition of WorkflowDiagram for narrow screens — same
// story (channels -> agent -> routing -> outcomes) as plain stacked cards
// so it fits the viewport width with no horizontal scrolling. Vertical
// page scroll is expected and fine; only sideways scroll was the problem.
import {
  Globe,
  MessageCircle,
  Mail,
  Phone,
  Share2,
  Webhook,
  Bot,
  Brain,
  Database,
  Wrench,
  GitBranch,
  Calendar,
  MessageSquare,
  Sheet,
  ChevronDown,
  TrendingUp,
  Zap,
  Coins,
  Smile,
  BarChart3,
} from 'lucide-react'

const CHANNELS = [
  { label: 'Website', icon: Globe },
  { label: 'WhatsApp', icon: MessageCircle },
  { label: 'Email', icon: Mail },
  { label: 'Calls', icon: Phone },
  { label: 'Social', icon: Share2 },
]

const BRANCHES = [
  { tier: 'High', title: 'Book meeting', subtitle: 'Google Calendar', icon: Calendar },
  { tier: 'Med', title: 'Notify sales', subtitle: 'Slack message', icon: MessageSquare },
  { tier: 'Low', title: 'Log to CRM', subtitle: 'Google Sheets', icon: Sheet },
]

const OUTCOMES = [
  { label: 'More leads', icon: TrendingUp },
  { label: 'Faster response', icon: Zap },
  { label: 'Lower costs', icon: Coins },
  { label: 'Better experience', icon: Smile },
  { label: 'Higher revenue', icon: BarChart3 },
]

// Staggered card-glow + arrow-bounce, same "live system" wave used on the
// desktop diagram's Pulse/FlowDot, just done in plain CSS since there's no
// SVG path to travel along here.
function MotionStyles() {
  return (
    <style>{`
      @keyframes cq-card-pulse {
        0%, 92%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0); }
        4%, 8% { box-shadow: 0 0 0 2px hsl(var(--primary) / 0.4); }
      }
      @keyframes cq-arrow-bounce {
        0%, 85%, 100% { transform: translateY(0); opacity: 0.5; }
        90% { transform: translateY(3px); opacity: 1; }
      }
      .cq-card-pulse { animation: cq-card-pulse 3s ease-in-out infinite; }
      .cq-arrow-bounce { animation: cq-arrow-bounce 3s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .cq-card-pulse, .cq-arrow-bounce { animation: none !important; }
      }
    `}</style>
  )
}

function Arrow({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex justify-center py-1">
      <ChevronDown className="cq-arrow-bounce h-4 w-4 text-primary/60" style={{ animationDelay: `${delay}s` }} />
    </div>
  )
}

function FlowCard({
  icon: Icon,
  title,
  subtitle,
  accent = 'text-primary',
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  accent?: string
  delay?: number
}) {
  return (
    <div
      className="cq-card-pulse flex items-center gap-3 rounded-2xl border border-border/50 bg-black/40 px-4 py-3"
      style={delay !== undefined ? { animationDelay: `${delay}s` } : undefined}
    >
      <Icon className={`h-5 w-5 shrink-0 ${accent}`} />
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-foreground">{title}</div>
        <div className="truncate text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  )
}

export default function WorkflowDiagramMobile() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-card/60 p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(hsl(0 0% 55% / 0.35) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 30%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 30%, black, transparent)',
        }}
      />

      <div className="relative">
        <MotionStyles />
        {/* channels */}
        <div className="mb-1 flex flex-wrap justify-center gap-2">
          {CHANNELS.map((c, i) => (
            <span
              key={c.label}
              className="cq-card-pulse inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-black/40 px-3 py-1.5 text-xs font-medium text-foreground"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <c.icon className="h-3.5 w-3.5 text-primary" />
              {c.label}
            </span>
          ))}
        </div>
        <Arrow delay={0.75} />

        <FlowCard icon={Webhook} title="New lead" subtitle="Webhook trigger" delay={0.9} />
        <Arrow delay={1.1} />

        <FlowCard icon={Bot} title="Power of AI" subtitle="Extracts & scores lead" accent="text-secondary" delay={1.3} />
        <div className="mt-2 mb-1 grid grid-cols-3 gap-2">
          {[
            { label: 'Chat model', icon: Brain },
            { label: 'Memory', icon: Database },
            { label: 'Tool', icon: Wrench },
          ].map((p, i) => (
            <div
              key={p.label}
              className="cq-card-pulse flex flex-col items-center gap-1 rounded-xl border border-border/40 bg-card/70 px-2 py-2 text-center"
              style={{ animationDelay: `${1.55 + i * 0.1}s` }}
            >
              <p.icon className="h-4 w-4 text-secondary" />
              <span className="text-[10px] font-medium text-muted-foreground">{p.label}</span>
            </div>
          ))}
        </div>
        <Arrow delay={1.85} />

        <FlowCard icon={GitBranch} title="Score tier?" subtitle="Switch node" delay={2.0} />
        <Arrow delay={2.15} />

        <div className="space-y-2">
          {BRANCHES.map((b, i) => (
            <div key={b.title} className="flex items-center gap-2">
              <span className="w-9 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {b.tier}
              </span>
              <div className="flex-1">
                <FlowCard icon={b.icon} title={b.title} subtitle={b.subtitle} delay={2.3 + i * 0.15} />
              </div>
            </div>
          ))}
        </div>
        <Arrow delay={2.75} />

        <div
          className="cq-card-pulse rounded-2xl border border-border/50 bg-black/40 p-4"
          style={{ animationDelay: '2.9s' }}
        >
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
            The Result
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
            {OUTCOMES.map((o) => (
              <div key={o.label} className="flex items-center gap-2">
                <o.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs font-medium text-foreground">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
