import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm bg-white/95">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-titulo text-azul-profundo font-bold">
              Capelania Jesus Bom Pastor
            </div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

