'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  const paths = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Início', href: '/' },
  ]

  paths.forEach((path, index) => {
    const href = '/' + paths.slice(0, index + 1).join('/')
    const label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbs.push({
      label,
      href: index === paths.length - 1 ? undefined : href,
    })
  })

  if (pathname === '/') {
    return null
  }

  return (
    <nav className="container-custom py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.href || index} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-dourado-sacra transition-colors"
              >
                {index === 0 ? (
                  <HomeIcon className="w-4 h-4" />
                ) : (
                  item.label
                )}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

