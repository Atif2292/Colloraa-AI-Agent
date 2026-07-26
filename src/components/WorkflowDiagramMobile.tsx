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

function Arrow() {
  return (
    <div className="flex justify-center py-1">
      <ChevronDown className="h-4 w-4 text-primary/60" />
    </div>
  )
}

function FlowCard({
  icon: Icon,
  title,
  subtitle,
  accent = 'text-primary',
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  accent?: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-black/40 px-4 py-3">
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
        {/* channels */}
        <div className="mb-1 flex flex-wrap justify-center gap-2">
          {CHANNELS.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-black/40 px-3 py-1.5 text-xs font-medium text-foreground"
            >
              <c.icon className="h-3.5 w-3.5 text-primary" />
              {c.label}
            </span>
          ))}
        </div>
        <Arrow />

        <FlowCard icon={Webhook} title="New lead" subtitle="Webhook trigger" />
        <Arrow />

        <FlowCard icon={Bot} title="Power of AI" subtitle="Extracts & scores lead" accent="text-secondary" />
        <div className="mt-2 mb-1 grid grid-cols-3 gap-2">
          {[
            { label: 'Chat model', icon: Brain },
            { label: 'Memory', icon: Database },
            { label: 'Tool', icon: Wrench },
          ].map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-1 rounded-xl border border-border/40 bg-card/70 px-2 py-2 text-center"
            >
              <p.icon className="h-4 w-4 text-secondary" />
              <span className="text-[10px] font-medium text-muted-foreground">{p.label}</span>
            </div>
          ))}
        </div>
        <Arrow />

        <FlowCard icon={GitBranch} title="Score tier?" subtitle="Switch node" />
        <Arrow />

        <div className="space-y-2">
          {BRANCHES.map((b) => (
            <div key={b.title} className="flex items-center gap-2">
              <span className="w-9 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {b.tier}
              </span>
              <div className="flex-1">
                <FlowCard icon={b.icon} title={b.title} subtitle={b.subtitle} />
              </div>
            </div>
          ))}
        </div>
        <Arrow />

        <div className="rounded-2xl border border-border/50 bg-black/40 p-4">
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
