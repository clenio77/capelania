# Capelania Jesus Bom Pastor - Portal Web

Portal oficial da Capelania Jesus Bom Pastor, desenvolvido com Next.js 14, React Query e Tailwind CSS.

## ✨ Características

- ✅ **Funciona sem WordPress** - Dados simulados incluídos para desenvolvimento e demonstração
- ✅ **Design Moderno e Responsivo** - Interface elegante para desktop e mobile
- ✅ **Animações Suaves** - Transições e efeitos com Framer Motion
- ✅ **SEO Otimizado** - Meta tags, Open Graph e sitemap
- ✅ **Performance** - Otimização de imagens e cache inteligente
- ✅ **WhatsApp Integration** - Botão flutuante para contato direto
- ✅ **Dados Completos** - 4 comunidades, 6 notícias, 5 eventos e 6 pastorais simuladas

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ instalado

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

> 💡 **Nota**: O site funciona imediatamente com dados simulados. Não é necessário configurar WordPress para desenvolvimento!

### Build de Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
nextjs-app/
├── app/                    # App Router (Next.js 14+)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── comunidades/       # Páginas de comunidades
│   ├── noticias/          # Páginas de notícias
│   └── eventos/           # Páginas de eventos
├── components/            # Componentes React
│   ├── layout/           # Header, Footer, Navigation
│   ├── carousel/         # Carrossel de comunidades
│   └── cards/            # Cards de conteúdo
├── lib/                  # Utilitários
│   ├── wordpress.ts     # Cliente WordPress API
│   └── utils.ts         # Funções utilitárias
├── config/               # Configurações
│   └── site.ts          # Configurações do site
└── types/               # TypeScript types
    └── wordpress.ts     # Tipos WordPress
```

## 📊 Dados Simulados (Mock Data)

O site inclui dados completos para demonstração:

### Comunidades (4)
- Comunidade São José
- Comunidade Nossa Senhora Aparecida
- Comunidade São Francisco de Assis
- Comunidade Santa Teresinha

Cada comunidade inclui: banner, logo, endereço, horários de missa, telefone e responsável.

### Notícias (6)
- Retiro de Carnaval 2025
- Lançamento da Pastoral da Juventude
- Campanha Solidária de Inverno
- Curso de Formação para Catequistas
- Celebração de Ano Novo
- Encontro de Casais

### Eventos (5)
- Missa Solene do Padroeiro
- Retiro de Quaresma 2025
- Encontro de Jovens
- Festa Junina 2025
- Caminhada pela Vida e pela Paz

### Pastorais (6)
- Pastoral Familiar
- Pastoral da Juventude
- Pastoral da Criança
- Pastoral da Caridade
- Pastoral Litúrgica
- Pastoral da Catequese

Todas as imagens são de alta qualidade do Unsplash.

## ⚙️ Configuração WordPress (Opcional)

Se desejar conectar com WordPress real, configure:

### Custom Post Types Necessários

1. **Comunidade** (`comunidade`)
2. **Evento** (`evento`)
3. **Pastoral** (`pastoral`)

### Campos ACF Necessários

**Comunidade:**
- `banner` (image) - Banner da comunidade
- `logo` (image) - Logo da comunidade
- `endereco` (text) - Endereço completo
- `horarios_missa` (text) - Horários das celebrações
- `telefone` (text) - Telefone de contato
- `responsavel` (text) - Nome do responsável

**Notícia:**
- `imagem_destaque` (image) - Imagem principal
- `categoria` (text) - Categoria da notícia
- `autor` (text) - Autor da notícia

**Evento:**
- `imagem_destaque` (image) - Imagem do evento
- `data_evento` (date) - Data do evento
- `hora_evento` (time) - Horário do evento
- `local_evento` (text) - Local do evento
- `organizador` (text) - Organizador do evento

**Pastoral:**
- `imagem_destaque` (image) - Imagem da pastoral
- `coordenador` (text) - Nome do coordenador
- `contato` (text) - Telefone/email de contato
- `horario_reuniao` (text) - Horário das reuniões

## 🎨 Design System

O projeto usa Tailwind CSS com um design system customizado:
- Cores: Dourado Sacra, Azul Profundo
- Tipografia: Cormorant Garamond (títulos), Inter (corpo)
- Componentes: Cards, Botões, Formulários

Veja `DESIGN-SYSTEM.md` para mais detalhes.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## 🔧 Variáveis de Ambiente (Opcional)

O site funciona sem configuração, mas você pode personalizar criando um arquivo `.env.local`:

```env
# URL do site (para SEO e compartilhamento)
NEXT_PUBLIC_SITE_URL=https://capelania.com

# WhatsApp (formato: código país + DDD + número)
NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de mais informações.

# WordPress API (opcional - se não configurado, usa dados mock)
NEXT_PUBLIC_WORDPRESS_API_URL=https://seu-wordpress.com/wp-json/wp/v2
```

Veja `ENV_VARS.md` para documentação completa das variáveis.

## 📦 Deploy

### Vercel (Recomendado) ⭐

O deploy na Vercel é simples e gratuito:

1. Faça push do código para GitHub/GitLab/Bitbucket
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente (opcional)
4. Deploy automático!

**Guia completo**: Veja `DEPLOY_VERCEL.md` para instruções detalhadas.

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- **Netlify** - Deploy automático com Git
- **Railway** - Ideal para full-stack (Next.js + WordPress)
- **AWS Amplify** - Infraestrutura AWS
- **DigitalOcean App Platform** - Simples e escalável

## 🐛 Troubleshooting

### Erro ao buscar dados do WordPress

- Verifique se a URL da API está correta
- Verifique se o WordPress REST API está habilitado
- Verifique se os Custom Post Types estão registrados corretamente

### Imagens não aparecem

- Verifique se o domínio está configurado em `next.config.js`
- Verifique se as imagens existem no WordPress
- Verifique os caminhos das imagens

## 📚 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuindo

Este é um projeto privado para a Capelania Jesus Bom Pastor.

## 📄 Licença

Copyright © 2024 Capelania Jesus Bom Pastor. Todos os direitos reservados.

