'use client'

import { useState, useEffect } from 'react'
import { Download, X } from 'lucide-react'
import { usePWA } from '@/hooks/usePWA'

export default function InstallPrompt() {
  const { isInstallable, installApp } = usePWA()
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if user already dismissed
    const wasDismissed = localStorage.getItem('pwa-install-dismissed')
    if (wasDismissed) {
      setDismissed(true)
      return
    }

    // Show after 10 seconds if installable
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
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-40 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-azul-profundo to-azul-profundo/90 p-4 text-white relative">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-azul-profundo" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Instalar App</h3>
              <p className="text-sm text-white/80">Capelania JBP</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-gray-700 text-sm mb-4">
            Instale nosso app para ter acesso rápido, receber notificações de eventos e usar mesmo sem internet!
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Acesso rápido com um toque</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Notificações de eventos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Funciona offline</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="flex-1 bg-azul-profundo text-white py-3 px-4 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all"
            >
              Instalar
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Agora não
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

