# 🚀 Deploy na Vercel - Guia Definitivo

## ⚠️ PROBLEMA ATUAL

```
Erro: Nenhuma versão do Next.js detectada.
```

**Causa**: A Vercel está procurando o `package.json` na raiz, mas ele está em `nextjs-app/`.

---

## ✅ SOLUÇÃO DEFINITIVA

### 📍 Passo 1: Acesse as Configurações

1. Entre em: https://vercel.com/dashboard
2. Clique no seu projeto **capelania**
3. Clique em **Settings** (no topo)
4. Clique em **General** (barra lateral esquerda)

### 📍 Passo 2: Configure o Root Directory

Role a página até encontrar a seção **Build & Development Settings**

Você verá algo assim:

```
┌─────────────────────────────────────────────────────────┐
│ Build & Development Settings                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Framework Preset: Next.js                               │
│                                                          │
│ Root Directory: ./                    [Edit]            │
│ ↑ AQUI ESTÁ O PROBLEMA!                                 │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Ação:**
1. Clique em **[Edit]** ao lado de "Root Directory"
2. Apague o `./`
3. Digite: `nextjs-app`
4. Clique em **Save**

Deve ficar assim:

```
┌─────────────────────────────────────────────────────────┐
│ Root Directory: nextjs-app            [Save] [Cancel]   │
└─────────────────────────────────────────────────────────┘
```

### 📍 Passo 3: Verifique Outras Configurações

Na mesma seção, certifique-se que está assim:

```
Framework Preset: Next.js ✅
Root Directory: nextjs-app ✅
Build Command: (deixe vazio - usa padrão) ✅
Output Directory: (deixe vazio - usa padrão) ✅
Install Command: (deixe vazio - usa padrão) ✅
```

### 📍 Passo 4: Configure Variáveis de Ambiente

1. Ainda em **Settings**, clique em **Environment Variables** (barra lateral)
2. Adicione estas variáveis:

```
Nome: NEXT_PUBLIC_SITE_URL
Valor: https://seu-projeto.vercel.app
Environment: Production, Preview, Development
```

```
Nome: NEXT_PUBLIC_WHATSAPP_NUMBER
Valor: 5534999999999
Environment: Production, Preview, Development
```

3. Clique em **Save** em cada uma

### 📍 Passo 5: Faça o Redeploy

1. Clique em **Deployments** (no topo)
2. Encontre o último deploy (o que falhou)
3. Clique nos **três pontos** (...) no canto direito
4. Clique em **Redeploy**
5. Confirme clicando em **Redeploy** novamente

---

## 🎯 O Que Vai Acontecer

Você verá no log:

```
✓ Clonando github.com/clenio77/capelania
✓ Detectando Root Directory: nextjs-app
✓ Instalando dependências...
✓ Next.js 14.2.33 detectado ✅
✓ Compilando...
✓ Build concluído em ~2-3 minutos
✓ Deploy realizado com sucesso! 🎉
```

---

## 📊 Checklist Final

Antes de fazer redeploy, confirme:

- [ ] Root Directory = `nextjs-app`
- [ ] Framework Preset = Next.js
- [ ] Build Command = (vazio/padrão)
- [ ] Output Directory = (vazio/padrão)
- [ ] Variáveis de ambiente adicionadas
- [ ] Salvou todas as configurações

---

## 🎨 Interface Visual da Vercel

### Como Encontrar as Configurações:

```
┌─────────────────────────────────────────────────────────┐
│ [Overview] [Deployments] [Analytics] [Settings] [Logs] │ ← Clique aqui
└─────────────────────────────────────────────────────────┘

Depois:

┌─────────────────────────────────────────────────────────┐
│ Settings                                                 │
├─────────────────────────────────────────────────────────┤
│ > General                    ← Clique aqui               │
│ > Domains                                                │
│ > Environment Variables                                  │
│ > Git                                                    │
│ > Functions                                              │
│ > Security                                               │
└─────────────────────────────────────────────────────────┘

Na página General, role até:

┌─────────────────────────────────────────────────────────┐
│ Build & Development Settings                            │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Framework Preset                                        │
│ ┌──────────────────────────────────────┐               │
│ │ Next.js                              │               │
│ └──────────────────────────────────────┘               │
│                                                          │
│ Root Directory                          [Edit]          │
│ ┌──────────────────────────────────────┐               │
│ │ ./                                   │  ← MUDE AQUI! │
│ └──────────────────────────────────────┘               │
│                                                          │
│ Build Command                           [Override]      │
│ Output Directory                        [Override]      │
│ Install Command                         [Override]      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🐛 Troubleshooting

### Erro: "No Next.js version detected"
✅ **Solução**: Configure Root Directory para `nextjs-app`

### Erro: "ENOENT: no such file or directory"
✅ **Solução**: Verifique se digitou `nextjs-app` corretamente (sem `/` no final)

### Build muito lento
✅ **Normal**: Primeira build leva 2-3 minutos. Próximas são mais rápidas.

### Deploy funciona mas site não carrega
✅ **Solução**: Verifique variáveis de ambiente e imagens no `next.config.js`

---

## 🎉 Resultado Esperado

Após configurar corretamente, você terá:

- ✅ Site no ar em: `https://seu-projeto.vercel.app`
- ✅ HTTPS automático
- ✅ CDN global (carregamento rápido)
- ✅ Deploy automático a cada push no GitHub
- ✅ Preview automático para cada Pull Request
- ✅ Analytics e logs em tempo real

---

## 📱 Próximos Passos

Após o deploy bem-sucedido:

1. **Teste o site**: Abra a URL e navegue pelas páginas
2. **Configure domínio personalizado** (opcional):
   - Settings → Domains → Add Domain
3. **Monitore**: Use Analytics e Logs para acompanhar
4. **Atualize**: Cada push no GitHub faz deploy automático

---

## 💡 Dica Pro

Para deploys futuros, você não precisa fazer nada! 

Basta fazer push no GitHub:

```bash
cd /home/clenio/Documentos/Meusagentes/capelania
git add .
git commit -m "✨ feat: Nova funcionalidade"
git push
```

A Vercel detecta automaticamente e faz deploy! 🚀

---

**Agora é só seguir os passos acima e seu site estará no ar!** 🎉

