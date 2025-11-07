# 🙏 Capelania Jesus Bom Pastor

Portal oficial da Capelania Jesus Bom Pastor - Um projeto moderno desenvolvido com Next.js 14 e WordPress Headless CMS.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Características

- ✅ **Next.js 14** com App Router
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para estilização
- ✅ **Framer Motion** para animações suaves
- ✅ **React Query** para gerenciamento de estado
- ✅ **WordPress Headless CMS** (opcional)
- ✅ **Dados Mock** incluídos para desenvolvimento
- ✅ **SEO Otimizado** com meta tags
- ✅ **Responsivo** para todos os dispositivos
- ✅ **Performance** otimizada com Next.js Image

## 📁 Estrutura do Projeto

```
capelania/
├── nextjs-app/              # Aplicação Next.js (Frontend)
│   ├── app/                 # App Router (Next.js 14+)
│   ├── components/          # Componentes React
│   ├── lib/                 # Utilitários e funções
│   ├── hooks/               # Custom React Hooks
│   ├── types/               # TypeScript types
│   ├── config/              # Configurações
│   └── public/              # Arquivos estáticos
├── wordpress/               # WordPress (Backend - opcional)
└── README.md               # Este arquivo
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/clenio77/capelania.git
cd capelania

# Entre na pasta do Next.js
cd nextjs-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Funcionalidades

### Páginas Principais

- **Home** - Hero carousel, destaques, eventos, notícias e testemunhos
- **Comunidades** - Listagem e páginas individuais das comunidades
- **Pastorais** - Informações sobre as pastorais ativas
- **Notícias** - Blog com notícias e eventos
- **Eventos** - Calendário e detalhes dos eventos
- **Celebrações** - Horários e informações de missas
- **Fale Conosco** - Formulário de contato

### Componentes Especiais

- 🎠 **Carousel de Comunidades** - Banner rotativo na home
- ⏰ **Countdown de Eventos** - Contagem regressiva em tempo real
- 💬 **Testemunhos** - Depoimentos da comunidade
- 📱 **Botão WhatsApp** - Flutuante para contato rápido
- 🔝 **Scroll to Top** - Botão para voltar ao topo

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na pasta `nextjs-app`:

```env
# URL do site (para SEO)
NEXT_PUBLIC_SITE_URL=https://capelania.vercel.app

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de mais informações.

# WordPress API (opcional)
NEXT_PUBLIC_WORDPRESS_API_URL=https://seu-wordpress.com/wp-json/wp/v2
```

> **Nota**: O site funciona perfeitamente sem WordPress, usando dados simulados!

## 📊 Dados Simulados

O projeto inclui dados completos para demonstração:

- ✅ 4 Comunidades com banners e informações
- ✅ 6 Notícias com imagens e conteúdo
- ✅ 5 Eventos futuros
- ✅ 6 Pastorais ativas

Todas as imagens são de alta qualidade do [Unsplash](https://unsplash.com).

## 🚀 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clenio77/capelania)

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático!

**Guia completo**: Veja `nextjs-app/DEPLOY_VERCEL.md`

### Outras Plataformas

- **Netlify** - Deploy automático com Git
- **Railway** - Ideal para full-stack
- **DigitalOcean** - App Platform
- **AWS Amplify** - Infraestrutura AWS

## 📚 Documentação

- 📖 [README do Next.js](nextjs-app/README.md)
- 🚀 [Guia de Deploy na Vercel](nextjs-app/DEPLOY_VERCEL.md)
- 🔧 [Variáveis de Ambiente](nextjs-app/ENV_VARS.md)
- ⚡ [Quick Start - 5 minutos](nextjs-app/QUICK_START.md)
- 📝 [Changelog](nextjs-app/CHANGELOG.md)

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm start            # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 🎨 Design System

### Cores

- **Dourado Sacra**: `#C9A961` - Cor principal
- **Azul Profundo**: `#1A3A5C` - Cor secundária
- **Off White**: `#F8F7F4` - Fundo claro

### Tipografia

- **Títulos**: Cormorant Garamond
- **Corpo**: Inter

## 🤝 Contribuindo

Este é um projeto privado da Capelania Jesus Bom Pastor.

## 📄 Licença

Copyright © 2025 Capelania Jesus Bom Pastor. Todos os direitos reservados.

## 📞 Suporte

- 📧 Email: contato@capelania.com
- 📱 WhatsApp: (34) 99999-9999
- 🌐 Site: [capelania.com](https://capelania.com)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Unsplash](https://unsplash.com/) pelas imagens

---

**Desenvolvido com ❤️ para a Capelania Jesus Bom Pastor**
