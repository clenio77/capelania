import { getNoticias } from '@/lib/wordpress'
import NoticiasClient from './NoticiasClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Últimas notícias da Capelania Jesus Bom Pastor',
}

export default async function NoticiasPage() {
  const noticias = await getNoticias({ per_page: '50' })

  return <NoticiasClient initialNoticias={noticias} />
}
