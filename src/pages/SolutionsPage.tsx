import PageHero from '../components/PageHero'
import Solutions from '../components/Solutions'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function SolutionsPage() {
  return (
    <>
      <PageMeta title="Solutions" />
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Built for your industry,
            <br />
            <span className="gradient-text">not a generic template.</span>
          </>
        }
        subtitle="Every industry loses revenue differently — here's how our systems adapt to yours."
      />
      <Solutions />
      <CtaBanner />
    </>
  )
}
