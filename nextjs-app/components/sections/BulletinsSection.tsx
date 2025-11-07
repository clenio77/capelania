'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { FileText, Download, Calendar, Search, Filter } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

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
  const t = useTranslations('bulletins')
  const newsletterT = useTranslations('newsletter')

  const years = Array.from(new Set(bulletins.map((b) => b.year))).sort((a, b) => b - a)

  const filteredBulletins = bulletins.filter((bulletin) => {
    const matchesSearch =
      bulletin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bulletin.month.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === 'all' || bulletin.year === selectedYear

    return matchesSearch && matchesYear
  })

  const handleDownload = (bulletin: Bulletin) => {
    console.log('Downloading:', bulletin.title)
  }

  return (
    <AnimatedSection delay={0.2}>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-azul-profundo/10">
              <FileText className="h-8 w-8 text-azul-profundo" />
            </div>
            <h2 className="text-section mb-4">{t('title')}</h2>
            <p className="mx-auto max-w-2xl text-gray-600">{t('description')}</p>
          </div>

          <div className="mx-auto mb-8 flex max-w-3xl flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-12 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
              />
            </div>

            <div className="relative md:w-48">
              <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full appearance-none rounded-lg border border-gray-300 px-12 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
              >
                <option value="all">{t('yearFilter')}</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredBulletins.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredBulletins.map((bulletin) => (
                <div
                  key={bulletin.id}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-azul-profundo to-azul-profundo/80 text-white">
                    <FileText className="h-16 w-16" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-azul-profundo">{bulletin.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {bulletin.month} {bulletin.year}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                      <span>
                        {t('sizeLabel')}: {bulletin.fileSize}
                      </span>
                      <span>
                        {bulletin.downloads} {t('downloadsLabel')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(bulletin)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-azul-profundo py-3 px-4 font-semibold text-white transition-all hover:bg-azul-profundo/90"
                  >
                    <Download className="h-5 w-5" />
                    {t('downloadButton')}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <FileText className="mx-auto mb-4 h-16 w-16 text-gray-300" />
              <p className="text-gray-600">{t('empty')}</p>
            </div>
          )}

          <div className="mt-12 rounded-2xl border border-dourado-sacra/20 bg-dourado-sacra/10 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-3 text-xl font-bold text-azul-profundo">{t('receiveTitle')}</h3>
              <p className="mb-6 text-gray-600">{t('receiveDescription')}</p>
              <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder={newsletterT('inlinePlaceholder')}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-azul-profundo"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-azul-profundo px-6 py-3 font-semibold text-white transition-all hover:bg-azul-profundo/90"
                >
                  {t('subscribe')}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-azul-profundo">{bulletins.length}</div>
              <div className="text-sm text-gray-600">{t('stats.available')}</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-azul-profundo">
                {bulletins.reduce((acc, b) => acc + b.downloads, 0)}
              </div>
              <div className="text-sm text-gray-600">{t('stats.totalDownloads')}</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-azul-profundo">{years.length}</div>
              <div className="text-sm text-gray-600">{t('stats.years')}</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-bold text-azul-profundo">100%</div>
              <div className="text-sm text-gray-600">{t('stats.free')}</div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
