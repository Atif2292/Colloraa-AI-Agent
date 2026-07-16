import About from '../components/About'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function AboutPage() {
  return (
    <>
      <PageMeta title="About" />
      <About />
      <CtaBanner />
    </>
  )
}
