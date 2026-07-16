import {
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Scale,
  Store,
  Rocket,
} from 'lucide-react'
import Reveal from './Reveal'

const industries = [
  {
    icon: Building2,
    industry: 'Real Estate',
    body: 'Qualify site-visit requests instantly and follow up on every listing enquiry before a buyer moves to the next agent.',
  },
  {
    icon: Stethoscope,
    industry: 'Clinics & Healthcare',
    body: 'Book appointments, confirm slots, and handle reschedules over voice and WhatsApp without tying up front-desk staff.',
  },
  {
    icon: GraduationCap,
    industry: 'Coaches & Consultants',
    body: 'Screen discovery-call requests and get only serious, qualified prospects onto your calendar.',
  },
  {
    icon: ShoppingBag,
    industry: 'D2C Brands',
    body: 'Recover abandoned carts and answer order questions on WhatsApp the moment a customer drops off.',
  },
  {
    icon: Scale,
    industry: 'Legal Firms',
    body: 'Intake new client enquiries, capture case details, and route urgent matters straight to the right person.',
  },
  {
    icon: Store,
    industry: 'E-commerce',
    body: 'Turn support tickets and pre-sale questions into a 24/7 conversation that closes instead of a queue.',
  },
  {
    icon: Rocket,
    industry: 'SaaS Startups',
    body: 'Qualify inbound trial signups and demo requests automatically so your team only talks to sales-ready leads.',
  },
]

export default function Industries() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((s, i) => (
            <Reveal key={s.industry} delay={(i % 3) * 120}>
              <div className="glow-card h-full p-8">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <s.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-bold">
                  {s.industry}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
