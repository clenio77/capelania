'use client'

import { useState, useEffect } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { BookOpen, Calendar, Heart, ExternalLink } from 'lucide-react'
import { useTranslations, useLocale } from '@/hooks/useTranslations'

interface LiturgyData {
  date: string
  dayOfWeek: string
  liturgicalColor: 'verde' | 'roxo' | 'branco' | 'vermelho'
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

const liturgicalColorStyles: Record<LiturgyData['liturgicalColor'], { bg: string; text: string }> = {
  verde: { bg: 'bg-green-500', text: 'text-green-700' },
  roxo: { bg: 'bg-purple-500', text: 'text-purple-700' },
  branco: { bg: 'bg-white border-2 border-gray-300', text: 'text-gray-700' },
  vermelho: { bg: 'bg-red-500', text: 'text-red-700' },
}

type LocaleMap = Record<string, string>
const localeMap: LocaleMap = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
}

function getTodayLiturgy(locale: string): LiturgyData {
  const today = new Date()
  const intlLocale = localeMap[locale] || 'pt-BR'

  const dayFormatter = new Intl.DateTimeFormat(intlLocale, { weekday: 'long' })
  const dateFormatter = new Intl.DateTimeFormat(intlLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return {
    date: dateFormatter.format(today),
    dayOfWeek: dayFormatter.format(today),
    liturgicalColor: 'verde',
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
    reflection:
      'O Senhor nos convida para o banquete do Reino. Somos chamados a responder com generosidade e alegria, sem desculpas ou adiamentos. Que possamos dizer "sim" ao convite divino e participar ativamente da comunidade dos santos.',
  }
}

export default function LiturgySection() {
  const { locale } = useLocale()
  const t = useTranslations('liturgy')
  const [liturgy, setLiturgy] = useState<LiturgyData | null>(null)

  useEffect(() => {
    setLiturgy(getTodayLiturgy(locale))
  }, [locale])

  if (!liturgy) {
    return null
  }

  const colorInfo = liturgicalColorStyles[liturgy.liturgicalColor] || liturgicalColorStyles.verde

  return (
    <AnimatedSection delay={0.3}>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-azul-profundo" />
              <h2 className="text-section">{t('title')}</h2>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-lg text-gray-600 capitalize">{liturgy.dayOfWeek}</p>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <p className="text-lg text-gray-600 capitalize">{liturgy.date}</p>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${colorInfo.bg}`} />
                <span className="text-sm font-semibold text-gray-600">
                  {t(`colors.${liturgy.liturgicalColor}`)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-azul-profundo/10 p-2">
                    <BookOpen className="h-5 w-5 text-azul-profundo" />
                  </div>
                  <div>
                    <h3 className="font-bold text-azul-profundo">{t('firstReading')}</h3>
                    <p className="text-sm text-gray-600">{liturgy.firstReading.reference}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-gray-700">{liturgy.firstReading.text}</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-dourado-sacra/10 p-2">
                    <Heart className="h-5 w-5 text-dourado-sacra" />
                  </div>
                  <div>
                    <h3 className="font-bold text-azul-profundo">{t('psalm')}</h3>
                    <p className="text-sm text-gray-600">{liturgy.psalm.reference}</p>
                  </div>
                </div>
                <div className="rounded-lg border-l-4 border-dourado-sacra bg-dourado-sacra/5 p-4">
                  <p className="italic font-semibold text-azul-profundo">“{liturgy.psalm.response}”</p>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-azul-profundo to-azul-profundo/90 p-6 text-white shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-white/20 p-2">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{t('gospel')}</h3>
                    <p className="text-sm text-white/80">{liturgy.gospel.reference}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-white/90">{liturgy.gospel.text}</p>
              </div>
            </div>

            <div className="space-y-6">
              {liturgy.saint && (
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-dourado-sacra" />
                    <h3 className="font-bold text-azul-profundo">{t('saintOfDay')}</h3>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-dourado-sacra">{liturgy.saint.name}</h4>
                  <p className="leading-relaxed text-sm text-gray-600">{liturgy.saint.description}</p>
                </div>
              )}

              <div className="rounded-2xl border border-dourado-sacra/20 bg-gradient-to-br from-dourado-sacra/10 to-dourado-sacra/5 p-6">
                <h3 className="mb-3 font-bold text-azul-profundo">{t('reflection')}</h3>
                <p className="leading-relaxed text-sm text-gray-700">{liturgy.reflection}</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <h3 className="mb-4 font-bold text-azul-profundo">{t('linksTitle', 'Leitura Completa')}</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.cnbb.org.br/liturgia-diaria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-gray-50"
                  >
                    <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-azul-profundo">
                      {t('cnbb')}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-azul-profundo" />
                  </a>
                  <a
                    href="https://www.vaticannews.va/pt.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-gray-50"
                  >
                    <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-azul-profundo">
                      {t('vatican')}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-azul-profundo" />
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
