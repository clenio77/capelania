'use client'

import { useState } from 'react'
import { Heart, Send, CheckCircle2, AlertCircle } from 'lucide-react'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simula envio (aqui você integraria com backend/email)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus('success')
      setMessage('Seu pedido de oração foi recebido com carinho. Deus te abençoe!')
      
      // Limpa formulário após 3 segundos
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
      setMessage('Erro ao enviar pedido. Tente novamente.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dourado-sacra/10 mb-4">
          <Heart className="w-8 h-8 text-dourado-sacra" />
        </div>
        <h2 className="text-3xl font-bold text-azul-profundo mb-3">
          Pedido de Oração
        </h2>
        <p className="text-gray-600">
          Compartilhe suas intenções conosco. Nossa comunidade estará em oração por você.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-800 text-sm">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm">{message}</p>
          </div>
        )}

        <div className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Nome <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all"
              placeholder="Digite seu nome"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all"
              placeholder="seu@email.com"
            />
          </div>

          {/* Telefone */}
          <div>
            <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
              Telefone (opcional)
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all"
              placeholder="(00) 00000-0000"
            />
          </div>

          {/* Categoria */}
          <div>
            <label htmlFor="categoria" className="block text-sm font-semibold text-gray-700 mb-2">
              Categoria <span className="text-red-500">*</span>
            </label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all"
            >
              <option value="saude">Saúde</option>
              <option value="familia">Família</option>
              <option value="trabalho">Trabalho</option>
              <option value="financeiro">Financeiro</option>
              <option value="estudos">Estudos</option>
              <option value="espiritual">Espiritual</option>
              <option value="agradecimento">Agradecimento</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Pedido */}
          <div>
            <label htmlFor="pedido" className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Pedido <span className="text-red-500">*</span>
            </label>
            <textarea
              id="pedido"
              name="pedido"
              value={formData.pedido}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all resize-none"
              placeholder="Compartilhe sua intenção de oração..."
            />
            <p className="text-xs text-gray-500 mt-2">
              Seus dados serão tratados com total confidencialidade e respeito.
            </p>
          </div>

          {/* Compartilhar */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="compartilhar"
              name="compartilhar"
              checked={formData.compartilhar}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-azul-profundo border-gray-300 rounded focus:ring-azul-profundo"
            />
            <label htmlFor="compartilhar" className="text-sm text-gray-600">
              Autorizo compartilhar meu pedido (sem identificação pessoal) com a comunidade para orações coletivas
            </label>
          </div>

          {/* Botão Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-azul-profundo text-white py-4 px-6 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Pedido
              </>
            )}
          </button>
        </div>

        {/* Info adicional */}
        <div className="mt-6 p-4 bg-dourado-sacra/5 rounded-lg border border-dourado-sacra/20">
          <p className="text-xs text-gray-600 text-center">
            <Heart className="w-4 h-4 inline-block text-dourado-sacra mr-1" />
            "Peçam e vocês receberão, procurem e vocês acharão, batam e a porta será aberta para vocês." <br />
            <span className="font-semibold">Mateus 7:7</span>
          </p>
        </div>
      </form>
    </div>
  )
}

