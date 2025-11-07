# 🚀 Configuração Correta da Vercel

## ❌ Erro Atual

```
Erro: Nenhuma versão do Next.js detectada.
```

**Causa**: A Vercel está tentando fazer build na raiz do projeto, mas o Next.js está em `nextjs-app/`.

## ✅ Solução

### Opção 1: Configurar na Interface da Vercel (Recomendado)

1. **Acesse o projeto na Vercel**
   - Vá em: https://vercel.com/dashboard
   - Clique no seu projeto

2. **Vá em Settings**
   - Clique em **Settings** no menu superior
   - Vá em **General** na barra lateral

3. **Configure o Root Directory**
   - Procure por **Root Directory**
   - Clique em **Edit**
   - Digite: `nextjs-app`
   - Clique em **Save**

4. **Faça um novo deploy**
   - Vá em **Deployments**
   - Clique nos três pontos do último deploy
   - Clique em **Redeploy**

### Opção 2: Arquivo vercel.json (Alternativa)

Crie um arquivo `vercel.json` na raiz do projeto:

```json
{
  "buildCommand": "cd nextjs-app && npm install && npm run build",
  "outputDirectory": "nextjs-app/.next",
  "devCommand": "cd nextjs-app && npm run dev",
  "installCommand": "cd nextjs-app && npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

Mas a **Opção 1 é mais simples e recomendada**.

## 📋 Configurações Corretas na Vercel

### Build & Development Settings

```
Framework Preset: Next.js
Root Directory: nextjs-app
Build Command: npm run build (padrão)
Output Directory: .next (padrão)
Install Command: npm install (padrão)
```

### Environment Variables

Adicione estas variáveis em **Settings** → **Environment Variables**:

```
NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de mais informações.
```

## 🔄 Passo a Passo Completo

### 1. Deletar o Deploy Atual (Opcional)

Se preferir começar do zero:
- Vá em **Settings** → **General**
- Role até o final
- Clique em **Delete Project**
- Confirme

### 2. Reimportar o Projeto

1. Na Vercel, clique em **Add New...** → **Project**
2. Selecione: `clenio77/capelania`
3. **Configure ANTES de fazer deploy:**

   **Root Directory**: 
   - Clique em **Edit** ao lado de "Root Directory"
   - Digite: `nextjs-app`
   - ✅ Confirme

   **Framework Preset**: 
   - Deve detectar automaticamente: **Next.js**

   **Build Command**: 
   - Deixe padrão: `npm run build`

   **Output Directory**: 
   - Deixe padrão: `.next`

   **Install Command**: 
   - Deixe padrão: `npm install`

4. **Environment Variables**:
   ```
   NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
   NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999
   ```

5. Clique em **Deploy**

## ✅ Verificação

Após o deploy, você deve ver:

```
✓ Clonando github.com/clenio77/capelania
✓ Instalando dependências...
✓ Compilando Next.js...
✓ Build concluído
✓ Deploy realizado com sucesso
```

## 🎯 Estrutura do Projeto

```
capelania/                    ← Raiz do repositório
├── nextjs-app/              ← Root Directory (configure aqui!)
│   ├── package.json         ← Next.js está aqui
│   ├── next.config.js
│   └── app/
├── wordpress-theme/
└── README.md
```

## 🐛 Troubleshooting

### Erro: "No Next.js version detected"
**Solução**: Configure `Root Directory` para `nextjs-app`

### Erro: "Module not found"
**Solução**: Certifique-se que `npm install` está rodando em `nextjs-app/`

### Build muito lento
**Solução**: A primeira build é sempre mais lenta. As próximas serão mais rápidas com cache.

### Imagens não carregam
**Solução**: Verifique se `images.unsplash.com` está em `next.config.js`:
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

## 📞 Suporte

- 📚 Docs Vercel: https://vercel.com/docs
- 💬 Suporte: https://vercel.com/support
- 🐛 Issues: https://github.com/clenio77/capelania/issues

## 🎉 Resultado Esperado

Após configurar corretamente:

- ✅ Build em ~2-3 minutos
- ✅ Site disponível em: `https://seu-projeto.vercel.app`
- ✅ Deploy automático a cada push
- ✅ Preview para cada PR
- ✅ HTTPS automático
- ✅ CDN global

---

**Importante**: Sempre configure o **Root Directory** como `nextjs-app` antes de fazer deploy!

