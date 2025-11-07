import { getComunidades, getEventos, getNoticias } from '@/lib/wordpress'
import ComunidadesCarousel from '@/components/carousel/ComunidadesCarousel'
import NoticiaCard from '@/components/cards/NoticiaCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import HighlightsSection from '@/components/sections/HighlightsSection'
import UpcomingEventsSection from '@/components/sections/UpcomingEventsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CommunityEngagementSection from '@/components/sections/CommunityEngagementSection'
import StatsSection from '@/components/sections/StatsSection'
import CalendarSection from '@/components/sections/CalendarSection'
import ChaplainMessageSection from '@/components/sections/ChaplainMessageSection'
import LiturgySection from '@/components/sections/LiturgySection'

export default async function Home() {
  const [comunidades, noticias, eventos] = await Promise.all([
    getComunidades().catch(() => []),
    getNoticias({ per_page: '6' }).catch(() => []),
    getEventos({ per_page: '12', orderby: 'date' }).catch(() => []),
  ])

  const eventosOrdenados = eventos
    .map((evento) => ({
      evento,
      inicio: new Date(evento.acf?.data_inicio || evento.date || 0),
    }))
    .filter(({ inicio }) => !Number.isNaN(inicio.getTime()))
    .sort((a, b) => a.inicio.getTime() - b.inicio.getTime())

  const now = new Date()
  const proximoEvento =
    eventosOrdenados.find(({ inicio }) => inicio.getTime() >= now.getTime())?.evento ||
    eventosOrdenados[0]?.evento ||
    null

  const proximosEventos = eventosOrdenados.map(({ evento }) => evento)

  const noticiasRecentes = noticias.slice(0, 3)
  const noticiasExtra = noticias.slice(3, 6)

  return (
    <>
      {/* Hero Carousel */}
      <section>
        <ComunidadesCarousel comunidades={comunidades} />
      </section>

      <HighlightsSection evento={proximoEvento} noticias={noticiasRecentes} />

      <StatsSection />

      <ChaplainMessageSection />

      <LiturgySection />

      {/* Últimas Notícias */}
      <AnimatedSection delay={0.4}>
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-section">Últimas Notícias</h2>
              <Link href="/noticias" className="btn-text">
                Ver todas →
              </Link>
            </div>
            {noticiasExtra.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {noticiasExtra.map((noticia) => (
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Em breve teremos notícias disponíveis.</p>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      <UpcomingEventsSection eventos={proximosEventos} />

      <CalendarSection eventos={eventos} />

      {/* Comunidades */}
      {comunidades.length > 0 && (
        <section className="section-padding bg-off-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-section">Nossas Comunidades</h2>
              <Link href="/comunidades" className="btn-text">
                Ver todas →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comunidades.slice(0, 4).map((comunidade) => (
                <Link
                  key={comunidade.id}
                  href={`/comunidades/${comunidade.slug}`}
                  className="card group"
                >
                  <div className="card-content text-center">
                    <h3 className="card-title">{comunidade.title.rendered}</h3>
                    {comunidade.acf?.nome_padroeiro && (
                      <p className="text-dourado-sacra font-medium mb-4">
                        {comunidade.acf.nome_padroeiro}
                      </p>
                    )}
                    <span className="text-azul-profundo font-semibold group-hover:text-dourado-sacra transition-colors">
                      Conhecer →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialsSection />

      <CommunityEngagementSection />

      {/* Call to Action */}
      <section className="section-padding bg-azul-profundo text-white">
        <div className="container-custom text-center">
          <h2 className="text-section text-white mb-6">
            Faça parte da nossa comunidade
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Venha participar das nossas celebrações e atividades. Sua presença é muito importante!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/celebracaoes" className="btn-primary bg-white text-azul-profundo hover:bg-off-white">
              Ver Horários
            </Link>
            <Link href="/contribua" className="btn-secondary border-white text-white hover:bg-white hover:text-azul-profundo">
              Contribuir
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

