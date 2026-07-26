import About from '../components/About'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="CloudAutoAI is an AI automation and voice agent agency helping businesses stop losing leads to slow follow-up and manual busywork."
        path="/about"
      />
      <About />
      <CtaBanner />
    </>
  )
}
