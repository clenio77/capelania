import PhotoGallery from '@/components/gallery/PhotoGallery'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Camera } from 'lucide-react'

export const metadata = {
  title: 'Galeria de Fotos | Capelania Jesus Bom Pastor',
  description: 'Confira os momentos especiais da nossa comunidade através de fotos das celebrações e eventos.',
}

// Fotos mock - em produção viriam do WordPress
const photos = [
  {
    id: 1,
    src: '/images/gallery/missa-1.jpg',
    title: 'Missa Dominical',
    category: 'Celebrações',
    date: '05/11/2024',
    description: 'Missa dominical na Comunidade São José',
  },
  {
    id: 2,
    src: '/images/gallery/batismo-1.jpg',
    title: 'Batizado Comunitário',
    category: 'Sacramentos',
    date: '28/10/2024',
    description: 'Celebração de batizado com as famílias da comunidade',
  },
  {
    id: 3,
    src: '/images/gallery/retiro-1.jpg',
    title: 'Retiro Espiritual',
    category: 'Eventos',
    date: '20/10/2024',
    description: 'Retiro espiritual com jovens e adultos',
  },
  {
    id: 4,
    src: '/images/gallery/pastoral-1.jpg',
    title: 'Encontro Pastoral da Família',
    category: 'Pastorais',
    date: '15/10/2024',
    description: 'Reunião mensal da Pastoral da Família',
  },
  {
    id: 5,
    src: '/images/gallery/procissao-1.jpg',
    title: 'Procissão de Nossa Senhora',
    category: 'Celebrações',
    date: '12/10/2024',
    description: 'Procissão em honra a Nossa Senhora Aparecida',
  },
  {
    id: 6,
    src: '/images/gallery/comunhao-1.jpg',
    title: 'Primeira Comunhão',
    category: 'Sacramentos',
    date: '08/10/2024',
    description: 'Celebração da Primeira Eucaristia',
  },
  {
    id: 7,
    src: '/images/gallery/festa-1.jpg',
    title: 'Festa do Padroeiro',
    category: 'Eventos',
    date: '29/09/2024',
    description: 'Festa em honra ao padroeiro São Miguel Arcanjo',
  },
  {
    id: 8,
    src: '/images/gallery/catequese-1.jpg',
    title: 'Encontro de Catequese',
    category: 'Pastorais',
    date: '23/09/2024',
    description: 'Encontro semanal de catequese com as crianças',
  },
]

const categories = [
  'Celebrações',
  'Eventos',
  'Sacramentos',
  'Pastorais',
]

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white py-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Camera className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galeria de Fotos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Reviva os momentos especiais da nossa comunidade
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Galeria */}
      <AnimatedSection delay={0.2}>
        <section className="section-padding">
          <div className="container-custom">
            <PhotoGallery photos={photos} categories={categories} />
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.4}>
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 rounded-3xl p-12 text-center text-white">
              <Camera className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Compartilhe seus Momentos
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Registrou um momento especial em nossas celebrações? Envie suas fotos para fazerem parte da nossa galeria!
              </p>
              <a
                href="mailto:fotos@capelania.com"
                className="inline-block bg-white text-azul-profundo px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Enviar Fotos
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

