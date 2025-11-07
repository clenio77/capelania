'use client'

import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Users, Church, Calendar, Heart } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

interface StatConfig {
  id: string
  value: number
  labelKey: string
  suffixKey?: string
  icon: React.ReactNode
  color: string
}

const statsConfig: StatConfig[] = [
  {
    id: 'communities',
    value: 4,
    labelKey: 'items.communities.label',
    suffixKey: 'items.communities.suffix',
    icon: <Church className="h-8 w-8" />,
    color: 'text-azul-profundo',
  },
  {
    id: 'families',
    value: 500,
    labelKey: 'items.families.label',
    suffixKey: 'items.families.suffix',
    icon: <Users className="h-8 w-8" />,
    color: 'text-dourado-sacra',
  },
  {
    id: 'events',
    value: 50,
    labelKey: 'items.sacraments.label',
    suffixKey: 'items.sacraments.suffix',
    icon: <Calendar className="h-8 w-8" />,
    color: 'text-azul-profundo',
  },
  {
    id: 'pastorals',
    value: 20,
    labelKey: 'items.volunteers.label',
    suffixKey: 'items.volunteers.suffix',
    icon: <Heart className="h-8 w-8" />,
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

interface StatCardProps {
  stat: StatConfig
  index: number
  label: string
  suffix?: string
}

function StatCard({ stat, index, label, suffix }: StatCardProps) {
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
      <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-dourado-sacra/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={`mb-4 rounded-full bg-gradient-to-br from-azul-profundo/10 to-dourado-sacra/10 p-4 transition-transform duration-500 group-hover:scale-110 ${stat.color}`}
        >
          {stat.icon}
        </div>

        <div className="mb-2 text-5xl font-bold text-azul-profundo">
          {count}
          {suffix && <span className="text-dourado-sacra">{suffix}</span>}
        </div>

        <div className="text-lg font-semibold text-gray-600">{label}</div>
      </div>

      <div className="absolute inset-0 rounded-2xl border-2 border-dourado-sacra/0 transition-all duration-500 group-hover:border-dourado-sacra/30" />
    </div>
  )
}

export default function StatsSection() {
  const t = useTranslations('stats')

  return (
    <AnimatedSection delay={0.2}>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-section mb-4">{t('title')}</h2>
            <p className="mx-auto max-w-2xl text-body text-gray-600">
              {t('description')}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statsConfig.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                index={index}
                label={t(stat.labelKey)}
                suffix={t(stat.suffixKey ?? '', '')}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              {t('ctaText')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/comunidades" className="btn-primary">
                {t('ctaCommunities')}
              </a>
              <a href="/pastorais" className="btn-secondary">
                {t('ctaPastorals')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
