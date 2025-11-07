import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm bg-white/95">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 py-2">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group h-full">
            <div className="relative h-full aspect-square flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/jesus-bom-pastor.jpg"
                alt="Logo Capelania Jesus Bom Pastor"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-titulo text-azul-profundo font-bold leading-tight">
                Capelania
              </span>
              <span className="text-base md:text-lg lg:text-xl font-titulo text-dourado-sacra font-semibold leading-tight">
                Jesus Bom Pastor
              </span>
            </div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

