import PageHero from '../components/PageHero'
import VoiceAgentFeatures from '../components/VoiceAgentFeatures'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function AiVoiceAgentsPage() {
  return (
    <>
      <PageMeta title="AI Voice Agents" />
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
