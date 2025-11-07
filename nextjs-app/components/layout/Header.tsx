'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import Navigation from './Navigation'
import SearchModal from '@/components/ui/SearchModal'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { useTranslations } from '@/hooks/useTranslations'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const t = useTranslations('common')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/98 shadow-md backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between py-3">
            <Link href="/" className="group flex-shrink-0" aria-label="Capelania Jesus Bom Pastor">
              <div className="relative aspect-[4/3] h-14 w-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/jesus-bom-pastor.png"
                  alt="Capelania Jesus Bom Pastor"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <Navigation />

              <LanguageSwitcher />

              <button
                onClick={() => setIsSearchOpen(true)}
                className="rounded-full p-2 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado-sacra"
                aria-label={t('search')}
                title={`${t('search')} (Ctrl+K)`}
              >
                <Search className="h-5 w-5 text-gray-600 transition-colors group-hover:text-dourado-sacra" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
