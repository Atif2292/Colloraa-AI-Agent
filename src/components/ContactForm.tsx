import { useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mohdatif2291@gmail.com'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="pb-28 pt-40 sm:pt-48">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="glow-card overflow-hidden rounded-3xl p-10 md:p-14">
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="section-eyebrow mb-4">Start a conversation</p>
                <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                  Tell us what's
                  <br />
                  <span className="gradient-text">slowing you down.</span>
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  Share a few details about your business and we'll come back
                  with a plan — what to automate first and what it would
                  take to build it.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    mohdatif2291@gmail.com
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    +91 91829 84077
                  </div>
                </div>
              </div>

              {status === 'sent' ? (
                <div className="flex items-center justify-center rounded-2xl border border-primary/40 bg-primary/5 p-10 text-center">
                  <p className="font-heading text-lg font-semibold text-primary">
                    Thanks — we'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="New Colloraa lead" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      name="name"
                      placeholder="Full name"
                      className="rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Work email"
                      className="rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <input
                    name="company"
                    placeholder="Company"
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="What would you like to automate first?"
                    className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gradient w-full justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  {status === 'error' && (
                    <p className="text-center text-sm text-destructive">
                      Something went wrong — email us directly at
                      mohdatif2291@gmail.com.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
