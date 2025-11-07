import AnimatedSection from '@/components/ui/AnimatedSection'
import { getExcerpt, getFeaturedImageAlt, getFeaturedImageUrl } from '@/lib/wordpress'
import { formatDateTime } from '@/lib/utils'
import { Evento } from '@/types/wordpress'
import Image from 'next/image'
import Link from 'next/link'

interface UpcomingEventsSectionProps {
  eventos: Evento[]
}

export default function UpcomingEventsSection({ eventos }: UpcomingEventsSectionProps) {
  const proximosEventos = eventos.slice(0, 4)

  if (proximosEventos.length === 0) {
    return null
  }

  return (
    <AnimatedSection delay={0.25}>
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-dourado-sacra">
              Agenda viva
            </span>
            <h2 className="text-section">Próximos encontros e celebrações</h2>
            <p className="text-lg text-gray-600 md:max-w-3xl">
              Entre momentos de oração, formação e ação social, nossa agenda está cheia de oportunidades para viver a fé em comunidade. Escolha um evento e venha participar conosco.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-8 hidden w-px bg-gradient-to-b from-dourado-sacra via-azul-claro/40 to-transparent md:block" aria-hidden />

              <div className="space-y-8">
                {proximosEventos.map((evento, index) => {
                  const imageUrl = getFeaturedImageUrl(evento) || '/images/placeholder-card.jpg'
                  const dataFormatada = formatDateTime(evento.acf?.data_inicio || evento.date || '', evento.acf?.horario)

                  return (
                    <Link
                      key={evento.id}
                      href={`/eventos/${evento.slug}`}
                      className="group relative grid gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-dourado-sacra/60 hover:shadow-xl md:grid-cols-[auto,1fr]"
                    >
                      <div className="absolute -left-1 top-8 hidden h-3 w-3 rounded-full border-2 border-white bg-dourado-sacra shadow-md md:block" />
                      <div className="relative h-32 w-32 flex-none overflow-hidden rounded-2xl border border-gray-100">
                        <Image
                          src={imageUrl}
                          alt={getFeaturedImageAlt(evento)}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide text-azul-medio">
                          <span>{`#${String(index + 1).padStart(2, '0')}`}</span>
                          {evento.acf?.tipo_evento && (
                            <span className="rounded-full bg-azul-claro/10 px-3 py-1 text-azul-profundo">
                              {evento.acf.tipo_evento}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-azul-profundo group-hover:text-dourado-sacra">
                          {evento.title.rendered}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-2 rounded-full bg-azul-medio/10 px-3 py-1">
                            <svg className="h-4 w-4 text-azul-medio" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                              <path d="M7 3a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1V4a1 1 0 1 0-2 0v1H8V4a1 1 0 0 0-1-1zm0 4h10h2a1 1 0 0 1 1 1v2H4V8a1 1 0 0 1 1-1zm-3 5h18v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                            </svg>
                            {dataFormatada}
                          </span>
                          {evento.acf?.local && (
                            <span className="inline-flex items-center gap-2 rounded-full bg-dourado-sacra/10 px-3 py-1 text-dourado-sacra">
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 2a7 7 0 0 0-7 7c0 4.67 6.23 12.06 6.49 12.37a1 1 0 0 0 1.56 0C12.77 21.06 19 13.67 19 9a7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5c0 2.78-3.18 7.36-5 9.61C10.18 16.36 7 11.78 7 9a5 5 0 0 1 5-5zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                              </svg>
                              {evento.acf.local}
                            </span>
                          )}
                        </div>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          {getExcerpt(evento, 150)}
                        </p>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-azul-medio group-hover:text-dourado-sacra">
                          Quero participar →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-3xl bg-azul-profundo p-8 text-white shadow-lg lg:p-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold leading-tight">Prepare-se para viver momentos transformadores</h3>
                <p className="text-base text-white/80">
                  Inscrições, orientações e suporte para voluntários estão disponíveis. Entre em contato com nossa equipe para colaborar e fortalecer nossa capelania.
                </p>
              </div>
              <div className="grid gap-4">
                <Link href="/fale-conosco" className="btn-primary bg-white text-azul-profundo hover:bg-off-white">
                  Falar com a equipe
                </Link>
                <Link href="/celebracaoes" className="btn-secondary border-white text-white hover:bg-white hover:text-azul-profundo">
                  Ver horários de celebrações
                </Link>
                <Link href="/contribua" className="btn-text text-white hover:border-white">
                  Quero contribuir com a missão
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}


