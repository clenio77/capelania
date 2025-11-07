'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLocale, getTranslation, Locale, locales } from '@/lib/i18n/translations'

interface LocaleContextProps {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, fallback?: string) => string
  availableLocales: Locale[]
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined)

const STORAGE_KEY = 'capelania-locale'

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Locale | null
    if (stored && locales.includes(stored)) {
      setLocaleState(stored)
      return
    }

    if (typeof window !== 'undefined') {
      const navigatorLang = window.navigator.language.split('-')[0] as Locale
      if (navigatorLang && locales.includes(navigatorLang)) {
        setLocaleState(navigatorLang)
      }
    }
  }, [])

  const setLocale = useCallback((value: Locale) => {
    setLocaleState(value)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, value)
      const html = document.querySelector('html')
      if (html) {
        html.setAttribute('lang', value)
      }
    }
  }, [])

  const translate = useCallback(
    (key: string, fallback?: string) => getTranslation(locale, key, fallback),
    [locale]
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translate,
      availableLocales: locales,
    }),
    [locale, setLocale, translate]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider')
  }
  return context
}
