import PageHero from '../components/PageHero'
import ResultsStats from '../components/ResultsStats'
import Systems from '../components/Systems'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function GrowthSystemsPage() {
  return (
    <>
      <PageMeta
        title="Growth Systems"
        description="Five AI-powered systems, each built to close one specific revenue leak — pick the one that matches where your business is losing the most."
        path="/growth-systems"
      />
      <PageHero
        eyebrow="Growth systems"
        title={
          <>
            Pick the gap.
            <br />
            <span className="gradient-text">We build the system that closes it.</span>
          </>
        }
        subtitle="Five systems, each built to close one specific revenue leak — pick the one that matches where you're losing the most."
      />
      <ResultsStats />
      <Systems />
      <CtaBanner />
    </>
  )
}
