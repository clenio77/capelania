'use client'

import { useState } from 'react'
import { Heart, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

interface FormData {
  nome: string
  email: string
  telefone: string
  pedido: string
  categoria: string
  compartilhar: boolean
}

export default function PrayerRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    pedido: '',
    categoria: 'saude',
    compartilhar: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const t = useTranslations('prayer')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      setMessage(t('success'))

      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          pedido: '',
          categoria: 'saude',
          compartilhar: false,
        })
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage(t('error'))
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-dourado-sacra/10">
          <Heart className="h-8 w-8 text-dourado-sacra" />
        </div>
        <h2 className="mb-3 text-3xl font-bold text-azul-profundo">
          {t('title')}
        </h2>
        <p className="text-gray-600">
          {t('description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
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
          <label htmlFor="nome" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('fields.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
            placeholder={t('placeholders.name')}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('fields.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
            placeholder={t('placeholders.email')}
          />
        </div>

        <div>
          <label htmlFor="telefone" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('fields.phone')}
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
            placeholder={t('placeholders.phone')}
          />
        </div>

        <div>
          <label htmlFor="categoria" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('fields.category')} <span className="text-red-500">*</span>
          </label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
          >
            <option value="saude">{t('categories.health')}</option>
            <option value="familia">{t('categories.family')}</option>
            <option value="trabalho">{t('categories.work')}</option>
            <option value="financeiro">{t('categories.financial')}</option>
            <option value="estudos">{t('categories.studies')}</option>
            <option value="espiritual">{t('categories.spiritual')}</option>
            <option value="agradecimento">{t('categories.gratitude')}</option>
            <option value="outro">{t('categories.other')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="pedido" className="mb-2 block text-sm font-semibold text-gray-700">
            {t('fields.request')} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="pedido"
            name="pedido"
            value={formData.pedido}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
            placeholder={t('placeholders.request')}
          />
          <p className="mt-2 text-xs text-gray-500">
            {t('disclaimer')}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="compartilhar"
            name="compartilhar"
            checked={formData.compartilhar}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-azul-profundo focus:ring-azul-profundo"
          />
          <label htmlFor="compartilhar" className="text-sm text-gray-600">
            {t('fields.share')}
          </label>
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
              {t('submit')}
            </>
          )}
        </button>

        <div className="rounded-lg border border-dourado-sacra/20 bg-dourado-sacra/5 p-4 text-center text-xs text-gray-600">
          <Heart className="mr-1 inline-block h-4 w-4 text-dourado-sacra" />
          {t('quote')} <br />
          <span className="font-semibold">{t('quoteReference')}</span>
        </div>
      </form>
    </div>
  )
}
