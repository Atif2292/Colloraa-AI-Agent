import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Pages',
    links: [
      { label: 'Revenue Systems', to: '/revenue-systems' },
      { label: 'AI Voice Agents', to: '/ai-voice-agents' },
      { label: 'Solutions', to: '/solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-heading text-xl font-bold">Colloraa</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              AI automations, voice agents, and revenue systems that stop
              leads slipping through the cracks.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-heading text-sm font-semibold">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Colloraa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
