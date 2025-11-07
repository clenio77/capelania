'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/config/site'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
        {navigation.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative px-3 py-2 text-sm lg:text-base font-semibold transition-all duration-300 rounded-lg',
                active
                  ? 'text-dourado-sacra shadow-md bg-dourado-sacra/10'
                  : 'text-azul-profundo hover:text-dourado-sacra hover:bg-dourado-sacra/5'
              )}
            >
              {item.name}
              {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-dourado-sacra rounded-full" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={cn(
            'w-6 h-0.5 bg-azul-profundo transition-all duration-300',
            isOpen && 'rotate-45 translate-y-2'
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-azul-profundo transition-all duration-300',
            isOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-azul-profundo transition-all duration-300',
            isOpen && '-rotate-45 -translate-y-2'
          )}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navigation.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-2xl font-semibold transition-all duration-300 px-6 py-3 rounded-xl',
                  active
                    ? 'text-dourado-sacra shadow-lg bg-dourado-sacra/10'
                    : 'text-azul-profundo hover:text-dourado-sacra hover:bg-dourado-sacra/5'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

