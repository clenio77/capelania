'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Users, Church, Calendar, Heart } from 'lucide-react'

interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  icon: React.ReactNode
  color: string
}

const stats: Stat[] = [
  {
    id: 'comunidades',
    label: 'Comunidades',
    value: 4,
    icon: <Church className="w-8 h-8" />,
    color: 'text-azul-profundo',
  },
  {
    id: 'familias',
    label: 'Famílias Atendidas',
    value: 500,
    suffix: '+',
    icon: <Users className="w-8 h-8" />,
    color: 'text-dourado-sacra',
  },
  {
    id: 'eventos',
    label: 'Eventos por Ano',
    value: 50,
    suffix: '+',
    icon: <Calendar className="w-8 h-8" />,
    color: 'text-azul-profundo',
  },
  {
    id: 'pastorais',
    label: 'Pastorais Ativas',
    value: 20,
    suffix: '+',
    icon: <Heart className="w-8 h-8" />,
    color: 'text-dourado-sacra',
  },
]

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, shouldStart])

  return count
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.value, 2000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradiente de fundo no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-dourado-sacra/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Ícone */}
        <div
          className={`mb-4 rounded-full bg-gradient-to-br from-azul-profundo/10 to-dourado-sacra/10 p-4 transition-transform duration-500 group-hover:scale-110 ${stat.color}`}
        >
          {stat.icon}
        </div>

        {/* Número */}
        <div className="mb-2 text-5xl font-bold text-azul-profundo">
          {count}
          {stat.suffix && <span className="text-dourado-sacra">{stat.suffix}</span>}
        </div>

        {/* Label */}
        <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
      </div>

      {/* Borda animada no hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-dourado-sacra/0 transition-all duration-500 group-hover:border-dourado-sacra/30" />
    </div>
  )
}

export default function StatsSection() {
  return (
    <AnimatedSection delay={0.2}>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-section mb-4">A Capelania em Números</h2>
            <p className="mx-auto max-w-2xl text-body text-gray-600">
              Conheça o alcance e o impacto da nossa missão evangelizadora. Juntos, construímos uma
              comunidade de fé, amor e serviço.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Faça parte dessa história! Sua presença fortalece nossa comunidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/comunidades" className="btn-primary">
                Conheça as Comunidades
              </a>
              <a href="/pastorais" className="btn-secondary">
                Participe das Pastorais
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

