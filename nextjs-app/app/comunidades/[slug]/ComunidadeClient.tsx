'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Phone, Mail, Users, Heart, BookOpen, Church } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Comunidade } from '@/types/wordpress'
import { getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress'
import { isLocalImagePath } from '@/lib/utils'

interface ComunidadeClientProps {
  comunidade: Comunidade
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

export default function ComunidadeClient({ comunidade }: ComunidadeClientProps) {
  const imageUrl = getFeaturedImageUrl(comunidade) || `https://placehold.co/1920x800/1A3A5C/FFFFFF?text=${encodeURIComponent(comunidade.title.rendered)}`
  const isLocalImage = isLocalImagePath(imageUrl)
  
  // Extrair logo se disponível
  const logoUrl = comunidade.acf?.logo

  return (
    <div>
      {/* Hero Section com Parallax */}
      <section className={`relative h-[500px] md:h-[600px] overflow-hidden ${isLocalImage ? 'bg-gradient-to-br from-azul-profundo via-azul-profundo/80 to-azul-profundo' : ''}`}>
        {isLocalImage ? (
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
            <Image
              src={imageUrl}
              alt={getFeaturedImageAlt(comunidade)}
              width={900}
              height={900}
              className="h-full w-auto max-h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={getFeaturedImageAlt(comunidade)}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo via-azul-profundo/50 to-transparent" />
        
        {/* Logo flutuante */}
        {logoUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute top-8 right-8 md:top-12 md:right-12 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src={logoUrl}
                alt={`Logo ${comunidade.title.rendered}`}
                fill
                className="object-cover rounded-full"
              />
            </div>
          </motion.div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-titulo mb-4 font-bold drop-shadow-lg">
                {comunidade.title.rendered}
              </h1>
              {comunidade.acf?.responsavel && (
                <p className="text-xl md:text-2xl text-gray-200 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Responsável: {comunidade.acf.responsavel}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards de Informações Rápidas */}
      <section className="section-padding bg-gradient-to-b from-off-white to-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10"
          >
            {/* Card Horários */}
            {comunidade.acf?.horarios_missa && (
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-dourado-sacra" />
                  </div>
                  <h3 className="text-h4 font-semibold text-azul-profundo">Horários de Missa</h3>
                </div>
                <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: comunidade.acf.horarios_missa }} />
              </motion.div>
            )}

            {/* Card Localização */}
            {comunidade.acf?.endereco && (
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-dourado-sacra" />
                  </div>
                  <h3 className="text-h4 font-semibold text-azul-profundo">Localização</h3>
                </div>
                <p className="text-body mb-3">{comunidade.acf.endereco}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(comunidade.acf.endereco)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dourado-sacra hover:text-dourado-escuro font-semibold inline-flex items-center gap-2"
                >
                  Ver no mapa
                  <MapPin className="w-4 h-4" />
                </a>
              </motion.div>
            )}

            {/* Card Contato */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-dourado-sacra/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-dourado-sacra" />
                </div>
                <h3 className="text-h4 font-semibold text-azul-profundo">Contato</h3>
              </div>
              {comunidade.acf?.telefone && (
                <p className="text-body mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-dourado-sacra" />
                  <a href={`tel:${comunidade.acf.telefone}`} className="hover:text-dourado-sacra">
                    {comunidade.acf.telefone}
                  </a>
                </p>
              )}
              {comunidade.acf?.email && (
                <p className="text-body flex items-center gap-2">
                  <Mail className="w-4 h-4 text-dourado-sacra" />
                  <a href={`mailto:${comunidade.acf.email}`} className="hover:text-dourado-sacra">
                    {comunidade.acf.email}
                  </a>
                </p>
              )}
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
              className="prose prose-lg max-w-none"
            >
              <div dangerouslySetInnerHTML={{ __html: comunidade.content.rendered }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Atividades */}
      <section className="section-padding bg-gradient-to-b from-off-white to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-titulo mb-4 text-azul-profundo">Nossas Atividades</h2>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              Participe das diversas atividades que promovemos para fortalecer a fé e a comunhão
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Church, title: 'Celebrações', desc: 'Missas e celebrações litúrgicas' },
              { icon: BookOpen, title: 'Catequese', desc: 'Formação para todas as idades' },
              { icon: Users, title: 'Grupos', desc: 'Grupos de oração e reflexão' },
              { icon: Heart, title: 'Caridade', desc: 'Ações sociais e voluntariado' },
            ].map((atividade, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-dourado-sacra/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <atividade.icon className="w-8 h-8 text-dourado-sacra" />
                </div>
                <h3 className="text-h4 font-semibold mb-2 text-azul-profundo">{atividade.title}</h3>
                <p className="text-body text-gray-600">{atividade.desc}</p>
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
            <h2 className="text-h2 font-titulo mb-4">Venha nos visitar!</h2>
            <p className="text-body-lg mb-8 text-gray-200">
              Todos são bem-vindos em nossa comunidade. Participe de nossas celebrações e atividades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fale-conosco"
                className="btn-primary"
              >
                Entre em Contato
              </Link>
              <Link
                href="/comunidades"
                className="btn-secondary bg-white text-azul-profundo hover:bg-gray-100"
              >
                Ver Outras Comunidades
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

