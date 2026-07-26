import PageHero from '../components/PageHero'
import VoiceAgentFeatures from '../components/VoiceAgentFeatures'
import CtaBanner from '../components/CtaBanner'
import PageMeta from '../components/PageMeta'

export default function VoiceAiPage() {
  return (
    <>
      <PageMeta
        title="AI Voice Agents"
        description="Your AI voice agent answers, qualifies, and books every caller — in the language they called in, at any hour of the day or night."
        path="/voice-ai"
      />
      <PageHero
        eyebrow="Voice AI"
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
