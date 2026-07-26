import ContactForm from '../components/ContactForm'
import PageMeta from '../components/PageMeta'

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Book a free audit with CloudAutoAI and we'll show you exactly where leads and hours are slipping through your funnel — no obligation, no pitch."
        path="/contact"
      />
      <ContactForm />
    </>
  )
}
