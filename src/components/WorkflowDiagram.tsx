// Extended n8n-style diagram: lead channels feed a trigger, an AI agent
// qualifies + scores, a switch routes to three actions, and everything
// converges into a business-outcomes card. Same dot-grid canvas, glowing
// borderless cards, and animated wire-pulse technique throughout.
// Sizing bumped up a notch for legibility — wider channel cards in
// particular, since "WhatsApp" was overflowing its box before.

const cardFill = 'hsl(0 0% 9%)'
const portFill = 'hsl(140 12% 15%)'
const creamBorder = 'hsl(44 42% 90%)'
const warmWhite = 'hsl(44 30% 95%)'
const wireBlue = 'hsl(58 91% 53%)'
const wirePurple = 'hsl(35 92% 55%)'
const wireCyan = 'hsl(0 0% 85%)'
const textDim = 'hsl(0 0% 65%)'

function NodeCard({
  x,
  y,
  w,
  h,
  icon,
  title,
  subtitle,
  compact = false,
}: {
  x: number
  y: number
  w: number
  h: number
  color: string
  icon: React.ReactNode
  title: string
  subtitle?: string
  compact?: boolean
}) {
  const midY = y + h / 2
  return (
    <g filter="url(#card-shadow)">
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={compact ? 12 : 16}
        fill={cardFill}
        stroke={creamBorder}
        strokeOpacity="0.32"
        strokeWidth="1.1"
      />
      <g transform={`translate(${x + 14} ${midY - (subtitle ? 13 : 10)})`}>{icon}</g>
      <text x={x + 46} y={subtitle ? midY - 4 : midY + 5} fontSize={compact ? 13 : 16} fontWeight="600" fill={warmWhite}>
        {title}
      </text>
      {subtitle && (
        <text x={x + 46} y={midY + 15} fontSize="12" fill={textDim}>
          {subtitle}
        </text>
      )}
    </g>
  )
}

function PortCard({ x, y, w, h, icon, label }: { x: number; y: number; w: number; h: number; icon: React.ReactNode; label: string }) {
  return (
    <g filter="url(#card-shadow)">
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill={portFill}
        stroke={creamBorder}
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <g transform={`translate(${x + w / 2 - 10} ${y + 9})`}>{icon}</g>
      <text x={x + w / 2} y={y + h - 9} fontSize="10.5" fontWeight="600" fill={textDim} textAnchor="middle">
        {label}
      </text>
    </g>
  )
}

// A wire with an animated pulse travelling along it — the same moving-dot
// technique used across the site's other diagrams.
function Wire({ d, color, dashed = false, delay = 0, marker = true }: { d: string; color: string; dashed?: boolean; delay?: number; marker?: boolean }) {
  const markerId = color === wireBlue ? 'b' : color === wirePurple ? 'p' : 'c'
  return (
    <>
      <path
        d={d}
        stroke={color}
        strokeOpacity={dashed ? 0.35 : 0.55}
        strokeWidth={dashed ? 1.4 : 1.8}
        strokeDasharray={dashed ? '4 4' : undefined}
        fill="none"
        markerEnd={marker ? `url(#arrow-${markerId})` : undefined}
      />
      {!dashed && (
        <circle r="3.4" fill={color}>
          <animateMotion dur="3s" begin={`${delay}s`} repeatCount="indefinite" path={d} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      )}
    </>
  )
}

