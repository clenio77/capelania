import Script from 'next/script'

interface JsonLdProps {
  data: Record<string, any>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Schema para Organização Religiosa
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ReligiousOrganization',
    name: 'Capelania Jesus Bom Pastor',
    alternateName: 'Capelania JBP',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://capelania.vercel.app',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://capelania.vercel.app'}/images/jesus-bom-pastor.png`,
    description: 'Portal oficial da Capelania Jesus Bom Pastor. Comunidade de fé dedicada à evangelização e formação espiritual.',
    sameAs: [
      'https://www.instagram.com/capelaniajesusbompastor/',
      'https://www.facebook.com/capelaniajesusbompastor',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'MT',
    },
  }

  return <JsonLd data={schema} />
}

// Schema para Eventos
export function EventSchema({ event }: { event: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title.rendered,
    description: event.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    startDate: event.acf?.data_inicio || event.date,
    endDate: event.acf?.data_fim || event.date,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.acf?.local || 'Capelania Jesus Bom Pastor',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
      },
    },
    image: event.acf?.imagem_destaque || `${process.env.NEXT_PUBLIC_SITE_URL}/images/jesus-bom-pastor.png`,
    organizer: {
      '@type': 'ReligiousOrganization',
      name: event.acf?.organizador || 'Capelania Jesus Bom Pastor',
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    offers: event.acf?.valor ? {
      '@type': 'Offer',
      price: event.acf.valor.replace(/[^\d.,]/g, ''),
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    } : undefined,
  }

  return <JsonLd data={schema} />
}

// Schema para Artigos (Notícias)
export function ArticleSchema({ article }: { article: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title.rendered,
    description: article.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    image: article.acf?.imagem_destaque || `${process.env.NEXT_PUBLIC_SITE_URL}/images/jesus-bom-pastor.png`,
    datePublished: article.date,
    dateModified: article.modified || article.date,
    author: {
      '@type': 'Person',
      name: article.acf?.autor || 'Equipe de Comunicação',
    },
    publisher: {
      '@type': 'ReligiousOrganization',
      name: 'Capelania Jesus Bom Pastor',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/jesus-bom-pastor.png`,
      },
    },
  }

  return <JsonLd data={schema} />
}

// Schema para Igreja/Local
export function ChurchSchema({ church }: { church: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: church.title.rendered,
    description: church.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: church.acf?.endereco || '',
      addressCountry: 'BR',
    },
    telephone: church.acf?.telefone || '',
    image: church.acf?.banner || `${process.env.NEXT_PUBLIC_SITE_URL}/images/jesus-bom-pastor.png`,
  }

  return <JsonLd data={schema} />
}

// Schema de Breadcrumb
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd data={schema} />
}

