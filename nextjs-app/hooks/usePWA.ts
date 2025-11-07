'use client'

import { useEffect, useState } from 'react'

export function usePWA() {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('Service Worker registrado com sucesso:', reg)
          setRegistration(reg)
        })
        .catch((err) => {
          console.error('Erro ao registrar Service Worker:', err)
        })

      // Listen for install prompt
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        setDeferredPrompt(e)
        setIsInstallable(true)
      })

      // Check if already installed
      window.addEventListener('appinstalled', () => {
        console.log('PWA foi instalado')
        setIsInstallable(false)
      })
    }
  }, [])

  const installApp = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    console.log(`User response: ${outcome}`)
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      console.log('Este navegador não suporta notificações')
      return false
    }

    if (Notification.permission === 'granted') {
      return true
    }

    if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission()
      return permission === 'granted'
    }

    return false
  }

  const subscribeToNotifications = async () => {
    if (!registration) return null

    try {
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
      })

      return subscription
    } catch (error) {
      console.error('Erro ao inscrever para notificações:', error)
      return null
    }
  }

  return {
    registration,
    isInstallable,
    installApp,
    requestNotificationPermission,
    subscribeToNotifications,
  }
}

