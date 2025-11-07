import PrayerRequestForm from '@/components/forms/PrayerRequestForm'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Heart, Users, Clock, Shield } from 'lucide-react'

export const metadata = {
  title: 'Pedidos de Oração | Capelania Jesus Bom Pastor',
  description: 'Compartilhe suas intenções de oração conosco. Nossa comunidade estará em oração por você.',
}

export default function PedidosOracaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white py-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pedidos de Oração
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Sabemos que a oração tem poder. Compartilhe suas necessidades e intenções conosco.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Diferenciais */}
      <AnimatedSection delay={0.2}>
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-azul-profundo/10 mb-4">
                  <Heart className="w-7 h-7 text-azul-profundo" />
                </div>
                <h3 className="font-bold text-azul-profundo mb-2">Com Amor</h3>
                <p className="text-sm text-gray-600">
                  Cada pedido é recebido e tratado com carinho e respeito
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-azul-profundo/10 mb-4">
                  <Users className="w-7 h-7 text-azul-profundo" />
                </div>
                <h3 className="font-bold text-azul-profundo mb-2">Em Comunidade</h3>
                <p className="text-sm text-gray-600">
                  Nossa comunidade se une em oração por cada intenção
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-azul-profundo/10 mb-4">
                  <Clock className="w-7 h-7 text-azul-profundo" />
                </div>
                <h3 className="font-bold text-azul-profundo mb-2">Resposta Rápida</h3>
                <p className="text-sm text-gray-600">
                  Confirmação imediata e inclusão nas orações diárias
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-azul-profundo/10 mb-4">
                  <Shield className="w-7 h-7 text-azul-profundo" />
                </div>
                <h3 className="font-bold text-azul-profundo mb-2">Confidencial</h3>
                <p className="text-sm text-gray-600">
                  Seus dados e pedidos são tratados com total sigilo
                </p>
              </div>
            </div>

            {/* Formulário */}
            <PrayerRequestForm />
          </div>
        </section>
      </AnimatedSection>

      {/* Testemunhos */}
      <AnimatedSection delay={0.4}>
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-section text-center mb-12">Testemunhos de Fé</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-4 text-dourado-sacra">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Pedi oração pela saúde da minha mãe e em duas semanas ela teve uma melhora significativa. Deus é fiel!"
                </p>
                <p className="text-sm font-semibold text-azul-profundo">
                  Maria S.
                </p>
                <p className="text-xs text-gray-500">São Paulo</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-4 text-dourado-sacra">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Estava desempregado há 6 meses. Enviei meu pedido e em 15 dias recebi uma proposta incrível!"
                </p>
                <p className="text-sm font-semibold text-azul-profundo">
                  João P.
                </p>
                <p className="text-xs text-gray-500">Rio de Janeiro</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-4 text-dourado-sacra">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "A oração da comunidade me deu força para superar um momento muito difícil. Gratidão eterna!"
                </p>
                <p className="text-sm font-semibold text-azul-profundo">
                  Ana L.
                </p>
                <p className="text-xs text-gray-500">Brasília</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.6}>
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-dourado-sacra/10 to-dourado-sacra/5 rounded-3xl p-12 text-center border border-dourado-sacra/20">
              <h2 className="text-3xl font-bold text-azul-profundo mb-4">
                Você também pode orar por outros
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Junte-se ao nosso grupo de intercessores e ajude a fortalecer a fé de nossa comunidade através da oração.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de fazer parte do grupo de intercessores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-azul-profundo text-white px-8 py-4 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all"
              >
                <Users className="w-5 h-5" />
                Ser Intercessor
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

