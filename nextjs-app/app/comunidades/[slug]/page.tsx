import { getComunidadeBySlug, getComunidades } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
import ComunidadeClient from './ComunidadeClient'

interface ComunidadePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const comunidades = await getComunidades()
  return comunidades.map((comunidade) => ({
    slug: comunidade.slug,
  }))
}

export default async function ComunidadePage({ params }: ComunidadePageProps) {
  // Normalizar o slug
  const normalizedSlug = params.slug.toLowerCase().trim()
  const comunidade = await getComunidadeBySlug(normalizedSlug)

  if (process.env.NODE_ENV !== 'production') {
    console.info('[ComunidadePage] slug', normalizedSlug, 'resolved to', comunidade?.slug)
  }

  if (!comunidade) {
    notFound()
  }

  return <ComunidadeClient comunidade={comunidade} />
}

