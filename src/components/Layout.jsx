import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import LanguageFab from './LanguageFab'
import { APK_URL } from '../constants'
import { useLanguage } from '../context/LanguageContext'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  const NAV = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/features', label: t('nav.features') },
  ]

  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="SalamaScan home">
          <Logo />
          <span className="brand-name">SALAMASCAN</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {NAV.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={pathname === to ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a href={APK_URL} className="nav-download" download>
          {t('nav.download')}
        </a>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Logo size={32} />
            <span>SalamaScan</span>
          </div>
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <nav className="footer-nav">
            {NAV.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
            <a href={APK_URL} download>
              {t('footer.download')}
            </a>
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} {t('footer.copy')}
          </p>
        </div>
      </footer>

      <LanguageFab />
    </div>
  )
}
