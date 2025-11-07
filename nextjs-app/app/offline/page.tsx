'use client'

import { WifiOff } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export default function OfflinePage() {
  const t = useTranslations('common')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-azul-profundo/10">
          <WifiOff className="h-12 w-12 text-azul-profundo" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-azul-profundo">
          {t('offlineTitle')}
        </h1>

        <p className="mb-8 text-gray-600">
          {t('offlineDescription')}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-azul-profundo px-8 py-3 font-semibold text-white transition-colors hover:bg-azul-profundo/90"
          type="button"
        >
          {t('tryAgain')}
        </button>

        <div className="mt-8 rounded-lg border border-dourado-sacra/20 bg-dourado-sacra/10 p-6">
          <p className="text-sm text-gray-700">
            💡 <strong>{t('installAppDescription')}</strong> — {t('offlineTip')}
          </p>
        </div>
      </div>
    </div>
  )
}
