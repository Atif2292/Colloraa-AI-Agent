// Circular "radar" hero diagram — replaces the flowchart layout with a
// live-scanning metaphor: an outer ring of channels the sweep detects,
// a middle ring of AI capabilities continuously orbiting the hub, and a
// chain of beads relaying detected leads down to one of three outcomes.
// Built in the site's own dark/yellow palette (not the light/orange
// reference mockup) so it matches the rest of the brand.
import { useEffect, useState } from 'react'
import { Globe, MessageCircle, Mail, Phone, Share2, Brain, Database, Wrench, Bot, Calendar, MessageSquare, Sheet } from 'lucide-react'

const ink = 'hsl(0 0% 6%)'
const ring = 'hsl(44 42% 90% / 0.22)'
const yellow = 'hsl(58 91% 53%)'
const amber = 'hsl(35 92% 55%)'
const warmWhite = 'hsl(44 30% 95%)'
const dim = 'hsl(0 0% 65%)'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

const CX = 260
const CY = 260
const OUTER_R = 218
const MID_R = 142
const HUB_R = 68

// Angles avoid the ~0deg-100deg quadrant (bottom-right), which is where
// the outcome chain sits — a uniform 72deg spacing can't dodge that
// without landing a node on top of the outcome cards.
const CHANNELS = [
  { label: 'Email', icon: Mail, angle: -150 },
  { label: 'Website', icon: Globe, angle: -90 },
  { label: 'WhatsApp', icon: MessageCircle, angle: -30 },
  { label: 'Calls', icon: Phone, angle: 90 },
  { label: 'Social', icon: Share2, angle: 150 },
]

const CAPABILITIES = [
  { label: 'Model', icon: Brain, angle: -54 },
  { label: 'Memory', icon: Database, angle: 90 },
  { label: 'Tool', icon: Wrench, angle: 210 },
]

