import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageFab() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className={`lang-fab ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="lang-fab-menu" role="menu" aria-label={t('lang.label')}>
          <button
            type="button"
            role="menuitem"
            className={lang === 'en' ? 'active' : ''}
            onClick={() => {
              setLang('en')
              setOpen(false)
            }}
          >
            <span className="lang-flag">EN</span>
            {t('lang.en')}
          </button>
          <button
            type="button"
            role="menuitem"
            className={lang === 'sw' ? 'active' : ''}
            onClick={() => {
              setLang('sw')
              setOpen(false)
            }}
          >
            <span className="lang-flag">SW</span>
            {t('lang.sw')}
          </button>
        </div>
      )}
      <button
        type="button"
        className="lang-fab-btn"
        aria-label={t('lang.label')}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-2.86a15.6 15.6 0 0 0-1.1-4.58A8.03 8.03 0 0 1 19.93 11ZM12 4c.95 0 2.36 1.78 3.1 5H8.9C9.64 5.78 11.05 4 12 4ZM6.03 6.42A15.6 15.6 0 0 0 4.93 11H2.07a8.03 8.03 0 0 1 3.96-4.58ZM2.07 13h2.86c.26 1.62.66 3.15 1.1 4.58A8.03 8.03 0 0 1 2.07 13Zm5.96 4.58c-.44-1.43-.84-2.96-1.1-4.58h2.86a8.03 8.03 0 0 1-1.76 4.58ZM12 20c-.95 0-2.36-1.78-3.1-5h6.2c-.74 3.22-2.15 5-3.1 5Zm3.97-1.42c.44-1.43.84-2.96 1.1-4.58h2.86a8.03 8.03 0 0 1-3.96 4.58Zm1.76-6.16h-2.86a15.6 15.6 0 0 0 1.1-4.58A8.03 8.03 0 0 1 19.93 13Z"
          />
        </svg>
        <span className="lang-fab-badge">{lang.toUpperCase()}</span>
      </button>
    </div>
  )
}
