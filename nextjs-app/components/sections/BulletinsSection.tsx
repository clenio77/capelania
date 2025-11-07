'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { FileText, Download, Calendar, Search, Filter } from 'lucide-react'

interface Bulletin {
  id: number
  title: string
  date: string
  month: string
  year: number
  fileUrl: string
  fileSize: string
  downloads: number
  thumbnail?: string
}

const mockBulletins: Bulletin[] = [
  {
    id: 1,
    title: 'Boletim Novembro 2024',
    date: '2024-11-01',
    month: 'Novembro',
    year: 2024,
    fileUrl: '/bulletins/boletim-nov-2024.pdf',
    fileSize: '2.3 MB',
    downloads: 145,
  },
  {
    id: 2,
    title: 'Boletim Outubro 2024',
    date: '2024-10-01',
    month: 'Outubro',
    year: 2024,
    fileUrl: '/bulletins/boletim-out-2024.pdf',
    fileSize: '2.1 MB',
    downloads: 189,
  },
  {
    id: 3,
    title: 'Boletim Setembro 2024',
    date: '2024-09-01',
    month: 'Setembro',
    year: 2024,
    fileUrl: '/bulletins/boletim-set-2024.pdf',
    fileSize: '2.4 MB',
    downloads: 203,
  },
  {
    id: 4,
    title: 'Boletim Agosto 2024',
    date: '2024-08-01',
    month: 'Agosto',
    year: 2024,
    fileUrl: '/bulletins/boletim-ago-2024.pdf',
    fileSize: '2.2 MB',
    downloads: 178,
  },
  {
    id: 5,
    title: 'Boletim Julho 2024',
    date: '2024-07-01',
    month: 'Julho',
    year: 2024,
    fileUrl: '/bulletins/boletim-jul-2024.pdf',
    fileSize: '2.5 MB',
    downloads: 167,
  },
  {
    id: 6,
    title: 'Boletim Junho 2024',
    date: '2024-06-01',
    month: 'Junho',
    year: 2024,
    fileUrl: '/bulletins/boletim-jun-2024.pdf',
    fileSize: '2.0 MB',
    downloads: 154,
  },
]

export default function BulletinsSection() {
  const [bulletins] = useState<Bulletin[]>(mockBulletins)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')

  const years = Array.from(new Set(bulletins.map(b => b.year))).sort((a, b) => b - a)

  const filteredBulletins = bulletins.filter(bulletin => {
    const matchesSearch = bulletin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bulletin.month.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === 'all' || bulletin.year === selectedYear
    
    return matchesSearch && matchesYear
  })

  const handleDownload = (bulletin: Bulletin) => {
    // Aqui você implementaria o download real
    console.log('Downloading:', bulletin.title)
    // window.open(bulletin.fileUrl, '_blank')
  }

  return (
    <AnimatedSection delay={0.2}>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-azul-profundo/10 mb-4">
              <FileText className="w-8 h-8 text-azul-profundo" />
            </div>
            <h2 className="text-section mb-4">Boletins Mensais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acompanhe todas as atividades, celebrações e novidades da nossa capelania através dos boletins mensais.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            {/* Busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por mês ou título..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all"
              />
            </div>

            {/* Filtro de Ano */}
            <div className="relative md:w-48">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all appearance-none bg-white"
              >
                <option value="all">Todos os anos</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid de Boletins */}
          {filteredBulletins.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBulletins.map((bulletin) => (
                <div
                  key={bulletin.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Thumbnail/Icon */}
                  <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-azul-profundo to-azul-profundo/80 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>

                  {/* Info */}
                  <div className="mb-4">
                    <h3 className="font-bold text-azul-profundo text-lg mb-2">
                      {bulletin.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{bulletin.month} {bulletin.year}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{bulletin.fileSize}</span>
                      <span>{bulletin.downloads} downloads</span>
                    </div>
                  </div>

                  {/* Botão Download */}
                  <button
                    onClick={() => handleDownload(bulletin)}
                    className="w-full bg-azul-profundo text-white py-3 px-4 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all flex items-center justify-center gap-2 group-hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">
                Nenhum boletim encontrado com os filtros selecionados.
              </p>
            </div>
          )}

          {/* Info adicional */}
          <div className="mt-12 bg-dourado-sacra/10 rounded-2xl p-8 border border-dourado-sacra/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-bold text-azul-profundo text-xl mb-4 text-center">
                Receba os Boletins por Email
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Cadastre-se para receber automaticamente nossos boletins mensais em sua caixa de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-profundo focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="bg-azul-profundo text-white px-6 py-3 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all whitespace-nowrap"
                >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-azul-profundo mb-1">
                {bulletins.length}
              </div>
              <div className="text-sm text-gray-600">Boletins Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-azul-profundo mb-1">
                {bulletins.reduce((acc, b) => acc + b.downloads, 0)}
              </div>
              <div className="text-sm text-gray-600">Total de Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-azul-profundo mb-1">
                {years.length}
              </div>
              <div className="text-sm text-gray-600">Anos de Arquivo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-azul-profundo mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600">Grátis</div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

