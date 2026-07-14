import PageHero from '../components/PageHero'
import VoiceAgentFeatures from '../components/VoiceAgentFeatures'
import CtaBanner from '../components/CtaBanner'

export default function AiVoiceAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI voice agents"
        title={
          <>
            A voice that never
            <br />
            <span className="gradient-text">misses a call.</span>
          </>
        }
        subtitle="Your AI voice agent answers, qualifies, and books every caller — in the language they called in, at any hour."
      />
      <VoiceAgentFeatures />
      <CtaBanner />
    </>
  )
}
