'use client'

import { useLocaleContext } from '@/contexts/LocaleContext'

export function useTranslations(namespace?: string) {
  const { t } = useLocaleContext()

  return (key: string, fallback?: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key
    return t(fullKey, fallback)
  }
}

export function useLocale() {
  const { locale, setLocale, availableLocales } = useLocaleContext()
  return { locale, setLocale, availableLocales }
}
