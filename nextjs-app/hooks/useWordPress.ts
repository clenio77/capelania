import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { getComunidades, getNoticias, getEventos, getPastorais } from '@/lib/wordpress'
import { Comunidade, Noticia, Evento, Pastoral } from '@/types/wordpress'

// Hook para Comunidades
export function useComunidades(options?: Omit<UseQueryOptions<Comunidade[]>, 'queryKey' | 'queryFn'>) {
  return useQuery({
    queryKey: ['comunidades'],
    queryFn: getComunidades,
    staleTime: 5 * 60 * 1000, // 5 minutos
    ...options,
  })
}

// Hook para Comunidade individual
export function useComunidade(slug: string, options?: Omit<UseQueryOptions<Comunidade | null>, 'queryKey' | 'queryFn'>) {
  return useQuery({
    queryKey: ['comunidade', slug],
    queryFn: () => getComunidades().then(comunidades => comunidades.find(c => c.slug === slug) || null),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    ...options,
  })
}

// Hook para Notícias
export function useNoticias(
  params?: { per_page?: string; page?: string },
  options?: Omit<UseQueryOptions<Noticia[]>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: ['noticias', params],
    queryFn: () => getNoticias(params),
    staleTime: 2 * 60 * 1000, // 2 minutos
    ...options,
  })
}

// Hook para Notícia individual
export function useNoticia(slug: string, options?: Omit<UseQueryOptions<Noticia | null>, 'queryKey' | 'queryFn'>) {
  return useQuery({
    queryKey: ['noticia', slug],
    queryFn: () => getNoticias({ per_page: '100' }).then(noticias => noticias.find(n => n.slug === slug) || null),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    ...options,
  })
}

// Hook para Eventos
export function useEventos(
  params?: { per_page?: string; orderby?: string },
  options?: Omit<UseQueryOptions<Evento[]>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: ['eventos', params],
    queryFn: () => getEventos(params),
    staleTime: 2 * 60 * 1000,
    ...options,
  })
}

// Hook para Pastorais
export function usePastorais(options?: Omit<UseQueryOptions<Pastoral[]>, 'queryKey' | 'queryFn'>) {
  return useQuery({
    queryKey: ['pastorais'],
    queryFn: getPastorais,
    staleTime: 5 * 60 * 1000,
    ...options,
  })
}

// Hook para Pastoral individual
export function usePastoral(slug: string, options?: Omit<UseQueryOptions<Pastoral | null>, 'queryKey' | 'queryFn'>) {
  return useQuery({
    queryKey: ['pastoral', slug],
    queryFn: () => getPastorais().then(pastorais => pastorais.find(p => p.slug === slug) || null),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    ...options,
  })
}

