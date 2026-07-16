import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <GlowBlob className="absolute -top-32 left-1/2 h-[460px] w-[460px] -translate-x-1/2" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="section-eyebrow mb-5">{eyebrow}</p>
          <h1 className="mb-5 font-heading text-4xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>
          <div className="shimmer-line mx-auto mb-5 w-40" />
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
