import { getPastorais } from '@/lib/wordpress'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pastorais',
  description: 'Conheça as pastorais da Capelania Jesus Bom Pastor',
}

export default async function PastoraisPage() {
  const pastorais = await getPastorais()

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero mb-4">Pastorais</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            As pastorais são grupos de serviço e evangelização. Venha fazer parte de uma delas!
          </p>
        </div>

        {pastorais.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastorais.map((pastoral) => {
              const imageUrl = getFeaturedImageUrl(pastoral) || '/images/placeholder-card.jpg'
              
              return (
                <Link
                  key={pastoral.id}
                  href={`/pastorais/${pastoral.slug}`}
                  className="card group"
                >
                  <div className="card-image relative overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={getFeaturedImageAlt(pastoral)}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{pastoral.title.rendered}</h3>
                    {pastoral.acf?.coordenador && (
                      <p className="text-gray-600 mb-2">
                        <strong>Coordenador:</strong> {pastoral.acf.coordenador}
                      </p>
                    )}
                    {pastoral.acf?.horario_reuniao && (
                      <p className="text-gray-600 mb-4">
                        <strong>Reunião:</strong> {pastoral.acf.horario_reuniao}
                      </p>
                    )}
                    <span className="text-azul-profundo font-semibold group-hover:text-dourado-sacra transition-colors">
                      Conhecer mais →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhuma pastoral encontrada.</p>
          </div>
        )}
      </div>
    </div>
  )
}

