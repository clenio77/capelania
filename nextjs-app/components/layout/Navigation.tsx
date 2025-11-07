'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/config/site'
import { cn } from '@/lib/utils'
import { useTranslations } from '@/hooks/useTranslations'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('navigation')

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (!mounted) return false
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="hidden items-center space-x-1 md:flex lg:space-x-2">
        {navigation.map((item) => {
          const active = isActive(item.href)
          return (
            <Link
              key={item.labelKey}
              href={item.href}
              className={cn(
                'relative rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 lg:text-base',
                active
                  ? 'text-dourado-sacra shadow-md bg-dourado-sacra/10'
                  : 'text-azul-profundo hover:bg-dourado-sacra/5 hover:text-dourado-sacra'
              )}
            >
              {t(item.labelKey)}
              {active && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-dourado-sacra" />
              )}
            </Link>
          )
        })}
      </nav>

      <button
        className="flex flex-col space-y-1.5 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'h-0.5 w-6 bg-azul-profundo transition-all duration-300',
            isOpen && 'translate-y-2 rotate-45'
          )}
        />
        <span
          className={cn(
            'h-0.5 w-6 bg-azul-profundo transition-all duration-300',
            isOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'h-0.5 w-6 bg-azul-profundo transition-all duration-300',
            isOpen && '-translate-y-2 -rotate-45'
          )}
        />
      </button>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center space-y-8">
          {navigation.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.labelKey}
                href={item.href}
                className={cn(
                  'rounded-xl px-6 py-3 text-2xl font-semibold transition-all duration-300',
                  active
                    ? 'bg-dourado-sacra/10 text-dourado-sacra shadow-lg'
                    : 'text-azul-profundo hover:bg-dourado-sacra/5 hover:text-dourado-sacra'
                )}
                onClick={() => setIsOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
