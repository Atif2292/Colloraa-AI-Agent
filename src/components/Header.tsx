import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Revenue Systems', to: '/revenue-systems' },
  { label: 'AI Voice Agents', to: '/ai-voice-agents' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/90 px-5 py-3 backdrop-blur-xl">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Sparkles className="h-4.5 w-4.5 text-primary-foreground" />
          </span>
          <span className="font-heading text-xl font-black tracking-tight">
            Colloraa
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link to="/contact" className="btn-gradient !px-5 !py-2.5">
            Book a Free Audit
          </Link>
        </div>

        <button
          className="rounded-xl bg-muted p-2 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border/60 bg-card/95 px-6 py-4 backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gradient w-fit !px-6 !py-2.5"
            >
              Book a Free Audit
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
