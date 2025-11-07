# 🚀 Quick Start - Deploy em 5 Minutos

Guia rápido para colocar o site no ar na Vercel.

## ✅ Pré-requisitos

- [ ] Conta no GitHub (gratuita)
- [ ] Conta na Vercel (gratuita)
- [ ] Código do projeto

## 📋 Passo a Passo

### 1️⃣ Preparar o Código (2 minutos)

```bash
# Entre na pasta do projeto
cd nextjs-app

# Inicialize o Git (se ainda não fez)
git init
git add .
git commit -m "Initial commit"
```

### 2️⃣ Enviar para o GitHub (1 minuto)

1. Crie um novo repositório no [GitHub](https://github.com/new)
2. Nome sugerido: `capelania-portal`
3. Deixe como **Private** (ou Public se preferir)
4. **NÃO** adicione README, .gitignore ou licença

```bash
# Conecte com o repositório (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/capelania-portal.git
git branch -M main
git push -u origin main
```

### 3️⃣ Deploy na Vercel (2 minutos)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up** e conecte com GitHub
3. Clique em **Add New...** > **Project**
4. Selecione o repositório `capelania-portal`
5. Configure:
   - **Framework Preset**: Next.js ✅ (detectado automaticamente)
   - **Root Directory**: `.` (ou `nextjs-app` se estiver em subpasta)
   - **Build Command**: `npm run build` ✅ (padrão)
   - **Output Directory**: `.next` ✅ (padrão)

6. **Environment Variables** (opcional, mas recomendado):

```
NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de mais informações sobre a Capelania.
```

7. Clique em **Deploy** 🚀

### 4️⃣ Aguarde o Build (1-2 minutos)

A Vercel vai:
- ✅ Instalar dependências
- ✅ Fazer o build do Next.js
- ✅ Otimizar imagens
- ✅ Gerar páginas estáticas
- ✅ Configurar CDN global

### 5️⃣ Pronto! 🎉

Seu site estará disponível em:
```
https://seu-projeto.vercel.app
```

## 🎯 Próximos Passos

### Personalizar Domínio (Opcional)

1. Na Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio (ex: `capelania.com.br`)
3. Configure os DNS conforme instruções

### Configurar WhatsApp

1. Edite as variáveis de ambiente na Vercel
2. Adicione seu número no formato: `5534999999999`
3. Faça um novo deploy para aplicar

### Conectar WordPress (Opcional)

Se tiver WordPress configurado:

1. Adicione a variável:
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://seu-wordpress.com/wp-json/wp/v2
```

2. Faça um novo deploy

> **Nota**: O site funciona perfeitamente sem WordPress, usando dados simulados!

## 🔄 Atualizações Futuras

Para atualizar o site:

```bash
# Faça suas alterações no código
git add .
git commit -m "Descrição da alteração"
git push
```

A Vercel fará deploy automático! ⚡

## 🆘 Problemas Comuns

### Build falhou

**Solução**: Teste localmente primeiro
```bash
npm install
npm run build
```

### Imagens não aparecem

**Solução**: Verifique `next.config.js`:
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

**Solução**: 
- Ative **Edge Functions** nas configurações da Vercel
- Verifique o tamanho das imagens
- Use o Vercel Speed Insights

## 📞 Suporte

- 📚 [Documentação Vercel](https://vercel.com/docs)
- 📚 [Documentação Next.js](https://nextjs.org/docs)
- 💬 [Comunidade Vercel](https://github.com/vercel/vercel/discussions)

## ✨ Recursos Incluídos

Seu site já vem com:

- ✅ 4 Comunidades completas
- ✅ 6 Notícias com imagens
- ✅ 5 Eventos futuros
- ✅ 6 Pastorais ativas
- ✅ Botão do WhatsApp
- ✅ Design responsivo
- ✅ SEO otimizado
- ✅ Performance máxima
- ✅ HTTPS automático
- ✅ CDN global

## 🎊 Parabéns!

Seu site está no ar e funcionando perfeitamente! 🚀

Agora você pode:
- Compartilhar o link com sua comunidade
- Personalizar o conteúdo
- Adicionar seu domínio
- Conectar com WordPress (opcional)
- Monitorar acessos no Analytics

---

**Tempo total**: ~5 minutos ⏱️

**Custo**: R$ 0,00 (plano gratuito da Vercel) 💰

**Resultado**: Site profissional no ar! 🎉

