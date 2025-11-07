'use client'

import { useState, useEffect } from 'react'
import { Download, X } from 'lucide-react'
import { usePWA } from '@/hooks/usePWA'
import { useTranslations } from '@/hooks/useTranslations'

export default function InstallPrompt() {
  const { isInstallable, installApp } = usePWA()
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const t = useTranslations('common')

  useEffect(() => {
    const wasDismissed = localStorage.getItem('pwa-install-dismissed')
    if (wasDismissed) {
      setDismissed(true)
      return
    }

    const timer = setTimeout(() => {
      if (isInstallable) {
        setShow(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isInstallable])

  const handleInstall = async () => {
    await installApp()
    setShow(false)
  }

  const handleDismiss = () => {
    setShow(false)
    setDismissed(true)
    localStorage.setItem('pwa-install-dismissed', 'true')
  }

  if (!show || dismissed || !isInstallable) {
    return null
  }

  return (
    <div className="animate-slide-up fixed bottom-20 left-4 right-4 z-40 md:left-auto md:right-4 md:w-96">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
        <div className="relative bg-gradient-to-r from-azul-profundo to-azul-profundo/90 p-4 text-white">
          <button
            onClick={handleDismiss}
            className="absolute right-2 top-2 rounded-full p-1 transition-colors hover:bg-white/20"
            aria-label={t('close')}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <Download className="h-6 w-6 text-azul-profundo" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{t('installApp')}</h3>
              <p className="text-sm text-white/80">{t('installAppDescription')}</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="mb-4 text-sm text-gray-700">
            {t('installIntro')}
          </p>

          <div className="mb-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>{t('installBenefits.quickAccess')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>{t('installBenefits.notifications')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>{t('installBenefits.offline')}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="flex-1 rounded-lg bg-azul-profundo py-3 px-4 font-semibold text-white transition-all hover:bg-azul-profundo/90"
              type="button"
            >
              {t('installNow')}
            </button>
            <button
              onClick={handleDismiss}
              className="rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-gray-100"
              type="button"
            >
              {t('notNow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
