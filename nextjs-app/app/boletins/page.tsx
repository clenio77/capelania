import BulletinsSection from '@/components/sections/BulletinsSection'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Boletins Mensais | Capelania Jesus Bom Pastor',
  description: 'Baixe os boletins mensais da Capelania com todas as atividades, celebrações e novidades.',
}

export default function BoletinsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white py-20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boletins Mensais
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fique por dentro de todas as atividades, celebrações e novidades da nossa capelania
          </p>
        </div>
      </section>

      <BulletinsSection />
    </div>
  )
}

