'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Comunidade } from '@/types/wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'
import { isLocalImagePath } from '@/lib/utils'

interface ComunidadesCarouselProps {
  comunidades: Comunidade[]
}

export default function ComunidadesCarousel({ comunidades }: ComunidadesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Se não houver comunidades, retorna null
  if (!comunidades || comunidades.length === 0) {
    return null
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % comunidades.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [comunidades.length])

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % comunidades.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + comunidades.length) % comunidades.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Garantir que temos uma comunidade válida
  const currentComunidade = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= comunidades.length) {
      return null
    }
    return comunidades[currentIndex]
  }, [currentIndex, comunidades])

  if (!currentComunidade || !currentComunidade.slug) {
    return null
  }

  // Garantir que a imagem corresponde ao slug correto
  const imageUrl = getFeaturedImageUrl(currentComunidade)
  const isLocalImage = isLocalImagePath(imageUrl)
  
  // Placeholder caso não tenha imagem (usando nome da comunidade)
  const displayImage = imageUrl || `https://placehold.co/1920x800/1A3A5C/FFFFFF?text=${encodeURIComponent(currentComunidade.title.rendered)}`

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slide Atual - usar key única baseada no slug e índice */}
      <div key={`slide-${currentComunidade.slug}-${currentIndex}`} className="absolute inset-0">
        {isLocalImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo via-azul-profundo/80 to-azul-profundo" />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
              <Image
                key={`img-${currentComunidade.slug}-${currentIndex}`}
                src={displayImage}
                alt={getFeaturedImageAlt(currentComunidade)}
                width={720}
                height={720}
                className="h-full w-auto max-h-full object-contain drop-shadow-2xl"
                priority={currentIndex === 0}
              />
            </div>
          </>
        ) : (
          <Image
            key={`img-${currentComunidade.slug}-${currentIndex}`}
            src={displayImage}
            alt={getFeaturedImageAlt(currentComunidade)}
            fill
            className="object-cover transition-opacity duration-800"
            priority={currentIndex === 0}
            sizes="100vw"
            unoptimized={imageUrl?.startsWith('/images/') ? false : true}
            onError={(e) => {
              // Fallback para imagem placeholder se a imagem não carregar
              const target = e.target as HTMLImageElement
              target.src = `https://placehold.co/1920x800/1A3A5C/FFFFFF?text=${encodeURIComponent(currentComunidade.title.rendered)}`
            }}
          />
        )}
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/90 via-azul-profundo/50 to-transparent" />
        
        {/* Conteúdo do Slide */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-titulo mb-4 font-bold">
              {currentComunidade.title.rendered}
            </h2>
            {currentComunidade.acf?.nome_padroeiro && (
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                {currentComunidade.acf.nome_padroeiro}
              </p>
            )}
            <Link
              href={`/comunidades/${currentComunidade.slug}`}
              className="inline-block btn-primary"
            >
              Conheça Mais
            </Link>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        aria-label="Slide anterior"
      >
        <span className="text-2xl text-azul-profundo">‹</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        aria-label="Próximo slide"
      >
        <span className="text-2xl text-azul-profundo">›</span>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {comunidades.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 w-3 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
