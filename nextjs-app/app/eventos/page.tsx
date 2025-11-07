import { getEventos } from '@/lib/wordpress'
import EventosCalendario from '@/components/calendario/EventosCalendario'
import EventoCard from '@/components/cards/EventoCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Calendário de eventos e celebrações da Capelania Jesus Bom Pastor',
}

export default async function EventosPage() {
  const eventos = await getEventos({ per_page: '20', orderby: 'date' })

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero mb-4">Eventos e Celebrações</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe nossa agenda de eventos e celebrações. Participe!
          </p>
        </div>

        {/* Calendário */}
        <div className="mb-16">
          <EventosCalendario eventos={eventos} />
        </div>

        {/* Lista de Eventos */}
        <div>
          <h2 className="text-section mb-8">Próximos Eventos</h2>
          {eventos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos.map((evento) => (
                <EventoCard key={evento.id} evento={evento} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhum evento encontrado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
