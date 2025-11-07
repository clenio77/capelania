import { getNoticiaBySlug, getNoticias } from '@/lib/wordpress'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'
import { formatDate } from '@/lib/utils'
import ShareButtons from '@/components/ui/ShareButtons'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface NoticiaPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const noticias = await getNoticias({ per_page: '50' })
  return noticias.map((noticia) => ({
    slug: noticia.slug,
  }))
}

export async function generateMetadata({ params }: NoticiaPageProps): Promise<Metadata> {
  const noticia = await getNoticiaBySlug(params.slug)

  if (!noticia) {
    return {}
  }

  const imageUrl = getFeaturedImageUrl(noticia)
  const excerpt = noticia.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150)
  const url = `${siteConfig.url}/noticias/${params.slug}`

  return {
    title: noticia.title.rendered,
    description: excerpt,
    openGraph: {
      title: noticia.title.rendered,
      description: excerpt,
      images: imageUrl ? [imageUrl] : [],
      type: 'article',
      publishedTime: noticia.date,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: noticia.title.rendered,
      description: excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  const noticia = await getNoticiaBySlug(params.slug)

  if (!noticia) {
    notFound()
  }

  const imageUrl = getFeaturedImageUrl(noticia)
  const shareUrl = `${siteConfig.url}/noticias/${params.slug}`

  return (
    <article className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-hero mb-4">{noticia.title.rendered}</h1>
            <div className="flex items-center text-gray-600">
              <time dateTime={noticia.date || ''}>{formatDate(noticia.date || '')}</time>
            </div>
          </div>

          {/* Imagem Destacada */}
          {imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={getFeaturedImageAlt(noticia)}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: noticia.content.rendered }} />
          </div>

          {/* Compartilhar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <ShareButtons
              url={shareUrl}
              title={noticia.title.rendered}
              description={noticia.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150)}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
