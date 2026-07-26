import PageHero from '../components/PageHero'
import Industries from '../components/Industries'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function IndustriesPage() {
  return (
    <>
      <PageMeta
        title="Industries We Serve"
        description="Every industry loses revenue differently — see how CloudAutoAI's AI automation and voice agent systems adapt to real estate, healthcare, legal, e-commerce, and more."
        path="/industries"
      />
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
