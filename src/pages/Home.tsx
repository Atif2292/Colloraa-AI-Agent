import Hero from '../components/Hero'
import RunningLines from '../components/RunningLines'
import Problems from '../components/Problems'
import Process from '../components/Process'
import ScrollingReviews from '../components/ScrollingReviews'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function Home() {
  return (
    <>
      <PageMeta
        title="AI Automation & Voice Agent Agency"
        rawTitle="CloudAutoAI | AI Automation & Voice Agent Agency"
        description="CloudAutoAI builds AI voice agents, automations, and web systems that respond, qualify, and follow up the moment a customer shows interest — so no lead slips through the cracks."
        path="/"
      />
      <Hero />
      <RunningLines />
      <Problems />
      <Process />
      <ScrollingReviews />
      <CtaBanner />
    </>
  )
}