const OUTCOMES = [
  { tier: 'High', title: 'Book meeting', subtitle: 'Google Calendar', icon: Calendar, y: 470 },
  { tier: 'Med', title: 'Notify sales', subtitle: 'Slack message', icon: MessageSquare, y: 560 },
  { tier: 'Low', title: 'Log to CRM', subtitle: 'Google Sheets', icon: Sheet, y: 650 },
]

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export default function WorkflowDiagramRadar() {
  const reduced = usePrefersReducedMotion()
  const sweepDur = 6

  return (
    <div className="relative overflow-hidden rounded-3xl bg-card/60 p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(hsl(0 0% 55% / 0.35) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 45% 35%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 45% 35%, black, transparent)',
        }}
      />
      <svg
        viewBox="0 0 640 700"
        className="relative h-auto w-full"
        role="img"
        aria-label="Radar diagram: a continuous sweep detects leads across every channel, AI capabilities orbit the hub, and detected leads route down to booking, sales notification, or CRM logging"
        fontFamily="Inter, ui-sans-serif, system-ui"
      >
        <style>{`
          @keyframes cq-blip { 0%, 88%, 100% { opacity: 0.35; transform: scale(1); } 4%, 8% { opacity: 1; transform: scale(1.12); } }
          .cq-blip { animation: cq-blip ${sweepDur}s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          @media (prefers-reduced-motion: reduce) {
            .cq-sweep, .cq-orbit-dot, .cq-blip, .cq-bead { animation: none !important; opacity: 0 !important; }
          }
        `}</style>
        <defs>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={yellow} stopOpacity="0.25" />
            <stop offset="100%" stopColor={yellow} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* outer + middle ring guides */}
        <circle cx={CX} cy={CY} r={OUTER_R} fill="none" stroke={ring} strokeWidth="1" strokeDasharray="2 6" />
        <circle cx={CX} cy={CY} r={MID_R} fill="none" stroke={ring} strokeWidth="1" strokeDasharray="2 6" />

        {/* radar sweep — a fan of thin lines fading from bright (leading
            edge) to transparent (trailing edge), rotating as one group.
            A filled wedge with a linear gradient doesn't work here: the
            gradient axis doesn't rotate with the angle, so it reads as a
            flat solid triangle instead of a sweep. */}
        {!reduced && (
          <g className="cq-sweep" style={{ transformOrigin: `${CX}px ${CY}px` }}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${CX} ${CY}`}
              to={`360 ${CX} ${CY}`}
              dur={`${sweepDur}s`}
              repeatCount="indefinite"
            />
            {Array.from({ length: 14 }).map((_, i) => {
              const a = -90 - (i / 13) * 42
              const p = polar(CX, CY, OUTER_R, a)
              return (
                <line
                  key={i}
                  x1={CX}
                  y1={CY}
                  x2={p.x}
                  y2={p.y}
                  stroke={amber}
                  strokeOpacity={0.5 * (1 - i / 13)}
                  strokeWidth="2.5"
                />
              )
            })}
          </g>
        )}

        {/* hub */}
        <circle cx={CX} cy={CY} r={HUB_R + 34} fill="url(#hub-glow)" />
        <circle cx={CX} cy={CY} r={HUB_R} fill={ink} stroke={yellow} strokeWidth="1.6" strokeOpacity="0.8" />
        <g transform={`translate(${CX} ${CY - 34})`}>
          <Bot color={yellow} />
        </g>
        <text x={CX} y={CY + 8} fontSize="15" fontWeight="700" fill={warmWhite} textAnchor="middle">
          AI Agent
        </text>
        <text x={CX} y={CY + 26} fontSize="10.5" fill={dim} textAnchor="middle">
          Extracts &amp; scores lead
        </text>

        {/* capability ring — orbiting highlight dot + fixed labels */}
        {!reduced && (
          <circle r="3.4" fill={amber}>
            <animateMotion
              dur="9s"
              repeatCount="indefinite"
              path={`M ${polar(CX, CY, MID_R, 0).x} ${polar(CX, CY, MID_R, 0).y} A ${MID_R} ${MID_R} 0 1 1 ${polar(CX, CY, MID_R, -0.01).x} ${polar(CX, CY, MID_R, -0.01).y} Z`}
            />
          </circle>
        )}
        {CAPABILITIES.map((c) => {
          const p = polar(CX, CY, MID_R, c.angle)
          return (
            <g key={c.label} transform={`translate(${p.x} ${p.y})`}>
              <circle r="20" fill={ink} stroke={amber} strokeOpacity="0.5" strokeWidth="1.2" />
              <g transform="translate(-9 -9)">
                <c.icon size={18} color={amber} />
              </g>
              <text y="34" fontSize="10.5" fontWeight="600" fill={dim} textAnchor="middle">
                {c.label}
              </text>
            </g>
          )
        })}

        {/* channel ring */}
        {CHANNELS.map((c) => {
          const p = polar(CX, CY, OUTER_R, c.angle)
          const delay = ((((c.angle + 90) % 360) + 360) % 360) / 360 * sweepDur
          return (
            <g key={c.label} transform={`translate(${p.x} ${p.y})`}>
              <circle r="28" className="cq-blip" fill={ink} stroke={yellow} strokeWidth="1.4" style={{ animationDelay: `${delay}s` }} />
              <g transform="translate(-11 -11)">
                <c.icon size={22} color={yellow} />
              </g>
              <text y="44" fontSize="11.5" fontWeight="600" fill={warmWhite} textAnchor="middle">
                {c.label}
              </text>
            </g>
          )
        })}

        {/* chain: hub -> route -> outcomes */}
        <path d={`M ${CX} ${CY + HUB_R} L ${CX} 420 L 380 420 L 380 470`} fill="none" stroke={ring} strokeWidth="1.6" />
        <path d="M 380 420 L 380 560" fill="none" stroke={ring} strokeWidth="1.6" />
        <path d="M 380 420 L 380 650" fill="none" stroke={ring} strokeWidth="1.6" />
        {OUTCOMES.map((o) => (
          <path key={o.title} d={`M 380 ${o.y + 24} L 420 ${o.y + 24}`} fill="none" stroke={ring} strokeWidth="1.6" />
        ))}

        {!reduced &&
          OUTCOMES.map((o, i) => (
            <circle key={o.title} r="3.4" fill={yellow} className="cq-bead">
              <animateMotion
                dur="9s"
                begin={`${i * 3}s`}
                repeatCount="indefinite"
                path={`M ${CX} ${CY + HUB_R} L ${CX} 420 L 380 420 L 420 ${o.y + 24}`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0;0;0;0;0;0"
                keyTimes="0;0.05;0.28;0.34;0.4;0.6;0.8;0.95;1"
                dur="9s"
                begin={`${i * 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

        {OUTCOMES.map((o) => (
          <g key={o.title}>
            <rect x="420" y={o.y} width="200" height="68" rx="16" fill={ink} stroke={ring} strokeWidth="1.1" />
            <g transform={`translate(438 ${o.y + 24})`}>
              <o.icon size={22} color={yellow} />
            </g>
            <text x="472" y={o.y + 30} fontSize="14" fontWeight="600" fill={warmWhite}>
              {o.title}
            </text>
            <text x="472" y={o.y + 47} fontSize="11.5" fill={dim}>
              {o.subtitle}
            </text>
            <text x="405" y={o.y + 30} fontSize="10" fontWeight="700" fill={amber} textAnchor="middle">
              {o.tier}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
