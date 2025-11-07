'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Aqui você pode integrar com um serviço de email ou API
      // Por enquanto, apenas simula o envio
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
      
      // Limpa a mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
          Nome *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dourado-sacra focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dourado-sacra focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
          Assunto *
        </label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dourado-sacra focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dourado-sacra focus:border-transparent transition-all"
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          Erro ao enviar mensagem. Tente novamente.
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  )
}

