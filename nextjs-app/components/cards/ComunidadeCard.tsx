import Link from 'next/link'
import Image from 'next/image'
import { WordPressPost } from '@/types/wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt, getExcerpt } from '@/lib/wordpress'
import { isLocalImagePath } from '@/lib/utils'

interface CardProps {
  post: WordPressPost
  href: string
}

export default function ComunidadeCard({ post, href }: CardProps) {
  const imageUrl = getFeaturedImageUrl(post) || '/images/placeholder-card.jpg'
  const isLocalImage = isLocalImagePath(imageUrl)
  const excerpt = getExcerpt(post, 120)

  return (
    <Link href={href} className="card group">
      <div className="card-image relative overflow-hidden h-auto">
        <div className="relative block aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={getFeaturedImageAlt(post)}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            priority={false}
            unoptimized={!isLocalImage}
          />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{post.title.rendered}</h3>
        {post.acf?.nome_padroeiro && (
          <p className="text-dourado-sacra font-medium mb-2">{post.acf.nome_padroeiro}</p>
        )}
        {excerpt && <p className="card-excerpt">{excerpt}</p>}
        <span className="text-azul-profundo font-semibold group-hover:text-dourado-sacra transition-colors">
          Ver mais →
        </span>
      </div>
    </Link>
  )
}

