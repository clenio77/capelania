'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, Users, Heart, Target, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Pastoral } from '@/types/wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'

interface PastoralClientProps {
  pastoral: Pastoral
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

export default function PastoralClient({ pastoral }: PastoralClientProps) {
  const imageUrl = getFeaturedImageUrl(pastoral) || '/images/placeholder-banner.jpg'

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={getFeaturedImageAlt(pastoral)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo via-azul-profundo/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-dourado-sacra/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-dourado-sacra font-semibold">Pastoral</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-titulo mb-4 font-bold drop-shadow-lg">
                {pastoral.title.rendered}
              </h1>
              {pastoral.excerpt?.rendered && (
                <div 
                  className="text-xl md:text-2xl text-gray-200 max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: pastoral.excerpt.rendered }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards de Informações */}
      <section className="section-padding bg-gradient-to-b from-off-white to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10"
          >
            {/* Card Coordenador */}
            {pastoral.acf?.coordenador && (
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                    <User className="w-6 h-6 text-dourado-sacra" />
                  </div>
                  <h3 className="text-h4 font-semibold text-azul-profundo">Coordenação</h3>
                </div>
                <p className="text-body mb-3 font-semibold">{pastoral.acf.coordenador}</p>
                {pastoral.acf?.telefone_coordenador && (
                  <p className="text-body text-gray-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-dourado-sacra" />
                    <a href={`tel:${pastoral.acf.telefone_coordenador}`} className="hover:text-dourado-sacra">
                      {pastoral.acf.telefone_coordenador}
                    </a>
                  </p>
                )}
              </motion.div>
            )}

            {/* Card Horário */}
            {pastoral.acf?.horario_reuniao && (
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-dourado-sacra" />
                  </div>
                  <h3 className="text-h4 font-semibold text-azul-profundo">Reuniões</h3>
                </div>
                <p className="text-body">{pastoral.acf.horario_reuniao}</p>
              </motion.div>
            )}

            {/* Card Participação */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-dourado-sacra" />
                </div>
                <h3 className="text-h4 font-semibold text-azul-profundo">Participe</h3>
              </div>
              <p className="text-body mb-3">Todos são bem-vindos!</p>
              <Link
                href="/fale-conosco"
                className="text-dourado-sacra hover:text-dourado-escuro font-semibold inline-flex items-center gap-2"
              >
                Quero participar
                <Heart className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <div dangerouslySetInnerHTML={{ __html: pastoral.content.rendered }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Missão e Valores */}
      <section className="section-padding bg-gradient-to-b from-off-white to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Nossa Missão */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                    <Target className="w-7 h-7 text-dourado-sacra" />
                  </div>
                  <h3 className="text-h3 font-titulo text-azul-profundo">Nossa Missão</h3>
                </div>
                <p className="text-body text-gray-700 leading-relaxed">
                  Servir à comunidade através da evangelização, formação e ação social, 
                  vivendo os valores cristãos e promovendo o crescimento espiritual de todos os membros.
                </p>
              </div>

              {/* Como Participar */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                    <CheckCircle2 className="w-7 h-7 text-dourado-sacra" />
                  </div>
                  <h3 className="text-h3 font-titulo text-azul-profundo">Como Participar</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-dourado-sacra mt-0.5 flex-shrink-0" />
                    <span className="text-body text-gray-700">Participe de nossas reuniões regulares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-dourado-sacra mt-0.5 flex-shrink-0" />
                    <span className="text-body text-gray-700">Entre em contato com a coordenação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-dourado-sacra mt-0.5 flex-shrink-0" />
                    <span className="text-body text-gray-700">Contribua com seus dons e talentos</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeria de Atividades (Placeholder) */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-titulo mb-4 text-azul-profundo">Nossas Atividades</h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Conheça algumas das atividades que realizamos ao longo do ano
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Encontros Formativos', desc: 'Momentos de reflexão e aprofundamento na fé' },
              { title: 'Ações Comunitárias', desc: 'Serviço e solidariedade em ação' },
              { title: 'Celebrações Especiais', desc: 'Momentos litúrgicos e de oração' },
            ].map((atividade, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-h4 font-semibold mb-3">{atividade.title}</h4>
                <p className="text-gray-200">{atividade.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="section-padding bg-azul-profundo text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h2 font-titulo mb-4">Venha Fazer Parte!</h2>
            <p className="text-body-lg mb-8 text-gray-200">
              Sua participação é fundamental para o crescimento de nossa pastoral e para o 
              fortalecimento de nossa comunidade. Todos são bem-vindos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fale-conosco" className="btn-primary">
                Entre em Contato
              </Link>
              <Link href="/pastorais" className="btn-secondary bg-white text-azul-profundo hover:bg-gray-100">
                Ver Outras Pastorais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

