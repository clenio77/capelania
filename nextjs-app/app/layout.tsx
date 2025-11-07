import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/config/site'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/providers/Providers'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import InstallPrompt from '@/components/pwa/InstallPrompt'
import SkipLink from '@/components/a11y/SkipLink'
import FocusVisible from '@/components/a11y/FocusVisible'
import { OrganizationSchema } from '@/components/seo/JsonLd'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#003366' },
    { media: '(prefers-color-scheme: dark)', color: '#003366' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Capelania Jesus Bom Pastor',
    'Igreja Católica',
    'Comunidade Católica',
    'Missa',
    'Celebrações',
    'Pastorais',
    'Fé Católica',
    'Evangelização',
    'Padre Handley',
    'Comunidade São Lucas',
    'Comunidade Santo Expedito',
    'Nossa Senhora de Fátima',
    'Nossa Senhora Aparecida',
    'Liturgia Diária',
    'Pedidos de Oração',
    'Eventos Católicos',
    'Assentamento Tangará',
  ],
  authors: [{ name: 'Capelania Jesus Bom Pastor' }],
  creator: 'Capelania Jesus Bom Pastor',
  publisher: 'Capelania Jesus Bom Pastor',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/jesus-bom-pastor.png`,
        width: 1200,
        height: 630,
        alt: 'Capelania Jesus Bom Pastor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/jesus-bom-pastor.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'pt-BR': siteConfig.url,
      'en': `${siteConfig.url}/en`,
      'es': `${siteConfig.url}/es`,
    },
  },
  category: 'religion',
  classification: 'Religious Organization',
  verification: {
    // google: 'seu-codigo-google-search-console',
    // yandex: 'seu-codigo-yandex',
    // bing: 'seu-codigo-bing',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Capelania JBP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
      </head>
      <body>
        <Providers>
          <SkipLink />
          <FocusVisible />
          <Header />
          <Breadcrumbs />
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <InstallPrompt />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}

