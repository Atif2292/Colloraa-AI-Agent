import PageHero from '../components/PageHero'
import Industries from '../components/Industries'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function IndustriesPage() {
  return (
    <>
      <PageMeta title="Industries" />
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Built for your industry,
            <br />
            <span className="gradient-text">not a generic template.</span>
          </>
        }
        subtitle="Every industry loses revenue differently — here's how our systems adapt to yours."
      />
      <Industries />
      <CtaBanner />
    </>
  )
}
