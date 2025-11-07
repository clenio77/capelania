'use client'

import { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

interface NewsletterFormProps {
  variant?: 'default' | 'compact' | 'inline'
  showTitle?: boolean
}

export default function NewsletterForm({
  variant = 'default',
  showTitle = true,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const t = useTranslations('newsletter')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      setMessage(t('success'))

      setTimeout(() => {
        setEmail('')
        setNome('')
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage(t('error'))
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  if (variant === 'compact') {
    return (
      <div className="max-w-md">
        {showTitle && (
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-bold">{t('compactTitle')}</h3>
            <p className="text-sm text-gray-600">{t('compactDescription')}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('inlinePlaceholder')}
            required
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-azul-profundo py-3 px-4 font-semibold text-white transition-all hover:bg-azul-profundo/90 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                {t('submitting')}
              </>
            ) : (
              <>
                <Mail className="h-5 w-5" />
                {t('submit')}
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-green-800">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-800">{message}</p>
          </div>
        )}
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('inlinePlaceholder')}
            required
            disabled={status === 'loading'}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-azul-profundo px-6 py-3 font-semibold text-white transition-all hover:bg-azul-profundo/90 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Send className="h-5 w-5" />
                {t('submit')}
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-green-800">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-800">{message}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md">
      {showTitle && (
        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-azul-profundo/10">
            <Mail className="h-8 w-8 text-azul-profundo" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-azul-profundo">
            {t('title')}
          </h2>
          <p className="text-gray-600">
            {t('description')}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        {status === 'success' && (
          <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-green-800">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-800">{message}</p>
          </div>
        )}

        <div>
          <label htmlFor="nome-newsletter" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('nameLabel')}
          </label>
          <input
            type="text"
            id="nome-newsletter"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={t('namePlaceholder')}
            required
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email-newsletter" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('emailLabel')}
          </label>
          <input
            type="email"
            id="email-newsletter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            required
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-azul-profundo py-4 px-6 font-semibold text-white transition-all hover:bg-azul-profundo/90 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              {t('submitting')}
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              {t('submitNow')}
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500">
          {t('privacy')}
        </p>
      </form>
    </div>
  )
}
