'use client'

import { useState, useEffect, useCallback } from 'react'
import { Search, X, FileText, Calendar, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SearchResult {
  id: string
  title: string
  type: 'noticia' | 'evento' | 'comunidade' | 'pastoral'
  url: string
  excerpt?: string
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Retiro de Carnaval 2025: Inscrições Abertas',
    type: 'noticia',
    url: '/noticias/retiro-de-carnaval-2025',
    excerpt: 'Inscrições abertas para o Retiro de Carnaval 2025',
  },
  {
    id: '2',
    title: 'Festa de São José',
    type: 'evento',
    url: '/eventos/festa-sao-jose',
    excerpt: 'Celebração solene do padroeiro com missa e procissão',
  },
  {
    id: '3',
    title: 'Comunidade São José',
    type: 'comunidade',
    url: '/comunidades/comunidade-sao-jose',
    excerpt: 'Comunidade de fé e acolhimento para militares',
  },
  {
    id: '4',
    title: 'Pastoral da Juventude',
    type: 'pastoral',
    url: '/pastorais/pastoral-da-juventude',
    excerpt: 'Formação e evangelização de jovens',
  },
]

const typeConfig = {
  noticia: {
    label: 'Notícia',
    icon: FileText,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  evento: {
    label: 'Evento',
    icon: Calendar,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  comunidade: {
    label: 'Comunidade',
    icon: Users,
    color: 'text-azul-profundo',
    bg: 'bg-azul-profundo/10',
  },
  pastoral: {
    label: 'Pastoral',
    icon: Heart,
    color: 'text-dourado-sacra',
    bg: 'bg-dourado-sacra/10',
  },
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)

    // Simula busca (em produção, fazer chamada à API)
    setTimeout(() => {
      const filtered = mockResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setResults(filtered)
      setIsSearching(false)
    }, 300)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setQuery('')
      setResults([])
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, performSearch])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto mt-20 max-w-3xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl bg-white shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-4 border-b border-gray-200 p-6">
            <Search className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar notícias, eventos, comunidades..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg outline-none placeholder:text-gray-400"
              autoFocus
            />
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
              aria-label="Fechar busca"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {isSearching ? (
              <div className="py-12 text-center text-gray-500">
                Buscando...
              </div>
            ) : query && results.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-500 mb-2">Nenhum resultado encontrado</p>
                <p className="text-sm text-gray-400">
                  Tente usar palavras-chave diferentes
                </p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result) => {
                  const config = typeConfig[result.type]
                  const Icon = config.icon

                  return (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={onClose}
                      className="block rounded-lg p-4 transition-colors hover:bg-gray-50"
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn('rounded-lg p-2', config.bg)}>
                          <Icon className={cn('h-5 w-5', config.color)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={cn(
                                'text-xs font-semibold uppercase',
                                config.color
                              )}
                            >
                              {config.label}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {result.title}
                          </h3>
                          {result.excerpt && (
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {result.excerpt}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500">
                <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <p>Digite para buscar</p>
                <p className="text-sm text-gray-400 mt-2">
                  Notícias, eventos, comunidades e pastorais
                </p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          {!query && (
            <div className="border-t border-gray-200 p-4">
              <p className="text-sm font-semibold text-gray-500 mb-3">
                Acesso Rápido
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/noticias"
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span>Todas as Notícias</span>
                </Link>
                <Link
                  href="/eventos"
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span>Calendário</span>
                </Link>
                <Link
                  href="/comunidades"
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <Users className="h-4 w-4 text-azul-profundo" />
                  <span>Comunidades</span>
                </Link>
                <Link
                  href="/pastorais"
                  onClick={onClose}
                  className="flex items-center gap-2 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                >
                  <Heart className="h-4 w-4 text-dourado-sacra" />
                  <span>Pastorais</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

