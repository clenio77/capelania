import Link from 'next/link'
import { siteConfig } from '@/config/site'

function getWhatsAppUrl(number: string, message?: string) {
  const sanitized = number.replace(/\D/g, '')
  if (!sanitized) return null

  const base = `https://wa.me/${sanitized}`
  if (!message) return base

  return `${base}?text=${encodeURIComponent(message)}`
}

export default function FloatingWhatsApp() {
  const whatsappConfig = siteConfig.whatsapp
  if (!whatsappConfig?.number) {
    return null
  }

  const whatsappUrl = getWhatsAppUrl(whatsappConfig.number, whatsappConfig.defaultMessage)

  if (!whatsappUrl) {
    return null
  }

  return (
    <div className="fixed bottom-28 right-4 z-50 flex flex-col items-end space-y-2">
      <div className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-azul-profundo shadow-lg ring-1 ring-azul-profundo/10">
        Fale conosco
      </div>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="group inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8"
          role="img"
          aria-hidden
        >
          <path d="M16.02 2.67c-7.19 0-13.03 5.84-13.03 13.03 0 2.3.6 4.55 1.75 6.54L2.67 29.33l7.25-1.89c1.89 1.03 4.02 1.57 6.11 1.57h.01c7.19 0 13.03-5.84 13.03-13.03 0-3.48-1.35-6.75-3.82-9.22-2.47-2.47-5.74-3.82-9.22-3.82zm-.01 23.77h-.01c-1.79 0-3.55-.48-5.09-1.38l-.36-.21-4.3 1.12 1.15-4.19-.22-.43c-1.08-1.97-1.66-4.21-1.66-6.48 0-7.18 5.84-13.02 13.03-13.02 3.47 0 6.73 1.35 9.18 3.79 2.45 2.45 3.8 5.72 3.8 9.19 0 7.19-5.84 13.03-13.02 13.03zm7.5-9.75c-.41-.2-2.42-1.19-2.8-1.32-.38-.14-.66-.2-.94.2-.28.41-1.08 1.32-1.32 1.59-.24.28-.48.31-.89.1-.41-.2-1.73-.64-3.29-2.04-1.22-1.08-2.05-2.4-2.29-2.81-.24-.41-.03-.63.18-.82.18-.18.41-.48.62-.72.21-.24.28-.41.41-.69.14-.28.07-.52-.03-.72-.1-.2-.94-2.26-1.29-3.11-.34-.82-.7-.71-.94-.72-.24 0-.52-.01-.8-.01-.28 0-.73.1-1.11.51-.38.41-1.46 1.43-1.46 3.49 0 2.06 1.49 4.05 1.7 4.34.21.28 2.93 4.48 7.1 6.28.99.43 1.76.68 2.36.87.99.31 1.9.27 2.63.16.8-.12 2.42-.99 2.76-1.94.34-.94.34-1.75.24-1.94-.1-.21-.37-.33-.78-.52z" fill="currentColor" />
        </svg>
      </Link>
    </div>
  )
}


