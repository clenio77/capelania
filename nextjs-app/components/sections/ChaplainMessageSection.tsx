'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { useLocale } from '@/hooks/useTranslations'
import { useTranslations } from '@/hooks/useTranslations'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type LocaleMessage = {
  title: string
  date: string
  excerpt: string
  chaplainName: string
  chaplainRole: string
}

const messages: Record<string, LocaleMessage> = {
  pt: {
    title: 'Uma Comunidade de Esperança e Fé',
    date: 'Novembro de 2025',
    excerpt:
      'Queridos irmãos e irmãs, é com grande alegria que me dirijo a vocês neste mês dedicado às almas e à reflexão sobre a vida eterna. Nossa capelania tem sido um farol de esperança e fé para tantas famílias, e isso só é possível pela graça de Deus e pelo empenho de cada um. Convido todos a participarem das celebrações e atividades pastorais, fortalecendo os laços de fraternidade que nos unem como comunidade.',
    chaplainName: 'Pe. João Silva',
    chaplainRole: 'Capelão Militar',
  },
  en: {
    title: 'A Community of Hope and Faith',
    date: 'November 2025',
    excerpt:
      'Dear brothers and sisters, it is with great joy that I speak to you in this month dedicated to eternal life. Our chaplaincy has been a beacon of hope and faith for so many families, made possible by God’s grace and your dedication. I invite everyone to take part in our celebrations and ministries, strengthening the bonds of fraternity that unite us as a community.',
    chaplainName: 'Fr. John Silva',
    chaplainRole: 'Military Chaplain',
  },
  es: {
    title: 'Una Comunidad de Esperanza y Fe',
    date: 'Noviembre de 2025',
    excerpt:
      'Queridos hermanos y hermanas, con gran alegría me dirijo a ustedes en este mes dedicado a la vida eterna. Nuestra capellanía ha sido un faro de esperanza y fe para muchas familias, gracias a la gracia de Dios y al compromiso de cada uno. Los invito a participar en nuestras celebraciones y actividades pastorales, fortaleciendo los lazos de fraternidad que nos unen como comunidad.',
    chaplainName: 'P. Juan Silva',
    chaplainRole: 'Capellán Militar',
  },
}

export default function ChaplainMessageSection() {
  const { locale } = useLocale()
  const t = useTranslations('chaplain')
  const message = messages[locale] || messages.pt

  return (
    <AnimatedSection delay={0.2}>
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-azul-profundo via-azul-profundo/95 to-azul-profundo/90 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-dourado-sacra blur-3xl" />
          <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm">
                <Quote className="h-4 w-4" />
                {t('badge')}
              </span>
            </div>

            <h2 className="mb-4 text-center text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {message.title}
            </h2>

            <p className="mb-8 text-center text-lg text-white/70">
              {message.date}
            </p>

            <div className="relative">
              <Quote className="absolute -left-4 -top-4 h-16 w-16 text-dourado-sacra/30" />
              <Quote className="absolute -bottom-4 -right-4 h-16 w-16 rotate-180 text-dourado-sacra/30" />

              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/90 backdrop-blur-sm md:p-12">
                <p className="text-lg leading-relaxed md:text-xl">
                  {message.excerpt}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-dourado-sacra/50 bg-white/10 backdrop-blur-sm">
                  <Image
                    src="/images/placeholder-priest.jpg"
                    alt={message.chaplainName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-azul-profundo bg-green-400" aria-label={t('status')} />
              </div>

              <div className="text-center">
                <p className="mb-1 text-xl font-bold text-white">
                  {message.chaplainName}
                </p>
                <p className="text-sm uppercase tracking-wide text-white/70">
                  {message.chaplainRole}
                </p>
              </div>

              <div className="h-px w-24 bg-gradient-to-r from-transparent via-dourado-sacra to-transparent" />

              <Link
                href="/a-capelania"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-dourado-sacra hover:bg-white/20"
              >
                <span>{t('cta')}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </section>
    </AnimatedSection>
  )
}
