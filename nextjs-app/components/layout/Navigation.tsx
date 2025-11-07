'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navigation } from '@/config/site'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-azul-profundo font-medium hover:text-dourado-sacra transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
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
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl text-azul-profundo font-medium hover:text-dourado-sacra transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

