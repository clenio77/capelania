# Deploy na Vercel - Guia Completo

Este guia explica como fazer o deploy do site da Capelania Jesus Bom Pastor na Vercel.

## 🚀 Passo a Passo

### 1. Preparar o Repositório Git

Se ainda não tiver um repositório Git, crie um:

```bash
cd nextjs-app
git init
git add .
git commit -m "Initial commit - Capelania Jesus Bom Pastor"
```

Depois, envie para o GitHub, GitLab ou Bitbucket:

```bash
# Exemplo com GitHub
git remote add origin https://github.com/seu-usuario/capelania.git
git branch -M main
git push -u origin main
```

### 2. Criar Conta na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up**
3. Conecte com sua conta do GitHub, GitLab ou Bitbucket

### 3. Importar o Projeto

1. No painel da Vercel, clique em **Add New...** > **Project**
2. Selecione o repositório do projeto
3. Configure as seguintes opções:

**Framework Preset**: Next.js (detectado automaticamente)

**Root Directory**: `nextjs-app` (se o projeto estiver em uma subpasta) ou `.` (se estiver na raiz)

**Build Command**: `npm run build` (padrão)

**Output Directory**: `.next` (padrão)

### 4. Configurar Variáveis de Ambiente

Na seção **Environment Variables**, adicione:

```
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de mais informações sobre a Capelania Jesus Bom Pastor.
```

**Opcional** (se tiver WordPress configurado):
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://seu-wordpress.com/wp-json/wp/v2
```

> ⚠️ **Nota**: Se não configurar `NEXT_PUBLIC_WORDPRESS_API_URL`, o site usará dados simulados automaticamente.

### 5. Deploy

1. Clique em **Deploy**
2. Aguarde o build (geralmente leva 2-3 minutos)
3. Seu site estará disponível em `https://seu-projeto.vercel.app`

## 🎨 Funcionalidades Disponíveis

O site funciona perfeitamente sem WordPress, usando dados simulados:

- ✅ **4 Comunidades** com banners e informações completas
- ✅ **6 Notícias** com imagens e conteúdo detalhado
- ✅ **5 Eventos** com datas e localizações
- ✅ **6 Pastorais** com descrições e coordenadores
- ✅ **Imagens de alta qualidade** do Unsplash
- ✅ **Botão flutuante do WhatsApp**
- ✅ **Design responsivo** para mobile e desktop
- ✅ **Animações suaves** com Framer Motion
- ✅ **SEO otimizado**

## 🔄 Atualizações Automáticas

A Vercel faz deploy automático sempre que você fizer push para o branch principal:

```bash
git add .
git commit -m "Atualização do conteúdo"
git push
```

## 🌐 Domínio Personalizado

Para usar um domínio próprio (ex: `capelania.com.br`):

1. No painel da Vercel, vá em **Settings** > **Domains**
2. Clique em **Add Domain**
3. Digite seu domínio
4. Siga as instruções para configurar os DNS

### Configuração de DNS

Adicione os seguintes registros no seu provedor de domínio:

**Para domínio raiz (capelania.com.br)**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**Para subdomínio (www.capelania.com.br)**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔧 Configurações Avançadas

### Revalidação de Cache

O site está configurado para revalidar o cache a cada hora. Para alterar:

Edite `nextjs-app/lib/wordpress.ts`:

```typescript
next: { revalidate: 3600 } // 3600 segundos = 1 hora
```

### Otimização de Imagens

As imagens do Unsplash são otimizadas automaticamente pelo Next.js Image Optimization.

Para adicionar outros domínios de imagens, edite `nextjs-app/next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'seu-dominio.com',
    },
  ],
}
```

## 📊 Monitoramento

A Vercel oferece analytics integrado:

1. Vá em **Analytics** no painel
2. Veja métricas de:
   - Visitantes únicos
   - Pageviews
   - Tempo de carregamento
   - Core Web Vitals

## 🐛 Troubleshooting

### Build falhou

Verifique os logs no painel da Vercel. Erros comuns:

- **Dependências faltando**: Execute `npm install` localmente
- **Erros de TypeScript**: Execute `npm run build` localmente para ver os erros
- **Variáveis de ambiente**: Verifique se todas estão configuradas

### Imagens não carregam

Verifique se o domínio das imagens está em `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### Site lento

- Ative o **Edge Functions** nas configurações
- Verifique o tamanho das imagens
- Use o **Vercel Speed Insights** para identificar gargalos

## 💡 Dicas

1. **Preview Deployments**: Cada pull request gera um preview automático
2. **Rollback**: Você pode voltar para qualquer deploy anterior com um clique
3. **Environment Variables por Branch**: Configure variáveis diferentes para produção e desenvolvimento
4. **Edge Functions**: Para melhor performance global, considere usar Edge Functions

## 📞 Suporte

- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Comunidade Vercel: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## ✅ Checklist Pré-Deploy

- [ ] Código commitado no Git
- [ ] Repositório no GitHub/GitLab/Bitbucket
- [ ] Variáveis de ambiente configuradas
- [ ] Build local funcionando (`npm run build`)
- [ ] Testes realizados (`npm run dev`)
- [ ] README atualizado
- [ ] Imagens otimizadas

## 🎉 Pronto!

Seu site estará no ar em poucos minutos, com:
- ⚡ Performance otimizada
- 🌍 CDN global
- 🔒 HTTPS automático
- 📱 Responsivo
- ♿ Acessível
- 🔍 SEO otimizado

Bom deploy! 🚀

