import { MetadataRoute } from 'next'
import { getComunidades, getNoticias, getEventos } from '@/lib/wordpress'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://capelania.vercel.app'

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/a-capelania`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/comunidades`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/celebracaoes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pastorais`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/boletins`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pedidos-oracao`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contribua`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fale-conosco`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  try {
    // Páginas dinâmicas - Comunidades
    const comunidades = await getComunidades().catch(() => [])
    const comunidadesPages: MetadataRoute.Sitemap = comunidades.map((comunidade) => ({
      url: `${baseUrl}/comunidades/${comunidade.slug}`,
      lastModified: new Date(comunidade.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

    // Páginas dinâmicas - Notícias
    const noticias = await getNoticias({ per_page: '100' }).catch(() => [])
    const noticiasPages: MetadataRoute.Sitemap = noticias.map((noticia) => ({
      url: `${baseUrl}/noticias/${noticia.slug}`,
      lastModified: new Date(noticia.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

    // Páginas dinâmicas - Eventos
    const eventos = await getEventos({ per_page: '100' }).catch(() => [])
    const eventosPages: MetadataRoute.Sitemap = eventos.map((evento) => ({
      url: `${baseUrl}/eventos/${evento.slug}`,
      lastModified: new Date(evento.date),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

    return [...staticPages, ...comunidadesPages, ...noticiasPages, ...eventosPages]
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error)
    return staticPages
  }
}