// -- simplified monoline icon glyphs (stroke-based, inherit currentColor) --
const ip = { width: 26, height: 26, viewBox: '0 0 22 22', fill: 'none' as const, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const ipSmall = { width: 22, height: 22, viewBox: '0 0 22 22', fill: 'none' as const, strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

function WebhookIcon({ color }: { color: string }) {
  return (
    <svg {...ip} stroke={color}>
      <circle cx="6" cy="16" r="3" /><circle cx="17" cy="6" r="3" /><circle cx="16" cy="17" r="3" />
      <path d="M8 15 L13 7" /><path d="M9 17 H13" />
    </svg>
  )
}
function BotIcon({ color }: { color: string }) {
  return (
    <svg {...ip} stroke={color}>
      <rect x="4" y="7" width="14" height="11" rx="3" /><path d="M11 7 V3" />
      <circle cx="11" cy="2" r="1.2" fill={color} stroke="none" />
      <circle cx="8.5" cy="12.5" r="1.3" fill={color} stroke="none" />
      <circle cx="13.5" cy="12.5" r="1.3" fill={color} stroke="none" />
      <path d="M2 11 V15 M20 11 V15" />
    </svg>
  )
}
function BranchIcon({ color }: { color: string }) {
  return (
    <svg {...ip} stroke={color}>
      <circle cx="6" cy="5" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="17" cy="11" r="2" />
      <path d="M6 7 V15" /><path d="M6 9 C6 11, 15 9, 15 11" />
    </svg>
  )
}
function CalendarIcon({ color }: { color: string }) {
  return (
    <svg {...ip} stroke={color}>
      <rect x="3" y="5" width="16" height="14" rx="2.5" /><path d="M3 9.5 H19" />
      <path d="M7 3 V6.5 M15 3 V6.5" />
      <circle cx="14.5" cy="14" r="2.6" fill="none" /><path d="M14.5 12.8 V14 L15.5 14.7" />
    </svg>
  )
}
function MessageIcon({ color }: { color: string }) {
  return (
    <svg {...ip} stroke={color}>
      <path d="M3 5.5 A2.5 2.5 0 0 1 5.5 3 H16.5 A2.5 2.5 0 0 1 19 5.5 V12 A2.5 2.5 0 0 1 16.5 14.5 H8 L4 18 V14.5 H5.5 A2.5 2.5 0 0 1 3 12 Z" />
    </svg>
  )
}
function SheetIcon({ color }: { color: string }) {
  return (
    <svg {...ip} stroke={color}>
      <rect x="4" y="3" width="14" height="16" rx="2" /><path d="M4 9 H18 M4 14 H18 M9.5 9 V19 M13.5 9 V19" />
    </svg>
  )
}
function BrainIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <path d="M6.5 3.5 C4 3.5 3 5.5 3.5 7 C2 7.7 2 10 3.5 10.8 C3 12.3 4.5 14 6.3 13.5 C6.6 15 9.4 15 9.5 13.4 M11.5 3.5 C14 3.5 15 5.5 14.5 7 C16 7.7 16 10 14.5 10.8 C15 12.3 13.5 14 11.7 13.5 C11.4 15 9 15 9 13.4 V4.5" />
    </svg>
  )
}
function DatabaseIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <ellipse cx="9" cy="4.5" rx="6" ry="2.2" />
      <path d="M3 4.5 V13.5 C3 14.7 5.7 15.7 9 15.7 C12.3 15.7 15 14.7 15 13.5 V4.5" />
      <path d="M3 9 C3 10.2 5.7 11.2 9 11.2 C12.3 11.2 15 10.2 15 9" />
    </svg>
  )
}
function WrenchIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <path d="M11.5 3.2 A3.6 3.6 0 1 0 14.8 8.5 L16.5 10.2 M14.8 8.5 L9.2 14.1 A1.4 1.4 0 1 0 11.2 16.1 L16.8 10.5" />
    </svg>
  )
}
// -- channel intake icons --
function GlobeIcon({ color }: { color: string }) {
  return (
    <svg {...ipSmall} stroke={color}>
      <circle cx="11" cy="11" r="8" /><path d="M3 11 H19 M11 3 C7 7 7 15 11 19 C15 15 15 7 11 3" />
    </svg>
  )
}
function WhatsAppIcon({ color }: { color: string }) {
  return (
    <svg {...ipSmall} stroke={color}>
      <path d="M4 19 L5.2 15 A7.5 7.5 0 1 1 8.4 17.6 Z" />
      <path d="M8 9.5 C8 11.5 9.5 13 11.5 13" strokeWidth="1.8" />
    </svg>
  )
}
function MailIcon({ color }: { color: string }) {
  return (
    <svg {...ipSmall} stroke={color}>
      <rect x="3" y="5" width="16" height="12" rx="2" /><path d="M4 6.5 L11 12 L18 6.5" />
    </svg>
  )
}
function PhoneIcon({ color }: { color: string }) {
  return (
    <svg {...ipSmall} stroke={color}>
      <path d="M5 3.5 H8.5 L10 7.5 L8 9 C8.8 11.2 10.8 13.2 13 14 L14.5 12 L18.5 13.5 V17 C18.5 18.1 17.6 19 16.5 19 C9.6 18.5 4.5 13.4 4 6.5 C4 5.4 4.9 3.5 5 3.5Z" />
    </svg>
  )
}
function ShareIcon({ color }: { color: string }) {
  return (
    <svg {...ipSmall} stroke={color}>
      <circle cx="6" cy="11" r="2.4" /><circle cx="16" cy="5" r="2.4" /><circle cx="16" cy="17" r="2.4" />
      <path d="M8.2 9.8 L13.8 6.2 M8.2 12.2 L13.8 15.8" />
    </svg>
  )
}
// -- outcome icons --
function TrendUpIcon({ color }: { color: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 18 18" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <path d="M2 14 L7 8.5 L10.5 11.5 L16 4.5" /><path d="M11.5 4.5 H16 V9" />
    </svg>
  )
}
function BoltIcon({ color }: { color: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 18 18" fill={color} strokeWidth="0" stroke="none">
      <path d="M10 1 L3 11 H8.5 L7.5 17 L15 7 H9.5 Z" />
    </svg>
  )
}
function CoinIcon({ color }: { color: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 18 18" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <circle cx="9" cy="9" r="7" /><path d="M9 5.5 V12.5 M11 6.8 C 11 5.8 10 5.2 9 5.2 C 7.8 5.2 7 5.9 7 6.8 C 7 9 11 8 11 10.2 C 11 11.1 10.2 11.8 9 11.8 C 8 11.8 7 11.2 7 10.2" />
    </svg>
  )
}
function SmileIcon({ color }: { color: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 18 18" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <circle cx="9" cy="9" r="7" /><path d="M6 10.5 C 6.8 12 11.2 12 12 10.5" />
      <circle cx="6.7" cy="7.2" r="0.9" fill={color} stroke="none" /><circle cx="11.3" cy="7.2" r="0.9" fill={color} stroke="none" />
    </svg>
  )
}
function ChartIcon({ color }: { color: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 18 18" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <path d="M3 15 V9 M9 15 V4 M15 15 V11" />
    </svg>
  )
}

