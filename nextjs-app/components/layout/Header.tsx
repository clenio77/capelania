'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import Navigation from './Navigation'
import SearchModal from '@/components/ui/SearchModal'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Atalho de teclado Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-white/98 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo */}
            <Link href="/" className="group flex-shrink-0">
              <div className="relative h-14 w-auto aspect-[4/3] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/jesus-bom-pastor.png"
                  alt="Capelania Jesus Bom Pastor"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Navigation + Search */}
            <div className="flex items-center gap-6">
              <Navigation />
              
              {/* Search Icon Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
                aria-label="Buscar"
                title="Buscar (Ctrl+K)"
              >
                <Search className="h-5 w-5 text-gray-600 group-hover:text-dourado-sacra transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

