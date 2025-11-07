import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-white/98 border-b-2 border-dourado-sacra/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 py-2">
          <Link href="/" className="group h-full block">
            <div className="relative h-full w-auto aspect-[4/3] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/jesus-bom-pastor.jpg"
                alt="Capelania Jesus Bom Pastor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

