'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Calendar, Image as ImageIcon } from 'lucide-react'

interface Photo {
  id: number
  src: string
  title: string
  category: string
  date: string
  description?: string
}

interface PhotoGalleryProps {
  photos: Photo[]
  categories: string[]
}

export default function PhotoGallery({ photos, categories }: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % filteredPhotos.length)
  }

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)
  }

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'Escape') closeLightbox()
  }

  useState(() => {
    window.addEventListener('keydown', handleKeyDown as any)
    return () => window.removeEventListener('keydown', handleKeyDown as any)
  })

  return (
    <div>
      {/* Filtros de Categoria */}
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-azul-profundo text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todas
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-azul-profundo text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de Fotos */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-sm mb-1">{photo.title}</h3>
                  <p className="text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {photo.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">Nenhuma foto encontrada nesta categoria.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Botão Fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Botão Anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Imagem */}
          <div className="max-w-7xl max-h-[90vh] w-full mx-4">
            <div className="relative w-full h-[80vh]">
              <Image
                src={filteredPhotos[currentPhotoIndex].src}
                alt={filteredPhotos[currentPhotoIndex].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">
                {filteredPhotos[currentPhotoIndex].title}
              </h3>
              {filteredPhotos[currentPhotoIndex].description && (
                <p className="text-white/80 mb-2">
                  {filteredPhotos[currentPhotoIndex].description}
                </p>
              )}
              <p className="text-sm text-white/60 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                {filteredPhotos[currentPhotoIndex].date}
                <span className="mx-2">•</span>
                {currentPhotoIndex + 1} de {filteredPhotos.length}
              </p>
            </div>
          </div>

          {/* Botão Próximo */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </div>
  )
}

