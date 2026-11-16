import Hero, { Section, DownloadBanner } from '../components/Hero'
import ScrollReveal, { StaggerGroup } from '../components/ScrollReveal'
import { IMAGES, UNSPLASH_CREDITS } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const dl = t('download')

  return (
    <>
      <Hero
        image={IMAGES.about}
        imageCredit={UNSPLASH_CREDITS.about}
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        titleAccent={t('about.accent')}
        subtitle={t('about.subtitle')}
      />

      <Section>
        <ScrollReveal variant="fade-up">
          <p className="section-label">The challenge</p>
          <h2>Scammers speak Swahili. Most tools do not.</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="prose">
            <p>
              In Tanzania and across East Africa, fraudsters send urgent messages about
              M-Pesa errors, fake job offers, parcel fees, bank verification, and family
              emergencies. They mix Kiswahili, English, and Sheng. They pressure you to act
              in minutes.
            </p>
            <p>
              Generic spam filters miss these messages because they were never trained on how
              Tanzanians actually text. Victims — especially mobile-first users on small
              screens — need a tool that understands their language and explains risk in words
              they trust.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section className="section-dark">
        <ScrollReveal variant="fade-up">
          <p className="section-label">Our approach</p>
          <h2>AI with Swahili at the center</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={80}>
          <div className="prose">
            <p>
              ScamShield connects to <strong>SwahBERT</strong>, a machine-learning API built
              for Swahili SMS classification. The model learns patterns from real scam and
              legitimate messages — prize claims, phishing links, impersonation, and normal
              personal chats.
            </p>
            <p>
              When you scan a message, the system returns a scam percentage, safe percentage,
              risk indicators, and a human-readable explanation. For incoming SMS (when you
              opt in), the same analysis runs in the background and can notify you before you
              open a malicious link.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal variant="fade-up">
          <p className="section-label">How we protect your privacy</p>
          <h2>Built for trust, explained honestly</h2>
        </ScrollReveal>
        <StaggerGroup className="grid-2" stagger={80}>
          <article className="card card-accent">
            <h3>What we collect</h3>
            <p>
              Only the SMS text you submit for analysis, or one incoming message at a time
              when monitoring is on. Sender number may be used locally to block repeat
              scammers — stored on your phone, not shared as a contact list.
            </p>
          </article>
          <article className="card card-accent">
            <h3>What we never do</h3>
            <p>
              We do not read your full message history. We do not sell data. We do not
              require unnecessary permissions. Play Protect–friendly design: no READ_SMS,
              only RECEIVE_SMS when you enable live protection.
            </p>
          </article>
          <article className="card card-accent">
            <h3>Where data goes</h3>
            <p>
              Analysis runs on a secure HTTPS API (SwahBERT on Render). Messages are
              processed for classification, not stored for marketing. Your scan history
              lives in local SQLite on your device.
            </p>
          </article>
          <article className="card card-accent">
            <h3>Your choices</h3>
            <p>
              Use manual paste-only scanning without SMS permission. Toggle notifications.
              Switch English or Kiswahili in Settings. Delete history from the app whenever
              you want.
            </p>
          </article>
        </StaggerGroup>
      </Section>

      <Section className="section-dark">
        <ScrollReveal variant="fade-up">
          <p className="section-label">Who we serve</p>
          <h2>Designed for phones — and for people</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="prose">
            <p>
              ScamShield is a Final Year Project focused on everyday Android users: students,
              shop owners, parents, and anyone who relies on SMS for money and work. The
              interface is simple, dark-mode friendly, and readable on small displays.
            </p>
            <p>
              Our mission is not to replace common sense — it is to give you a second opinion
              powered by AI that finally understands Swahili scams as well as you understand
              your inbox.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal variant="scale">
          <DownloadBanner title={dl.title} body={dl.body} btn={dl.btn} />
        </ScrollReveal>
      </Section>
    </>
  )
}
