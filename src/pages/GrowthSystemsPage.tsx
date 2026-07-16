import PageHero from '../components/PageHero'
import Systems from '../components/Systems'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function GrowthSystemsPage() {
  return (
    <>
      <PageMeta title="Growth Systems" />
      <PageHero
        eyebrow="Growth systems"
        title={
          <>
            Pick the gap.
            <br />
            <span className="gradient-text">We build the system that closes it.</span>
          </>
        }
        subtitle="Three systems, each built to close one specific revenue leak — pick the one that matches where you're losing the most."
      />
      <Systems />
      <CtaBanner />
    </>
  )
}
