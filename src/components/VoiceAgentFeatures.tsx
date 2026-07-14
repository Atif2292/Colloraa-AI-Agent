import { Phone, Languages, Clock, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'
import WorkflowDiagram from './WorkflowDiagram'

const features = [
  {
    icon: Clock,
    title: '24/7 pickup',
    body: 'Every inbound call gets answered, day or night — no lead waits for office hours.',
  },
  {
    icon: Languages,
    title: 'Multilingual',
    body: 'Fluent in English, Hindi, Telugu, and more — so the agent sounds native to your caller, not scripted.',
  },
  {
    icon: Phone,
    title: 'Outbound follow-up',
    body: 'Automatically calls back missed leads and no-shows within minutes, not days.',
  },
  {
    icon: CalendarCheck,
    title: 'Books straight to your calendar',
    body: 'Qualifies the caller, then books, confirms, and syncs the meeting without a human touching it.',
  },
]

export default function VoiceAgentFeatures() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="glow-card h-full p-7">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <f.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="mb-2 font-heading text-base font-bold">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <WorkflowDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
