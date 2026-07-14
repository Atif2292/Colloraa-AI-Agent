import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="mx-auto mb-6 max-w-2xl font-heading text-3xl font-bold tracking-tight md:text-5xl">
            Ready to stop the leak?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
            Book a free audit and we'll show you exactly where leads and
            hours are slipping through — no obligation, no pitch.
          </p>
          <Link to="/contact" className="btn-gradient">
            Book a Free Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
