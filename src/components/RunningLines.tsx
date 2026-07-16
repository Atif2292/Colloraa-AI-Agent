import { Sun } from 'lucide-react'

const outcomes = [
  'More Leads',
  'Faster Response',
  'Lower Costs',
  'Higher Revenue',
  '24/7 Availability',
  'Better Experience',
]

const industries = [
  'Real Estate',
  'Clinics & Healthcare',
  'Coaches & Consultants',
  'D2C Brands',
  'Legal Firms',
  'E-commerce',
  'SaaS Startups',
]

function Row({
  items,
  direction,
}: {
  items: string[]
  direction: 'animate-marquee' | 'animate-marquee-reverse'
}) {
  const loop = [...items, ...items]
  return (
    <div className={`flex w-max items-center gap-3 ${direction}`}>
      {loop.map((label, i) => (
        <span key={`${label}-${i}`} className="flex items-center gap-3">
          <span className="whitespace-nowrap font-heading text-2xl font-black tracking-tight text-black sm:text-3xl">
            {label}
          </span>
          <Sun className="h-6 w-6 shrink-0 text-black/70" strokeWidth={2.2} />
        </span>
      ))}
    </div>
  )
}

export default function RunningLines() {
  return (
    <section className="relative overflow-hidden py-6">
      <div className="relative left-1/2 w-[120vw] -translate-x-1/2 -rotate-2 bg-primary py-5">
        <div className="overflow-hidden">
          <Row items={outcomes} direction="animate-marquee" />
        </div>
        <div className="mt-3 overflow-hidden">
          <Row items={industries} direction="animate-marquee-reverse" />
        </div>
      </div>
    </section>
  )
}
