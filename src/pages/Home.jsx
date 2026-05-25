import Hero, { Section, DownloadBanner } from '../components/Hero'
import AppShowcase from '../components/AppShowcase'
import ScrollReveal, { StaggerGroup } from '../components/ScrollReveal'
import { Link } from 'react-router-dom'
import { IMAGES, UNSPLASH_CREDITS } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Hero
        image={IMAGES.home}
        imageCredit={UNSPLASH_CREDITS.home}
        eyebrow={t('home.eyebrow')}
        title={t('home.title')}
        titleAccent={t('home.accent')}
        subtitle={t('home.subtitle')}
        showDownload
        showScroll
        downloadLabel={t('home.download')}
        downloadSub={t('home.downloadSub')}
        scrollLabel={t('home.scroll')}
      />

      <AppShowcase />

      <Section className="section-dark">
        <ScrollReveal variant="fade-up">
          <p className="section-label">{t('home.why.label')}</p>
          <h2>{t('home.why.title')}</h2>
        </ScrollReveal>
        <StaggerGroup className="grid-3" stagger={90}>
          {t('home.cards').map((card) => (
            <article key={card.title} className="card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal variant="fade-up">
          <p className="section-label">{t('home.how.label')}</p>
          <h2>{t('home.how.title')}</h2>
        </ScrollReveal>
        <ol className="steps">
          {t('home.steps').map((step, i) => (
            <li key={step.strong}>
              <ScrollReveal variant="fade-left" delay={i * 80}>
                <strong>{step.strong}</strong> — {step.rest}
              </ScrollReveal>
            </li>
          ))}
        </ol>
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="cta-row">
            <Link to="/features" className="btn-outline">
              {t('home.featuresLink')}
            </Link>
            <Link to="/about" className="btn-text">
              {t('home.storyLink')}
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      <Section className="section-dark">
        <ScrollReveal variant="fade-up">
          <p className="section-label">{t('home.privacy.label')}</p>
          <h2>{t('home.privacy.title')}</h2>
        </ScrollReveal>
        <ul className="privacy-list">
          {t('home.privacyItems').map((item, i) => (
            <li key={item.strong}>
              <ScrollReveal variant="fade-up" delay={i * 70}>
                <strong>{item.strong}</strong> — {item.rest}
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <ScrollReveal variant="scale">
          <DownloadBanner
            title={t('home.banner.title')}
            body={t('home.banner.body')}
            btn={t('home.banner.btn')}
          />
        </ScrollReveal>
      </Section>
    </>
  )
}
