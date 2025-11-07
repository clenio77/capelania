'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, Church, Heart } from 'lucide-react'
import ComunidadeCard from '@/components/cards/ComunidadeCard'
import { Comunidade } from '@/types/wordpress'

interface ComunidadesClientProps {
  comunidades: Comunidade[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ComunidadesClient({ comunidades }: ComunidadesClientProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-azul-profundo via-azul-profundo/95 to-azul-profundo text-white py-20 md:py-32 overflow-hidden">
        {/* Padrão decorativo de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-dourado-sacra rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-dourado-sacra rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-titulo mb-6 font-bold">
              Nossas Comunidades
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              A Capelania Jesus Bom Pastor é formada por diversas comunidades vibrantes, 
              cada uma com sua identidade e missão, unidas pela fé e pelo amor ao próximo.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Church className="w-5 h-5 text-dourado-sacra" />
                <span>{comunidades.length} Comunidades Ativas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-dourado-sacra" />
                <span>Centenas de Famílias</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-dourado-sacra" />
                <span>Uma Só Fé</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Apresentação */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-h2 font-titulo mb-6 text-azul-profundo">
              Encontre Sua Comunidade
            </h2>
            <p className="text-body-lg text-gray-600">
              Cada comunidade é um espaço de acolhimento, celebração e crescimento espiritual. 
              Descubra qual está mais próxima de você e venha fazer parte desta grande família.
            </p>
          </motion.div>

          {comunidades.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {comunidades.map((comunidade) => (
                <motion.div key={comunidade.id} variants={itemVariants}>
                  <ComunidadeCard
                    post={comunidade}
                    href={`/comunidades/${comunidade.slug}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Nenhuma comunidade encontrada.</p>
            </div>
          )}
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="section-padding bg-gradient-to-b from-off-white to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-titulo mb-4 text-azul-profundo">
              Por Que Participar de Uma Comunidade?
            </h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Fazer parte de uma comunidade é viver a fé de forma concreta e compartilhada
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Church,
                title: 'Vida Litúrgica',
                description: 'Participe de celebrações eucarísticas, adorações e momentos de oração comunitária.',
              },
              {
                icon: Users,
                title: 'Comunhão Fraterna',
                description: 'Encontre amigos, compartilhe experiências e cresça junto com outros irmãos na fé.',
              },
              {
                icon: Heart,
                title: 'Serviço e Caridade',
                description: 'Engaje-se em ações sociais e pastorais que transformam vidas e comunidades.',
              },
              {
                icon: MapPin,
                title: 'Proximidade',
                description: 'Encontre uma comunidade perto de você, facilitando sua participação regular.',
              },
              {
                icon: '📚',
                title: 'Formação Contínua',
                description: 'Acesse catequese, grupos de estudo bíblico e formação para todas as idades.',
              },
              {
                icon: '🎉',
                title: 'Eventos e Festas',
                description: 'Participe de retiros, encontros, festas e celebrações especiais ao longo do ano.',
              },
            ].map((beneficio, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-dourado-sacra/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  {typeof beneficio.icon === 'string' ? (
                    <span className="text-3xl">{beneficio.icon}</span>
                  ) : (
                    <beneficio.icon className="w-7 h-7 text-dourado-sacra" />
                  )}
                </div>
                <h3 className="text-h4 font-semibold mb-3 text-azul-profundo">
                  {beneficio.title}
                </h3>
                <p className="text-body text-gray-600">{beneficio.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-azul-profundo text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h2 font-titulo mb-4">Não Encontrou Sua Comunidade?</h2>
            <p className="text-body-lg mb-8 text-gray-200">
              Entre em contato conosco e teremos prazer em ajudá-lo a encontrar 
              a comunidade mais próxima de você ou esclarecer qualquer dúvida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/fale-conosco" className="btn-primary">
                Fale Conosco
              </a>
              <a href="/a-capelania" className="btn-secondary bg-white text-azul-profundo hover:bg-gray-100">
                Conheça a Capelania
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

