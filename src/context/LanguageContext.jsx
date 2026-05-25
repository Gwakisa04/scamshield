import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { translations } from '../i18n/translations'

const STORAGE_KEY = 'salamascan-lang'

const LanguageContext = createContext(null)

function getNested(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem(STORAGE_KEY) || 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'sw' ? 'sw' : 'en'
  }, [lang])

  const setLang = useCallback((code) => {
    if (code === 'en' || code === 'sw') setLangState(code)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'sw' : 'en'))
  }, [])

  const t = useCallback(
    (key) => {
      const val = getNested(translations[lang], key)
      if (val !== undefined) return val
      return getNested(translations.en, key) ?? key
    },
    [lang],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
