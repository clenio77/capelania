'use client'

import { useLocale, useTranslations } from '@/hooks/useTranslations'
import { Globe } from 'lucide-react'
import { useState } from 'react'

export default function LanguageSwitcher() {
  const { availableLocales, locale, setLocale } = useLocale()
  const t = useTranslations('language')
  const common = useTranslations('common')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-azul-profundo shadow-sm transition-colors hover:border-dourado-sacra hover:text-dourado-sacra focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado-sacra"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{t('title')}</span>
        <span className="uppercase">{locale}</span>
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl"
          role="listbox"
          aria-label={t('label')}
        >
          {availableLocales.map((loc) => (
            <li key={loc}>
              <button
                className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-off-white ${
                  loc === locale ? 'font-semibold text-dourado-sacra' : 'text-gray-700'
                }`}
                onClick={() => {
                  setLocale(loc)
                  setIsOpen(false)
                }}
                type="button"
                role="option"
                aria-selected={loc === locale}
              >
                {common(`languageNames.${loc}`)}
                {loc === locale && <span className="text-xs uppercase text-dourado-sacra">{common('language')}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