const CHANNELS: { label: string; icon: (c: string) => React.ReactNode; y: number }[] = [
  { label: 'Website', icon: (c) => <GlobeIcon color={c} />, y: 20 },
  { label: 'WhatsApp', icon: (c) => <WhatsAppIcon color={c} />, y: 98 },
  { label: 'Email', icon: (c) => <MailIcon color={c} />, y: 176 },
  { label: 'Calls', icon: (c) => <PhoneIcon color={c} />, y: 254 },
  { label: 'Social', icon: (c) => <ShareIcon color={c} />, y: 332 },
]

const OUTCOMES: { label: string; icon: (c: string) => React.ReactNode }[] = [
  { label: 'More leads', icon: (c) => <TrendUpIcon color={c} /> },
  { label: 'Faster response', icon: (c) => <BoltIcon color={c} /> },
  { label: 'Lower costs', icon: (c) => <CoinIcon color={c} /> },
  { label: 'Better experience', icon: (c) => <SmileIcon color={c} /> },
  { label: 'Higher revenue', icon: (c) => <ChartIcon color={c} /> },
]

export default function WorkflowDiagram() {
  const trigTargets = [214, 225, 236, 247, 258]

  return (
    <div className="relative overflow-hidden rounded-3xl bg-card/60 p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(hsl(0 0% 55% / 0.35) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 45% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 45% 40%, black, transparent)',
        }}
      />
      {/* Two rows instead of one long strip — the same content is far more
          legible when it can use the hero's spare vertical space instead of
          being squeezed to fit a fixed column width. */}
      <svg
        viewBox="0 0 680 760"
        className="relative h-auto w-full"
        role="img"
        aria-label="AI lead automation diagram: channels feed an AI agent that scores and routes leads, ending in business outcomes"
        fontFamily="Inter, ui-sans-serif, system-ui"
      >
        <defs>
          <filter id="card-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
          </filter>
          {[
            ['b', wireBlue],
            ['p', wirePurple],
            ['c', wireCyan],
          ].map(([key, color]) => (
            <marker key={key} id={`arrow-${key}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          ))}
        </defs>

        {/* ---- row 1: channels -> trigger -> agent ---- */}
        {CHANNELS.map((c, i) => (
          <Wire
            key={c.label}
            d={`M135 ${c.y + 24} C 155 ${c.y + 24}, 165 ${trigTargets[i]}, 180 ${trigTargets[i]}`}
            color={wireBlue}
            delay={i * 0.4}
          />
        ))}
        <Wire d="M330 240 L375 240" color={wireBlue} delay={0.3} />
        <Wire dashed d="M406 288 L406 304" color={wirePurple} />
        <Wire dashed d="M492 288 L492 304" color={wirePurple} />
        <Wire dashed d="M578 288 L578 304" color={wirePurple} />

        {/* ---- connector: row 1 (agent) -> row 2 (decision), routed through the clear
             band between the ports row and the branches/outcomes row below ---- */}
        <Wire d="M610 240 L650 240 L650 392 L85 392 L85 546" color={wirePurple} delay={1.2} />

        {/* ---- row 2: decision -> branches (shared stub, then split) ---- */}
        <path d="M160 580 L190 580" stroke={wireCyan} strokeOpacity="0.55" strokeWidth="1.8" fill="none" />
        <path d="M190 580 L190 454 L200 454" fill="none" stroke={wireCyan} strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#arrow-c)" />
        <path d="M190 580 L200 580" fill="none" stroke={wireCyan} strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#arrow-c)" />
        <path d="M190 580 L190 706 L200 706" fill="none" stroke={wireCyan} strokeOpacity="0.55" strokeWidth="1.8" markerEnd="url(#arrow-c)" />

        {/* branches -> merge -> outcomes */}
        <path d="M375 454 L400 454 L400 580" fill="none" stroke={wireBlue} strokeOpacity="0.45" strokeWidth="1.8" />
        <path d="M375 580 L400 580" fill="none" stroke={wireBlue} strokeOpacity="0.45" strokeWidth="1.8" />
        <path d="M375 706 L400 706 L400 580" fill="none" stroke={wireBlue} strokeOpacity="0.45" strokeWidth="1.8" />
        <Wire d="M400 580 L420 580" color={wireBlue} delay={1.8} />

        {/* branch tags */}
        <text x="168" y="436" fontSize="11" fontWeight="600" fill={wireCyan}>high</text>
        <text x="165" y="562" fontSize="11" fontWeight="600" fill={wireCyan}>med</text>
        <text x="170" y="688" fontSize="11" fontWeight="600" fill={wireCyan}>low</text>

        {/* ---- channel nodes ---- */}
        {CHANNELS.map((c) => (
          <NodeCard key={c.label} x={10} y={c.y} w={125} h={48} color={wireBlue} icon={c.icon(wireBlue)} title={c.label} compact />
        ))}

        <NodeCard x={180} y={206} w={150} h={68} color={wireBlue} icon={<WebhookIcon color={wireBlue} />} title="New lead" subtitle="Webhook trigger" />

        <NodeCard x={375} y={192} w={235} h={96} color={wirePurple} icon={<BotIcon color={wirePurple} />} title="Power of AI" subtitle="Extracts &amp; scores lead" />
        <PortCard x={368} y={304} w={76} h={60} icon={<BrainIcon color={wirePurple} />} label="Chat model" />
        <PortCard x={454} y={304} w={76} h={60} icon={<DatabaseIcon color={wirePurple} />} label="Memory" />
        <PortCard x={540} y={304} w={76} h={60} icon={<WrenchIcon color={wirePurple} />} label="Tool" />

        {/* ---- row 2: decision, branches, outcomes ---- */}
        <NodeCard x={10} y={546} w={150} h={68} color={wireCyan} icon={<BranchIcon color={wireCyan} />} title="Score tier?" subtitle="Switch node" />

        <NodeCard x={200} y={420} w={175} h={68} color={wireBlue} icon={<CalendarIcon color={wireBlue} />} title="Book meeting" subtitle="Google Calendar" />
        <NodeCard x={200} y={546} w={175} h={68} color={wireCyan} icon={<MessageIcon color={wireCyan} />} title="Notify sales" subtitle="Slack message" />
        <NodeCard x={200} y={672} w={175} h={68} color={wirePurple} icon={<SheetIcon color={wirePurple} />} title="Log to CRM" subtitle="Google Sheets" />

        {/* ---- outcomes ---- */}
        <g filter="url(#card-shadow)">
          <rect
            x="420"
            y="420"
            width="220"
            height="320"
            rx="18"
            fill="hsl(0 0% 8%)"
            stroke={creamBorder}
            strokeOpacity="0.32"
            strokeWidth="1.1"
          />
          <text x="530" y="450" fontSize="12" fontWeight="700" fill={textDim} textAnchor="middle" letterSpacing="1.2">
            THE RESULT
          </text>
          {OUTCOMES.map((o, i) => (
            <g key={o.label} transform={`translate(440 ${474 + i * 46})`}>
              {o.icon(wireBlue)}
              <text x="30" y="15" fontSize="13.5" fontWeight="600" fill={warmWhite}>
                {o.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
