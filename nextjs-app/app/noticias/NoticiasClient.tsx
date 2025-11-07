'use client'

import { useState, useMemo } from 'react'
import { Noticia } from '@/types/wordpress'
import NoticiaCard from '@/components/cards/NoticiaCard'
import Search from '@/components/ui/Search'
import Filter from '@/components/ui/Filter'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getExcerpt, getFeaturedImageAlt, getFeaturedImageUrl } from '@/lib/wordpress'
import { formatDate } from '@/lib/utils'

interface NoticiasClientProps {
  initialNoticias: Noticia[]
}

export default function NoticiasClient({ initialNoticias }: NoticiasClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const filteredNoticias = useMemo(() => {
    let filtered = [...initialNoticias]

    // Busca
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((noticia) =>
        noticia.title.rendered.toLowerCase().includes(query) ||
        noticia.excerpt.rendered.toLowerCase().includes(query)
      )
    }

    // Filtros
    if (filter === 'recent') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
    if (filter === 'older') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    return filtered
  }, [initialNoticias, searchQuery, filter])

  const filterOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'recent', label: 'Mais Recentes' },
    { value: 'older', label: 'Mais Antigas' },
  ]

  const [noticiaDestaque, ...demaisNoticias] = filteredNoticias

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero mb-4">Notícias</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe as últimas notícias e eventos da Capelania Jesus Bom Pastor.
          </p>
        </div>

        {/* Busca e Filtros */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Search
              onSearch={setSearchQuery}
              placeholder="Buscar notícias..."
            />
          </div>
          <Filter
            options={filterOptions}
            onFilterChange={setFilter}
            label="Filtrar"
          />
        </div>

        {/* Lista de Notícias */}
        {noticiaDestaque ? (
          <div className="space-y-12">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl bg-gradient-to-br from-azul-profundo via-azul-medio to-azul-claro text-white shadow-2xl"
            >
              <Link href={`/noticias/${noticiaDestaque.slug}`} className="block">
                <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr] lg:p-12">
                  <div className="space-y-6">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
                      Destaque editorial
                    </span>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                      {noticiaDestaque.title.rendered}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <span>
                        <time dateTime={noticiaDestaque.date}>{formatDate(noticiaDestaque.date)}</time>
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden />
                      <span>Capelania Jesus Bom Pastor</span>
                    </div>
                    <p className="max-w-2xl text-lg text-white/80">
                      {getExcerpt(noticiaDestaque, 190)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/90">
                      Ler reportagem completa →
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-3xl border border-white/20">
                    <Image
                      src={getFeaturedImageUrl(noticiaDestaque) || '/images/placeholder-banner.jpg'}
                      alt={getFeaturedImageAlt(noticiaDestaque)}
                      width={720}
                      height={480}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </motion.article>

            {demaisNoticias.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {demaisNoticias.map((noticia, index) => (
                  <motion.div
                    key={noticia.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NoticiaCard noticia={noticia} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              {searchQuery ? 'Nenhuma notícia encontrada para sua busca.' : 'Nenhuma notícia encontrada.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

