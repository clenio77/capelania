import { getPastoralBySlug, getPastorais } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
import PastoralClient from './PastoralClient'

interface PastoralPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const pastorais = await getPastorais()
  return pastorais.map((pastoral) => ({
    slug: pastoral.slug,
  }))
}

export default async function PastoralPage({ params }: PastoralPageProps) {
  const pastoral = await getPastoralBySlug(params.slug)

  if (!pastoral) {
    notFound()
  }

  return <PastoralClient pastoral={pastoral} />
}

