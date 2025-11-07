import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/providers/Providers'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Capelania', 'Igreja Católica', 'Jesus Bom Pastor', 'Comunidades'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          <Breadcrumbs />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}

