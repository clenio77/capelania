import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Página não encontrada',
}

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-hero mb-4">404</h1>
            <h2 className="text-section mb-6">Página não encontrada</h2>
            <p className="text-body text-gray-600 mb-8">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Voltar para o Início
            </Link>
            <Link href="/noticias" className="btn-secondary">
              Ver Notícias
            </Link>
          </div>

          {/* Links Úteis */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Ou visite:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/comunidades" className="text-dourado-sacra hover:underline">
                Comunidades
              </Link>
              <Link href="/eventos" className="text-dourado-sacra hover:underline">
                Eventos
              </Link>
              <Link href="/pastorais" className="text-dourado-sacra hover:underline">
                Pastorais
              </Link>
              <Link href="/fale-conosco" className="text-dourado-sacra hover:underline">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
