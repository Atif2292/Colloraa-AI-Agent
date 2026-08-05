const reviews = [
  {
    name: 'Rahul Mehta',
    role: 'Real Estate Agency, Mumbai',
    avatar: 'RM',
    stars: 5,
    text: 'Our agents used to miss calls constantly. Now the AI picks up every single one and books site visits automatically. We closed 3 extra deals in the first month alone.',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Dental Clinic, Bangalore',
    avatar: 'PS',
    stars: 5,
    text: 'Patients were calling after hours and we were losing them. CloudAutoAI handles all after-hours calls and books appointments directly into our calendar. Game changer.',
  },
  {
    name: 'Arjun Singh',
    role: 'Business Coach, Delhi',
    avatar: 'AS',
    stars: 5,
    text: 'I was spending 2 hours a day just following up on leads. The AI does it all now — calls, WhatsApp, booking. My calendar is full and I didn\'t lift a finger.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'D2C Brand Founder',
    avatar: 'SK',
    stars: 5,
    text: 'Response time went from 6 hours to under 3 minutes. Our conversion rate jumped 40% in 6 weeks. Best investment we\'ve made this year.',
  },
  {
    name: 'Mohammed Farhan',
    role: 'Legal Firm, Hyderabad',
    avatar: 'MF',
    stars: 5,
    text: 'Clients would call, get no answer, and go to a competitor. Now every call is handled professionally. Our intake has doubled without hiring anyone new.',
  },
  {
    name: 'Neha Joshi',
    role: 'EdTech Startup, Pune',
    avatar: 'NJ',
    stars: 5,
    text: 'We had thousands of signups going cold because nobody was following up fast enough. The AI calls within 5 minutes of signup. Our demo bookings tripled.',
  },
  {
    name: 'Vikram Nair',
    role: 'Healthcare Consultant',
    avatar: 'VN',
    stars: 5,
    text: 'Setup took 7 days exactly as promised. The AI handles qualification better than my junior staff did. We cut our sales team cost by 60%.',
  },
  {
    name: 'Riya Agarwal',
    role: 'E-commerce Brand, Jaipur',
    avatar: 'RA',
    stars: 5,
    text: 'WhatsApp follow-ups are fully automated now. Customers get instant replies, cart recovery messages, and support — all without us. Revenue up 28% this quarter.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 fill-primary" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="mx-3 w-[320px] shrink-0 rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm">
      <Stars count={review.stars} />
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        "{review.text}"
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-xs font-bold text-primary">
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.role}</p>
        </div>
      </div>
    </div>
  )
}

function ReviewRow({
  direction,
}: {
  direction: 'animate-marquee' | 'animate-marquee-reverse'
}) {
  const loop = [...reviews, ...reviews]
  return (
    <div className={`flex w-max items-stretch ${direction}`}>
      {loop.map((r, i) => (
        <ReviewCard key={`${r.name}-${i}`} review={r} />
      ))}
    </div>
  )
}

export default function ScrollingReviews() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Client Results
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
          What our clients say
        </h2>
      </div>

      <div className="space-y-4 overflow-hidden">
        <ReviewRow direction="animate-marquee" />
        <ReviewRow direction="animate-marquee-reverse" />
      </div>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}
