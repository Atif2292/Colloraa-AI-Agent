import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import RevenueSystemsPage from './pages/RevenueSystemsPage'
import AiVoiceAgentsPage from './pages/AiVoiceAgentsPage'
import SolutionsPage from './pages/SolutionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/revenue-systems" element={<RevenueSystemsPage />} />
          <Route path="/ai-voice-agents" element={<AiVoiceAgentsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
