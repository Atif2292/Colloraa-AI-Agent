import Hero from '../components/Hero'
import RunningLines from '../components/RunningLines'
import Problems from '../components/Problems'
import Process from '../components/Process'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function Home() {
  return (
    <>
      <PageMeta title="AI Automation & Voice Agent Agency" />
      <Hero />
      <RunningLines />
      <Problems />
      <Process />
      <CtaBanner />
    </>
  )
}
