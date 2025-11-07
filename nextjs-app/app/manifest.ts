import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Capelania Jesus Bom Pastor',
    short_name: 'Capelania JBP',
    description: 'Portal oficial da Capelania Jesus Bom Pastor. Comunidade de fé dedicada à evangelização e formação espiritual.',
    start_url: '/',
    display: 'standalone',
    background_color: '#003366',
    theme_color: '#003366',
    orientation: 'portrait-primary',
    categories: ['religion', 'lifestyle'],
    lang: 'pt-BR',
    dir: 'ltr',
    icons: [
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
    ],
    shortcuts: [
      {
        name: 'Pedidos de Oração',
        short_name: 'Oração',
        description: 'Envie um pedido de oração',
        url: '/pedidos-oracao',
        icons: [{ src: '/icons/icon-prayer.png', sizes: '96x96' }],
      },
      {
        name: 'Liturgia Diária',
        short_name: 'Liturgia',
        description: 'Veja a liturgia do dia',
        url: '/#liturgia',
        icons: [{ src: '/icons/icon-bible.png', sizes: '96x96' }],
      },
      {
        name: 'Próximos Eventos',
        short_name: 'Eventos',
        description: 'Confira os próximos eventos',
        url: '/#eventos',
        icons: [{ src: '/icons/icon-calendar.png', sizes: '96x96' }],
      },
    ],
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Página inicial da Capelania',
      },
      {
        src: '/screenshots/mobile.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Capelania no celular',
      },
    ],
  }
}

