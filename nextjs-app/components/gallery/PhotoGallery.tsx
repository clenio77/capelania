'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Calendar, Image as ImageIcon } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

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
  const t = useTranslations('gallery')

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') {
      return photos
    }
    return photos.filter((photo) => photo.category === selectedCategory)
  }, [photos, selectedCategory])

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, filteredPhotos.length])

  const counterText = useMemo(() => {
    const template = t('counter')
    return template
      .replace('{current}', String(currentPhotoIndex + 1))
      .replace('{total}', String(filteredPhotos.length))
  }, [currentPhotoIndex, filteredPhotos.length, t])

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`rounded-full px-6 py-2 font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-azul-profundo text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {t('categories.all')}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-2 font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-azul-profundo text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="mb-1 text-sm font-bold">{photo.title}</h3>
                  <p className="flex items-center gap-1 text-xs">
                    <Calendar className="h-3 w-3" />
                    {photo.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <ImageIcon className="mx-auto mb-4 h-16 w-16 text-gray-300" />
          <p className="text-gray-600">{t('empty')}</p>
        </div>
      )}

      {lightboxOpen && filteredPhotos.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
            aria-label={t('close')}
            type="button"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
            aria-label={t('previous')}
            type="button"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <div className="mx-4 w-full max-w-7xl max-h-[90vh]">
            <div className="relative h-[80vh] w-full">
              <Image
                src={filteredPhotos[currentPhotoIndex].src}
                alt={filteredPhotos[currentPhotoIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="mb-2 text-xl font-bold">
                {filteredPhotos[currentPhotoIndex].title}
              </h3>
              {filteredPhotos[currentPhotoIndex].description && (
                <p className="mb-2 text-white/80">
                  {filteredPhotos[currentPhotoIndex].description}
                </p>
              )}
              <p className="flex items-center justify-center gap-2 text-sm text-white/60">
                <Calendar className="h-4 w-4" />
                {filteredPhotos[currentPhotoIndex].date}
                <span className="mx-2">•</span>
                {counterText}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
            aria-label={t('next')}
            type="button"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        </div>
      )}
    </div>
  )
}
