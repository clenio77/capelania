import Link from 'next/link'
import Image from 'next/image'
import { Evento } from '@/types/wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt, getExcerpt } from '@/lib/wordpress'
import { formatDateTime } from '@/lib/utils'

interface EventoCardProps {
  evento: Evento
}

export default function EventoCard({ evento }: EventoCardProps) {
  const imageUrl = getFeaturedImageUrl(evento) || '/images/placeholder-card.jpg'
  const excerpt = getExcerpt(evento, 100)
  const dataFormatada = formatDateTime(evento.acf?.data_inicio || evento.date, evento.acf?.horario)

  return (
    <Link href={`/eventos/${evento.slug}`} className="card group">
      <div className="card-image relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={getFeaturedImageAlt(evento)}
          width={400}
          height={240}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-dourado-sacra text-white px-3 py-1 rounded">
          <span className="text-sm font-semibold">
            {dataFormatada}
          </span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{evento.title.rendered}</h3>
        {evento.acf?.local && (
          <p className="text-gray-600 mb-2">📍 {evento.acf.local}</p>
        )}
        {excerpt && <p className="card-excerpt">{excerpt}</p>}
        <span className="text-azul-profundo font-semibold group-hover:text-dourado-sacra transition-colors">
          Ver detalhes →
        </span>
      </div>
    </Link>
  )
}

