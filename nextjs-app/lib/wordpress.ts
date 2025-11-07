import { siteConfig } from '@/config/site'
import { WordPressPost, Comunidade, Evento, Pastoral, Noticia } from '@/types/wordpress'
import { mockComunidades, mockNoticias, mockEventos, mockPastorais } from './mock-data'

const API_URL = siteConfig.wordpressApiUrl

// Usar dados mock importados
const MOCK_COMUNIDADES: Comunidade[] = mockComunidades
const MOCK_NOTICIAS: Noticia[] = mockNoticias
const MOCK_EVENTOS: Evento[] = mockEventos
const MOCK_PASTORAIS: Pastoral[] = mockPastorais


// Função genérica para buscar posts
async function fetchPosts<T extends WordPressPost>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T[]> {
  const queryParams = new URLSearchParams({
    _embed: 'true',
    ...params,
  })

  try {
    const res = await fetch(`${API_URL}/${endpoint}?${queryParams.toString()}`, {
      next: { revalidate: 3600 }, // Revalidar a cada hora
    })

    if (!res.ok) {
      // Se não conseguir buscar do WordPress, retorna dados mock para comunidades
      if (endpoint === 'comunidade') {
        return MOCK_COMUNIDADES as T[]
      }
      console.warn(`Failed to fetch ${endpoint}: ${res.statusText}`)
      return []
    }

    return res.json()
  } catch (error) {
    // Em caso de erro (ex: WordPress não configurado), retorna dados mock para comunidades
    if (endpoint === 'comunidade') {
      return MOCK_COMUNIDADES as T[]
    }
    console.warn(`Error fetching ${endpoint}:`, error)
    return []
  }
}

// Função para buscar post por slug
async function fetchPostBySlug<T extends WordPressPost>(
  endpoint: string,
  slug: string
): Promise<T | null> {
  try {
    const posts = await fetchPosts<T>(endpoint, { slug })

    if (!posts || posts.length === 0) {
      return null
    }

    const normalizedSlug = slug.toLowerCase().trim()
    const matchedPost = posts.find(post => post.slug?.toLowerCase().trim() === normalizedSlug)
    return matchedPost || posts[0] || null
  } catch (error) {
    // Retorna mock se for comunidade
    if (endpoint === 'comunidade') {
      const mock = MOCK_COMUNIDADES.find(c => c.slug === slug)
      return mock as T || null
    }
    console.warn(`Error fetching ${endpoint} by slug ${slug}:`, error)
    return null
  }
}

// Comunidades
export async function getComunidades(): Promise<Comunidade[]> {
  const comunidades = await fetchPosts<Comunidade>('comunidade', { per_page: '100' })
  
  // Se não houver comunidades do WordPress, retorna as mock
  if (comunidades.length === 0) {
    return MOCK_COMUNIDADES
  }
  
  return comunidades
}

export async function getComunidadeBySlug(slug: string): Promise<Comunidade | null> {
  // Normalizar o slug para busca
  const normalizedSlug = slug.toLowerCase().trim()
  
  try {
    const comunidade = await fetchPostBySlug<Comunidade>('comunidade', normalizedSlug)
    
    // Se encontrou no WordPress, retorna
    if (comunidade && comunidade.slug) {
      return comunidade
    }
  } catch (error) {
    // Continua para buscar nas mock
  }
  
  // Se não encontrar, tenta nas mock usando comparação normalizada
  const mockComunidade = MOCK_COMUNIDADES.find(c => 
    c.slug.toLowerCase().trim() === normalizedSlug
  )
  
  return mockComunidade || null
}

// Eventos
export async function getEventos(params?: { per_page?: string; orderby?: string }): Promise<Evento[]> {
  try {
    const eventos = await fetchPosts<Evento>('evento', {
      per_page: params?.per_page || '50',
      orderby: params?.orderby || 'date',
    })
    
    // Se não houver eventos do WordPress, retorna os mock
    if (eventos.length === 0) {
      return MOCK_EVENTOS
    }
    
    return eventos
  } catch (error) {
    // Em caso de erro, retorna dados mock
    return MOCK_EVENTOS
  }
}

export async function getEventoBySlug(slug: string): Promise<Evento | null> {
  try {
    const evento = await fetchPostBySlug<Evento>('evento', slug)
    if (evento) return evento
    
    // Retorna mock se não encontrar
    return MOCK_EVENTOS.find(e => e.slug === slug) || null
  } catch (error) {
    // Retorna mock em caso de erro
    return MOCK_EVENTOS.find(e => e.slug === slug) || null
  }
}

// Pastorais
export async function getPastorais(): Promise<Pastoral[]> {
  try {
    const pastorais = await fetchPosts<Pastoral>('pastoral', { per_page: '100' })
    
    // Se não houver pastorais do WordPress, retorna as mock
    if (pastorais.length === 0) {
      return MOCK_PASTORAIS
    }
    
    return pastorais
  } catch (error) {
    // Em caso de erro, retorna dados mock
    return MOCK_PASTORAIS
  }
}

export async function getPastoralBySlug(slug: string): Promise<Pastoral | null> {
  try {
    const pastoral = await fetchPostBySlug<Pastoral>('pastoral', slug)
    if (pastoral) return pastoral
    
    // Retorna mock se não encontrar
    return MOCK_PASTORAIS.find(p => p.slug === slug) || null
  } catch (error) {
    // Retorna mock em caso de erro
    return MOCK_PASTORAIS.find(p => p.slug === slug) || null
  }
}

// Notícias (posts padrão)
export async function getNoticias(params?: { per_page?: string; page?: string }): Promise<Noticia[]> {
  try {
    const noticias = await fetchPosts<Noticia>('posts', {
      per_page: params?.per_page || '10',
      page: params?.page || '1',
    })
    
    // Se não houver notícias do WordPress, retorna as mock
    if (noticias.length === 0) {
      const perPage = parseInt(params?.per_page || '10')
      return MOCK_NOTICIAS.slice(0, perPage)
    }
    
    return noticias
  } catch (error) {
    // Em caso de erro, retorna dados mock
    const perPage = parseInt(params?.per_page || '10')
    return MOCK_NOTICIAS.slice(0, perPage)
  }
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  try {
    const noticia = await fetchPostBySlug<Noticia>('posts', slug)
    if (noticia) return noticia
    
    // Retorna mock se não encontrar
    return MOCK_NOTICIAS.find(n => n.slug === slug) || null
  } catch (error) {
    // Retorna mock em caso de erro
    return MOCK_NOTICIAS.find(n => n.slug === slug) || null
  }
}

// Função helper para obter URL da imagem destacada
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  // Primeiro tenta usar a imagem do WordPress
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url
  }
  
  // Tenta usar imagem do ACF (para dados mock)
  if ('acf' in post && post.acf) {
    const acf = post.acf as any
    if (acf.banner) return acf.banner
    if (acf.imagem_destaque) return acf.imagem_destaque
  }
  
  // Fallback para placeholder genérico
  return null
}

// Função helper para obter texto alternativo da imagem
export function getFeaturedImageAlt(post: WordPressPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered
}

// Função helper para obter excerpt limpo
export function getExcerpt(post: WordPressPost, length: number = 150): string {
  const excerpt = post.excerpt?.rendered || ''
  const text = excerpt.replace(/<[^>]*>/g, '').trim()
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}
