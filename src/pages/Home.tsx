import Hero from '../components/Hero'
import Industries from '../components/Industries'
import Problems from '../components/Problems'
import Process from '../components/Process'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function Home() {
  return (
    <>
      <PageMeta title="AI Automation & Voice Agent Agency" />
      <Hero />
      <Industries />
      <Problems />
      <Process />
      <CtaBanner />
    </>
  )
}
