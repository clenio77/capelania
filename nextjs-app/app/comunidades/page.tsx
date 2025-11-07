import { getComunidades } from '@/lib/wordpress'
import ComunidadesClient from './ComunidadesClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comunidades',
  description: 'Conheça as comunidades da Capelania Jesus Bom Pastor',
}

export default async function ComunidadesPage() {
  const comunidades = await getComunidades()

  return <ComunidadesClient comunidades={comunidades} />
}

