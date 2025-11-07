'use client'

import { useState, useEffect } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { BookOpen, Calendar, Heart, ExternalLink } from 'lucide-react'

interface LiturgyData {
  date: string
  dayOfWeek: string
  liturgicalColor: string
  firstReading: {
    reference: string
    text: string
  }
  psalm: {
    reference: string
    response: string
  }
  gospel: {
    reference: string
    text: string
  }
  saint?: {
    name: string
    description: string
  }
  reflection: string
}

const getTodayLiturgy = (): LiturgyData => {
  const today = new Date()
  const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  
  return {
    date: `${today.getDate()} de ${months[today.getMonth()]} de ${today.getFullYear()}`,
    dayOfWeek: days[today.getDay()],
    liturgicalColor: 'verde', // Tempo Comum
    firstReading: {
      reference: 'Rm 12,5-16',
      text: 'Irmãos: Nós, embora sejamos muitos, formamos um só corpo em Cristo, e cada um de nós somos membros uns dos outros...',
    },
    psalm: {
      reference: 'Sl 130',
      response: 'Guarda minha alma na paz junto a vós, Senhor.',
    },
    gospel: {
      reference: 'Lc 14,15-24',
      text: 'Naquele tempo, quando Jesus estava à mesa, um dos convidados disse: "Feliz aquele que participar do banquete no Reino de Deus!"',
    },
    saint: {
      name: 'São Bento',
      description: 'Abade, pai do monaquismo ocidental e fundador da Ordem Beneditina.',
    },
    reflection: 'O Senhor nos convida para o banquete do Reino. Somos chamados a responder com generosidade e alegria, sem desculpas ou adiamentos. Que possamos dizer "sim" ao convite divino e participar ativamente da comunidade dos santos.',
  }
}

const liturgicalColors: Record<string, { bg: string; text: string; label: string }> = {
  verde: { bg: 'bg-green-500', text: 'text-green-700', label: 'Tempo Comum' },
  roxo: { bg: 'bg-purple-500', text: 'text-purple-700', label: 'Advento / Quaresma' },
  branco: { bg: 'bg-white border-2 border-gray-300', text: 'text-gray-700', label: 'Páscoa / Natal' },
  vermelho: { bg: 'bg-red-500', text: 'text-red-700', label: 'Espírito Santo / Mártires' },
}

export default function LiturgySection() {
  const [liturgy, setLiturgy] = useState<LiturgyData | null>(null)

  useEffect(() => {
    // Simula carregamento da liturgia
    setLiturgy(getTodayLiturgy())
  }, [])

  if (!liturgy) {
    return null
  }

  const colorInfo = liturgicalColors[liturgy.liturgicalColor] || liturgicalColors.verde

  return (
    <AnimatedSection delay={0.3}>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-azul-profundo" />
              <h2 className="text-section">Liturgia de Hoje</h2>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-lg text-gray-600">{liturgy.dayOfWeek}</p>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <p className="text-lg text-gray-600">{liturgy.date}</p>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${colorInfo.bg}`} />
                <span className="text-sm font-semibold text-gray-600">{colorInfo.label}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Leituras */}
            <div className="lg:col-span-2 space-y-6">
              {/* Primeira Leitura */}
              <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-azul-profundo/10 p-2">
                    <BookOpen className="h-5 w-5 text-azul-profundo" />
                  </div>
                  <div>
                    <h3 className="font-bold text-azul-profundo">Primeira Leitura</h3>
                    <p className="text-sm text-gray-600">{liturgy.firstReading.reference}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {liturgy.firstReading.text}
                </p>
              </div>

              {/* Salmo */}
              <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-dourado-sacra/10 p-2">
                    <Heart className="h-5 w-5 text-dourado-sacra" />
                  </div>
                  <div>
                    <h3 className="font-bold text-azul-profundo">Salmo Responsorial</h3>
                    <p className="text-sm text-gray-600">{liturgy.psalm.reference}</p>
                  </div>
                </div>
                <div className="rounded-lg bg-dourado-sacra/5 p-4 border-l-4 border-dourado-sacra">
                  <p className="font-semibold text-azul-profundo italic">
                    "{liturgy.psalm.response}"
                  </p>
                </div>
              </div>

              {/* Evangelho */}
              <div className="rounded-2xl bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-white/20 p-2">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Evangelho</h3>
                    <p className="text-sm text-white/80">{liturgy.gospel.reference}</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {liturgy.gospel.text}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Santo do Dia */}
              {liturgy.saint && (
                <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                  <div className="mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-dourado-sacra" />
                    <h3 className="font-bold text-azul-profundo">Santo do Dia</h3>
                  </div>
                  <h4 className="text-lg font-bold text-dourado-sacra mb-2">
                    {liturgy.saint.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {liturgy.saint.description}
                  </p>
                </div>
              )}

              {/* Reflexão */}
              <div className="rounded-2xl bg-gradient-to-br from-dourado-sacra/10 to-dourado-sacra/5 p-6 border border-dourado-sacra/20">
                <h3 className="font-bold text-azul-profundo mb-3">Reflexão do Dia</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {liturgy.reflection}
                </p>
              </div>

              {/* Links Externos */}
              <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-azul-profundo mb-4">Leitura Completa</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.cnbb.org.br/liturgia-diaria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-azul-profundo">
                      CNBB - Liturgia Diária
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-azul-profundo" />
                  </a>
                  <a
                    href="https://www.vaticannews.va/pt.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-azul-profundo">
                      Vatican News
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-azul-profundo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

