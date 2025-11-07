'use client'

import { useState } from 'react'
import { Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react'

interface NewsletterFormProps {
  variant?: 'default' | 'compact' | 'inline'
  showTitle?: boolean
}

export default function NewsletterForm({ 
  variant = 'default',
  showTitle = true 
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simula envio (integrar com backend/Mailchimp/etc)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus('success')
      setMessage('Inscrição realizada com sucesso! Verifique seu email.')
      
      // Limpa formulário após 3 segundos
      setTimeout(() => {
        setEmail('')
        setNome('')
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage('Erro ao realizar inscrição. Tente novamente.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  // Variante Compact (para footer)
  if (variant === 'compact') {
    return (
      <div className="max-w-md">
        {showTitle && (
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Receba nossas novidades</h3>
            <p className="text-sm text-gray-600">
              Cadastre-se e receba atualizações da capelania
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-azul-profundo text-white py-3 px-4 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Cadastrando...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Cadastrar
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-800 text-sm">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">{message}</p>
          </div>
        )}
      </div>
    )
  }

  // Variante Inline (horizontal)
  if (variant === 'inline') {
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-azul-profundo text-white px-6 py-3 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all flex items-center gap-2 disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                Cadastrar
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-800 text-sm">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">{message}</p>
          </div>
        )}
      </div>
    )
  }

  // Variante Default (completa)
  return (
    <div className="max-w-md mx-auto">
      {showTitle && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-azul-profundo/10 mb-4">
            <Mail className="w-8 h-8 text-azul-profundo" />
          </div>
          <h2 className="text-2xl font-bold text-azul-profundo mb-2">
            Receba Nossas Novidades
          </h2>
          <p className="text-gray-600">
            Cadastre-se para receber boletins, convites para eventos e atualizações da capelania
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 space-y-4">
        {status === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-800 text-sm">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">{message}</p>
          </div>
        )}

        <div>
          <label htmlFor="nome-newsletter" className="block text-sm font-semibold text-gray-700 mb-2">
            Nome
          </label>
          <input
            type="text"
            id="nome-newsletter"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email-newsletter" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email-newsletter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-azul-profundo text-white py-4 px-6 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Cadastrando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Cadastrar Agora
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Seus dados são seguros e você pode cancelar a inscrição a qualquer momento.
        </p>
      </form>
    </div>
  )
}

