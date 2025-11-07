'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { useCountdown } from '@/hooks/useCountdown'
import { getExcerpt, getFeaturedImageAlt, getFeaturedImageUrl } from '@/lib/wordpress'
import { formatDateTime } from '@/lib/utils'
import { Evento, Noticia } from '@/types/wordpress'
import Image from 'next/image'
import Link from 'next/link'

interface HighlightsSectionProps {
  evento?: Evento | null
  noticias: Noticia[]
}

function buildCountdownTarget(evento?: Evento | null): string | null {
  if (!evento) return null

  // Tenta pegar a data do evento de várias fontes possíveis
  const datePart = evento.acf?.data_evento || evento.acf?.data_inicio || evento.date
  if (!datePart) return null

  // Tenta pegar a hora do evento
  const timePart = evento.acf?.hora_evento || evento.acf?.horario || '18:00'
  
  // Se datePart já é uma string de data completa (YYYY-MM-DD), usa diretamente
  let isoDate: string
  if (typeof datePart === 'string' && datePart.match(/^\d{4}-\d{2}-\d{2}$/)) {
    isoDate = datePart
  } else {
    const normalizedDate = new Date(datePart)
    if (Number.isNaN(normalizedDate.getTime())) {
      return null
    }
    isoDate = normalizedDate.toISOString().split('T')[0]
  }

  return `${isoDate}T${timePart}:00`
}

export default function HighlightsSection({ evento, noticias }: HighlightsSectionProps) {
  const countdownTarget = buildCountdownTarget(evento)
  const countdown = useCountdown(countdownTarget)
  const destaqueNoticias = noticias.slice(0, 2)

  // Debug logs
  if (typeof window !== 'undefined') {
    console.log('🎯 Evento:', evento?.title.rendered)
    console.log('📅 Data do evento:', evento?.acf?.data_evento)
    console.log('⏰ Hora do evento:', evento?.acf?.hora_evento)
    console.log('🎯 Countdown target:', countdownTarget)
    console.log('⏱️ Countdown state:', countdown)
  }

  return (
    <AnimatedSection delay={0.15}>
      <section className="section-padding bg-gradient-to-br from-gray-900 via-azul-profundo to-gray-900 relative overflow-hidden">
        {/* Efeitos de fundo animados */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-dourado-sacra rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-azul-claro rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            {/* Destaque do próximo evento */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-azul-profundo via-purple-900 to-azul-profundo text-white shadow-2xl border border-white/10 backdrop-blur-sm">
              {/* Efeitos de brilho interno */}
              <div className="absolute inset-0 opacity-40" aria-hidden>
                <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-dourado-sacra blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl animate-pulse animation-delay-1000" />
                <div className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse animation-delay-2000" />
              </div>
              
              {/* Padrão de grade sutil */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
              <div className="relative z-10 grid gap-8 p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:p-12">
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
                      Próximo evento
                    </span>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
                      {evento ? evento.title.rendered : 'Acompanhe nossa agenda especial'}
                    </h2>
                    <p className="mt-4 max-w-xl text-lg text-white/80">
                      {evento?.excerpt?.rendered
                        ? getExcerpt(evento, 160)
                        : 'Descubra os encontros, celebrações e experiências de fé que estão por vir em nossa capelania.'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {['dias', 'horas', 'minutos', 'segundos'].map((label, index) => {
                      const value = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds][index]
                      return (
                        <div
                          key={label}
                          className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-md"
                        >
                          <div className="text-3xl font-bold tracking-tight">
                            {countdown.finished ? '00' : value}
                          </div>
                          <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">
                            {label}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/eventos" className="btn-primary bg-white text-azul-profundo hover:bg-off-white">
                      Ver agenda completa
                    </Link>
                    {evento && (
                      <Link
                        href={`/eventos/${evento.slug}`}
                        className="btn-secondary border-white text-white hover:bg-white hover:text-azul-profundo"
                      >
                        Detalhes do evento
                      </Link>
                    )}
                  </div>
                </div>

                <div className="relative flex flex-col justify-between gap-6">
                  {evento ? (
                    <>
                      <div className="overflow-hidden rounded-3xl border border-white/20">
                        <Image
                          src={getFeaturedImageUrl(evento) || '/images/placeholder-banner.jpg'}
                          alt={getFeaturedImageAlt(evento)}
                          width={640}
                          height={400}
                          className="h-64 w-full object-cover"
                          priority
                        />
                      </div>
                      <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
                        <div className="flex flex-col gap-2 text-sm">
                          <div className="text-white/70">Quando</div>
                          <div className="text-lg font-semibold text-white">
                            {formatDateTime(evento.acf?.data_inicio || evento.date, evento.acf?.horario)}
                          </div>
                          {evento.acf?.local && (
                            <>
                              <div className="pt-3 text-white/70">Onde</div>
                              <div className="text-base font-medium text-white">{evento.acf.local}</div>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg">
                      <p className="text-lg text-white/80">
                        Em breve divulgaremos o próximo grande encontro. Fique atento às novidades!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Notícias em destaque */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-section text-2xl font-semibold text-white">Em destaque agora</h3>
                <p className="mt-2 text-base text-gray-300">
                  Histórias, ações e oportunidades que estão movimentando nossa comunidade de fé.
                </p>
              </div>
              <div className="grid gap-6">
                {destaqueNoticias.map((noticia, index) => {
                  const imageUrl = getFeaturedImageUrl(noticia) || '/images/placeholder-card.jpg'
                  return (
                    <Link
                      key={noticia.id}
                      href={`/noticias/${noticia.slug}`}
                      className="group relative overflow-hidden flex gap-4 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-4 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-dourado-sacra/60 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Efeito de brilho no hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                      </div>
                      
                      <div className="relative h-28 w-28 flex-none overflow-hidden rounded-2xl ring-2 ring-white/20 group-hover:ring-dourado-sacra/50 transition-all duration-300">
                        <Image
                          src={imageUrl}
                          alt={getFeaturedImageAlt(noticia)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                        />
                        {/* Overlay gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="relative flex flex-1 flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-dourado-sacra transition-colors duration-300">
                            {noticia.title.rendered}
                          </h4>
                          <p className="mt-2 line-clamp-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                            {getExcerpt(noticia, 140)}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center text-sm font-semibold text-dourado-sacra group-hover:text-white transition-colors duration-300">
                          Ler reportagem completa →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="pt-2">
                <Link href="/noticias" className="btn-text">
                  Ver todas as notícias
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}


