import { Section, DownloadBanner } from '../components/Hero'
import ScrollReveal, { StaggerGroup } from '../components/ScrollReveal'
import { APK_URL } from '../constants'
import { useLanguage } from '../context/LanguageContext'

const FEATURES = [
  {
    title: 'SwahBERT AI analysis',
    body: 'Deep learning model tuned for Swahili and code-mixed SMS. Detects scam patterns that English-only filters miss.',
  },
  {
    title: 'Manual SMS scan',
    body: 'Paste or share any suspicious message into the app. Get scam %, safe %, risk indicators, and a clear verdict in seconds.',
  },
  {
    title: 'Automatic incoming monitoring',
    body: 'Optional RECEIVE_SMS listener analyzes new messages only — not your full inbox. Turn on or off in Settings.',
  },
  {
    title: 'Push notifications',
    body: 'High-risk messages trigger alerts with title and summary. Disable notifications anytime if you prefer silent mode.',
  },
  {
    title: 'Known scam number memory',
    body: 'Numbers flagged as scams are saved locally. If they message again, you get an instant warning without waiting for API.',
  },
  {
    title: 'Scan history',
    body: 'Review past results on device. Filter scam vs legitimate. Everything stays in your private local database.',
  },
  {
    title: 'Risk donut chart',
    body: 'Visual scam vs safe split so you understand risk at a glance — built for quick decisions on small screens.',
  },
  {
    title: 'English & Kiswahili UI',
    body: 'Switch app language in Settings. Analysis explanations can follow your preferred language.',
  },
  {
    title: 'Dark theme',
    body: 'Comfortable night reading with consistent colors across Home, Scan, History, and Settings.',
  },
  {
    title: 'Share-to-scan',
    body: 'Forward a suspicious SMS from any app directly into ScamShield for one-tap analysis.',
  },
  {
    title: 'Privacy controls',
    body: 'No READ_SMS permission. Staged permission onboarding. Privacy policy and terms inside the app.',
  },
  {
    title: 'Offline-friendly blocks',
    body: 'Local scam-number list works even when the network is slow — alerts for repeat offenders stay fast.',
  },
]

const SPECS = [
  ['Platform', 'Android'],
  ['APK size', '~22 MB'],
  ['API', 'SwahBERT (HTTPS)'],
  ['Permissions', 'RECEIVE_SMS (optional), Notifications, Internet'],
  ['Languages', 'English, Kiswahili'],
]

export default function Features() {
  const { t } = useLanguage()
  const f = t('features')
  const dl = t('download')

  return (
    <>
      <section className="page-hero page-hero-features">
        <div className="page-hero-inner">
          <ScrollReveal variant="fade-up">
            <p className="section-label">{f.label}</p>
            <h1>
              {f.title}
              <span className="hero-accent">{f.accent}</span>
            </h1>
            <p className="page-hero-sub">{f.sub}</p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <a href={APK_URL} className="btn-download-hero btn-download-compact" download>
              <span className="btn-download-label">{f.download}</span>
              <span className="btn-download-sub">{f.downloadSub}</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <ScrollReveal variant="fade-up">
          <p className="section-label">Core capabilities</p>
          <h2>Strong AI. Simple controls.</h2>
        </ScrollReveal>
        <StaggerGroup className="feature-grid" stagger={60}>
          {FEATURES.map((item) => (
            <article key={item.title} className="feature-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </StaggerGroup>
      </Section>

      <Section className="section-dark">
        <ScrollReveal variant="fade-up">
          <p className="section-label">Technical summary</p>
          <h2>Under the hood</h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={80}>
          <table className="spec-table">
            <tbody>
              {SPECS.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={120}>
          <div className="prose spec-prose">
            <p>
              The mobile app talks to our production API for classification. Messages are
              preprocessed (normalized text, language-aware features) before inference. Results
              map to mobile-friendly fields: percentages, notification text, and clear
              explanations you can read in one glance.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal variant="fade-up">
          <p className="section-label">Installation</p>
          <h2>Get started in three steps</h2>
        </ScrollReveal>
        <ol className="steps">
          {[
            { strong: 'Download', rest: 'Tap the button below to save ScamShield.apk to your phone.' },
            { strong: 'Install', rest: 'Open the file and allow install from this source if asked.' },
            { strong: 'Protect', rest: 'Grant SMS receive and notifications only if you want automatic monitoring.' },
          ].map((step, i) => (
            <li key={step.strong}>
              <ScrollReveal variant="fade-left" delay={i * 80}>
                <strong>{step.strong}</strong> — {step.rest}
              </ScrollReveal>
            </li>
          ))}
        </ol>
        <ScrollReveal variant="scale" delay={200}>
          <DownloadBanner title={dl.title} body={dl.body} btn={dl.btn} />
        </ScrollReveal>
      </Section>
    </>
  )
}
