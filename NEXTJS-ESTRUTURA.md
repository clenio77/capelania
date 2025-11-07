# Next.js - Estrutura e Configuração Inicial

## 🚀 Setup do Projeto Next.js

### Criar Projeto

```bash
# Criar projeto Next.js com TypeScript
npx create-next-app@latest capelania-portal --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Navegar para o diretório
cd capelania-portal

# Instalar dependências adicionais
npm install @tanstack/react-query framer-motion
npm install -D @types/node
```

### Estrutura de Diretórios

```
capelania-portal/
├── app/                      # App Router (Next.js 13+)
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── comunidades/
│   │   ├── page.tsx         # Lista de comunidades
│   │   └── [slug]/
│   │       └── page.tsx     # Página individual
│   ├── noticias/
│   │   ├── page.tsx         # Lista de notícias
│   │   └── [slug]/
│   │       └── page.tsx     # Notícia individual
│   ├── eventos/
│   │   └── page.tsx         # Calendário de eventos
│   └── pastorais/
│       └── page.tsx         # Lista de pastorais
│
├── components/              # Componentes React
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── carousel/
│   │   └── ComunidadesCarousel.tsx
│   ├── cards/
│   │   ├── ComunidadeCard.tsx
│   │   ├── NoticiaCard.tsx
│   │   └── EventoCard.tsx
│   ├── calendario/
│   │   └── EventosCalendario.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Input.tsx
│
├── lib/                     # Utilitários e configurações
│   ├── wordpress.ts         # Cliente WordPress API
│   ├── utils.ts             # Funções utilitárias
│   └── constants.ts         # Constantes
│
├── styles/                  # Estilos globais
│   ├── globals.css          # Tailwind + CSS customizado
│   └── variables.css        # Variáveis CSS
│
├── public/                  # Arquivos estáticos
│   ├── images/
│   └── favicon.ico
│
├── types/                   # TypeScript types
│   ├── wordpress.ts
│   └── index.ts
│
└── config/                  # Configurações
    └── site.ts              # Configurações do site
```

---

## 📦 Configuração Base

### `package.json`

```json
{
  "name": "capelania-portal",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tanstack/react-query": "^5.0.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores do Design System
        'dourado-sacra': '#C9A961',
        'dourado-claro': '#E5D4A1',
        'dourado-escuro': '#A68B3D',
        'azul-profundo': '#1A3A5C',
        'azul-medio': '#2D5A7F',
        'azul-claro': '#4A90A4',
        'off-white': '#F8F7F4',
        'marrom-claro': '#8B7355',
        'verde-oliva': '#6B7D47',
        'terracota': '#A0522D',
      },
      fontFamily: {
        'titulo': ['Cormorant Garamond', 'serif'],
        'texto': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '2.5rem',
        'h3': '2rem',
        'h4': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}
```

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['seu-site-wordpress.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      },
    ],
  },
  // Otimizações
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
```

---

## 🔌 Integração com WordPress

### `lib/wordpress.ts`

```typescript
// Cliente para WordPress REST API

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://seu-site.com/wp-json/wp/v2'

export interface WordPressPost {
  id: number
  date: string
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media: number
  acf?: Record<string, any>
}

export interface Comunidade extends WordPressPost {
  acf: {
    nome_padroeiro?: string
    horarios_missa?: string
    endereco?: string
    telefone?: string
    email?: string
    coordenadas_gps?: string
  }
}

export interface Evento extends WordPressPost {
  acf: {
    data_inicio?: string
    data_fim?: string
    horario?: string
    local?: string
    comunidade_relacionada?: number
  }
}

