import Link from 'next/link'
import Image from 'next/image'
import { Noticia } from '@/types/wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt, getExcerpt } from '@/lib/wordpress'
import { formatDate } from '@/lib/utils'

interface NoticiaCardProps {
  noticia: Noticia
}

export default function NoticiaCard({ noticia }: NoticiaCardProps) {
  const imageUrl = getFeaturedImageUrl(noticia) || '/images/placeholder-card.jpg'
  const excerpt = getExcerpt(noticia, 100)

  return (
    <Link href={`/noticias/${noticia.slug}`} className="card group">
      <div className="card-image relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={getFeaturedImageAlt(noticia)}
          width={400}
          height={240}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded">
          <span className="text-sm text-azul-profundo font-semibold">
            {formatDate(noticia.date)}
          </span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{noticia.title.rendered}</h3>
        {excerpt && <p className="card-excerpt">{excerpt}</p>}
        <span className="text-azul-profundo font-semibold group-hover:text-dourado-sacra transition-colors">
          Ler mais →
        </span>
      </div>
    </Link>
  )
}

