import ScrollReveal from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const APP_PIC = './pic.png'

export default function AppShowcase() {
  const { t } = useLanguage()
  const s = t('home.showcase')

  return (
    <section className="app-showcase">
      <div className="app-showcase-glow app-showcase-glow--blue" aria-hidden="true" />
      <div className="app-showcase-glow app-showcase-glow--green" aria-hidden="true" />
      <div className="app-showcase-inner">
        <ScrollReveal variant="fade-up" className="app-showcase-copy">
          <p className="section-label">{s.label}</p>
          <h2>{s.title}</h2>
          <p className="app-showcase-body">{s.body}</p>
          <div className="app-showcase-badges">
            <span className="badge badge-live">
              <span className="pulse-dot" aria-hidden="true" />
              {s.live}
            </span>
            <span className="badge badge-ai">{s.powered}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={120} className="app-showcase-visual">
          <div className="phone-frame">
            <div className="phone-frame-ring" aria-hidden="true" />
            <img
              src={APP_PIC}
              alt="ScamShield mobile app — live scam detection and SwahBERT analysis"
              className="phone-screenshot"
              loading="lazy"
              width={400}
              height={800}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
