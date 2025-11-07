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
      <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-white/98 border-b-2 border-dourado-sacra/30">
        <div className="container-custom">
          <div className="flex items-center justify-between h-24 py-2 gap-4">
            <Link href="/" className="group h-full block flex-shrink-0">
              <div className="relative h-full w-auto aspect-[4/3] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/jesus-bom-pastor.png"
                  alt="Capelania Jesus Bom Pastor"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-dourado-sacra hover:bg-dourado-sacra/5 transition-all duration-300 group"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5 text-gray-400 group-hover:text-dourado-sacra transition-colors" />
                <span className="text-sm text-gray-500 group-hover:text-dourado-sacra transition-colors">
                  Buscar...
                </span>
                <kbd className="hidden lg:inline-block px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
                  Ctrl K
                </kbd>
              </button>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Buscar"
              >
                <Search className="h-6 w-6 text-azul-profundo" />
              </button>

              <Navigation />
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

