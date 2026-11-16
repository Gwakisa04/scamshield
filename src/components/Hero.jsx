import ScrollReveal from './ScrollReveal'
import { APK_URL } from '../constants'

export default function Hero({
  image,
  imageCredit,
  eyebrow,
  title,
  titleAccent,
  subtitle,
  showDownload = false,
  showScroll = false,
  downloadLabel = 'Download ScamShield',
  downloadSub = 'Free Android APK · ~53 MB',
  scrollLabel = 'Scroll',
  children,
}) {
  return (
    <section
      className="hero"
      style={{ '--hero-image': `url(${image})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <ScrollReveal variant="fade-up" delay={0}>
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={80}>
          <h1 className="hero-title">
            {title}
            {titleAccent && <span className="hero-accent">{titleAccent}</span>}
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={160}>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </ScrollReveal>
        {showDownload && (
          <ScrollReveal variant="fade-up" delay={240}>
            <a href={APK_URL} className="btn-download-hero" download>
              <span className="btn-download-label">{downloadLabel}</span>
              <span className="btn-download-sub">{downloadSub}</span>
            </a>
          </ScrollReveal>
        )}
        {children}
        {showScroll && (
          <div className="hero-scroll">
            <span>{scrollLabel}</span>
            <span className="scroll-arrow scroll-bounce" aria-hidden="true">
              ↓
            </span>
          </div>
        )}
      </div>
      {imageCredit && (
        <a
          className="photo-credit"
          href={imageCredit.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Photo · Unsplash
        </a>
      )}
    </section>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="section-inner">{children}</div>
    </section>
  )
}

export function DownloadBanner({ title, body, btn }) {
  return (
    <div className="download-banner">
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <a href={APK_URL} className="btn-download-inline" download>
        {btn}
      </a>
    </div>
  )
}