// Função para buscar posts
export async function getPosts(postType: string): Promise<WordPressPost[]> {
  const res = await fetch(`${WORDPRESS_API_URL}/${postType}?_embed`, {
    next: { revalidate: 3600 } // Revalidar a cada hora
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return res.json()
}

// Função para buscar post por slug
export async function getPostBySlug(postType: string, slug: string): Promise<WordPressPost> {
  const res = await fetch(`${WORDPRESS_API_URL}/${postType}?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }
  
  const posts = await res.json()
  return posts[0]
}

// Função para buscar comunidade
export async function getComunidades(): Promise<Comunidade[]> {
  return getPosts('comunidade') as Promise<Comunidade[]>
}

// Função para buscar eventos
export async function getEventos(): Promise<Evento[]> {
  return getPosts('evento') as Promise<Evento[]>
}

// Função para buscar notícias (posts padrão)
export async function getNoticias(): Promise<WordPressPost[]> {
  return getPosts('posts')
}
```

### `.env.local`

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://seu-site-wordpress.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://capelania.com
```

---

## 🎨 Configuração de Estilos

### `styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Cores */
    --dourado-sacra: #C9A961;
    --azul-profundo: #1A3A5C;
    --branco-puro: #FFFFFF;
    --off-white: #F8F7F4;
    
    /* Tipografia */
    --fonte-titulo: 'Cormorant Garamond', serif;
    --fonte-texto: 'Inter', sans-serif;
    
    /* Espaçamento */
    --container-max: 1200px;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-texto text-gray-900 antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-titulo text-azul-profundo;
  }
}

@layer components {
  .container-custom {
    @apply max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8;
  }
  
  .section-padding {
    @apply py-16 md:py-24;
  }
}
```

---

## 🏗️ Componentes Base

### `components/layout/Header.tsx`

```typescript
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-titulo text-azul-profundo">
            Capelania Jesus Bom Pastor
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}
```

### `components/carousel/ComunidadesCarousel.tsx`

```typescript
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Comunidade } from '@/lib/wordpress'

interface ComunidadesCarouselProps {
  comunidades: Comunidade[]
}

export default function ComunidadesCarousel({ comunidades }: ComunidadesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % comunidades.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [comunidades.length])

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % comunidades.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + comunidades.length) % comunidades.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {comunidades.map((comunidade, index) => (
        <div
          key={comunidade.id}
          className={`absolute inset-0 transition-opacity duration-800 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={comunidade.featured_media_url || '/placeholder.jpg'}
            alt={comunidade.title.rendered}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/90 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-titulo mb-4">
                {comunidade.title.rendered}
              </h2>
              {comunidade.acf?.nome_padroeiro && (
                <p className="text-xl mb-6">{comunidade.acf.nome_padroeiro}</p>
              )}
              <a
                href={`/comunidades/${comunidade.slug}`}
                className="inline-block bg-dourado-sacra text-white px-6 py-3 rounded hover:bg-dourado-escuro transition"
              >
                Conheça Mais
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition"
        aria-label="Slide anterior"
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition"
        aria-label="Próximo slide"
      >
        ›
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {comunidades.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 w-3'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
```

---

## 📄 Página Inicial

### `app/page.tsx`

```typescript
import { getComunidades, getNoticias } from '@/lib/wordpress'
import ComunidadesCarousel from '@/components/carousel/ComunidadesCarousel'
import NoticiaCard from '@/components/cards/NoticiaCard'

export default async function Home() {
  const comunidades = await getComunidades()
  const noticias = await getNoticias()

  return (
    <main>
      {/* Hero Carousel */}
      <section>
        <ComunidadesCarousel comunidades={comunidades} />
      </section>

      {/* Últimas Notícias */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-section text-center mb-12">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.slice(0, 3).map((noticia) => (
              <NoticiaCard key={noticia.id} noticia={noticia} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
```

---

## 🔧 Configuração WordPress Headless

### Plugin Necessário: WP REST API

O WordPress já vem com REST API nativo, mas você pode instalar:

1. **WPGraphQL** (opcional) - Para GraphQL ao invés de REST
2. **ACF to REST API** - Para expor campos ACF na API
3. **CORS Headers** - Para permitir requisições do Next.js

### Configuração no WordPress

```php
// Adicionar ao functions.php do tema WordPress

// Habilitar CORS para desenvolvimento
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Deploy automático

### Netlify (Alternativa)

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configurar variáveis de ambiente

---

**Versão:** 1.0  
**Status:** Estrutura Next.js Configurada ✅

