'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ChaplainMessage {
  title: string
  date: string
  excerpt: string
  fullMessageUrl?: string
  chaplainName: string
  chaplainRole: string
  chaplainPhoto?: string
}

const currentMessage: ChaplainMessage = {
  title: 'Uma Comunidade de Esperança e Fé',
  date: 'Novembro de 2025',
  excerpt:
    'Queridos irmãos e irmãas, é com grande alegria que me dirijo a vocês neste mês dedicado às almas e à reflexão sobre a vida eterna. Nossa capelania tem sido um farol de esperança e fé para tantas famílias militares, e isso só é possível pela graça de Deus e pelo empenho de cada um de vocês. Convido todos a participarem ativamente de nossas celebrações e atividades pastorais, fortalecendo os laços de fraternidade que nos unem como comunidade. Que o Senhor Jesus, nosso Bom Pastor, continue guiando nossos passos e iluminando nossos corações.',
  fullMessageUrl: '/a-capelania',
  chaplainName: 'Pe. João Silva',
  chaplainRole: 'Capelão Militar',
  chaplainPhoto: '/images/placeholder-priest.jpg',
}

export default function ChaplainMessageSection() {
  return (
    <AnimatedSection delay={0.2}>
      <section className="section-padding bg-gradient-to-br from-azul-profundo via-azul-profundo/95 to-azul-profundo/90 text-white relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-dourado-sacra rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="mb-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm">
                <Quote className="h-4 w-4" />
                Palavra do Capelão
              </span>
            </div>

            {/* Título da Mensagem */}
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {currentMessage.title}
            </h2>

            {/* Data */}
            <p className="text-center text-white/70 mb-8 text-lg">
              {currentMessage.date}
            </p>

            {/* Aspas decorativas */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 h-16 w-16 text-dourado-sacra/30" />
              <Quote className="absolute -bottom-4 -right-4 h-16 w-16 text-dourado-sacra/30 rotate-180" />

              {/* Mensagem */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                <p className="text-lg md:text-xl leading-relaxed text-white/90 text-center">
                  {currentMessage.excerpt}
                </p>
              </div>
            </div>

            {/* Informações do Capelão */}
            <div className="mt-12 flex flex-col items-center gap-6">
              {/* Foto (placeholder por enquanto) */}
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-dourado-sacra/50 flex items-center justify-center overflow-hidden">
                  {currentMessage.chaplainPhoto ? (
                    <Image
                      src={currentMessage.chaplainPhoto}
                      alt={currentMessage.chaplainName}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Quote className="h-8 w-8 text-dourado-sacra" />
                  )}
                </div>
                {/* Indicador de "ativo" */}
                <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-green-400 border-2 border-azul-profundo" />
              </div>

              {/* Nome e Cargo */}
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-1">
                  {currentMessage.chaplainName}
                </p>
                <p className="text-white/70 text-sm uppercase tracking-wide">
                  {currentMessage.chaplainRole}
                </p>
              </div>

              {/* Linha decorativa */}
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-dourado-sacra to-transparent" />

              {/* CTA */}
              {currentMessage.fullMessageUrl && (
                <Link
                  href={currentMessage.fullMessageUrl}
                  className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 hover:border-dourado-sacra"
                >
                  <span>Conheça a Capelania</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Padrão de fundo sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </section>
    </AnimatedSection>
  )
}

