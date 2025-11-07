# 📦 Guia de Git - Capelania Jesus Bom Pastor

Guia passo a passo para versionar e fazer push do projeto para o GitHub.

## 🎯 Pré-requisitos

- Git instalado (`git --version`)
- Conta no GitHub
- Repositório criado: https://github.com/clenio77/capelania.git

## 📋 Passo a Passo

### 1️⃣ Inicializar o Repositório Git

```bash
# Entre na pasta raiz do projeto
cd /home/clenio/Documentos/Meusagentes/capelania

# Inicialize o Git (se ainda não foi feito)
git init

# Verifique o status
git status
```

### 2️⃣ Configurar Informações do Git (se necessário)

```bash
# Configure seu nome
git config user.name "Seu Nome"

# Configure seu email
git config user.email "seu-email@exemplo.com"

# Verifique as configurações
git config --list
```

### 3️⃣ Adicionar Arquivos ao Stage

```bash
# Adicione todos os arquivos
git add .

# Ou adicione arquivos específicos
git add nextjs-app/
git add README.md
git add .gitignore

# Verifique o que foi adicionado
git status
```

### 4️⃣ Fazer o Primeiro Commit

```bash
# Commit com mensagem descritiva
git commit -m "🎉 Initial commit: Capelania Jesus Bom Pastor

- Next.js 14 frontend com TypeScript e Tailwind CSS
- Componentes reutilizáveis e páginas completas
- Sistema de dados mock para desenvolvimento
- WordPress theme preparado para integração
- Documentação completa do projeto
- Configurações de deploy para Vercel"

# Verifique o commit
git log --oneline
```

### 5️⃣ Conectar com o Repositório Remoto

```bash
# Adicione o repositório remoto
git remote add origin https://github.com/clenio77/capelania.git

# Verifique se foi adicionado
git remote -v
```

### 6️⃣ Renomear Branch para 'main' (se necessário)

```bash
# Renomeie a branch atual para 'main'
git branch -M main

# Verifique a branch atual
git branch
```

### 7️⃣ Fazer Push para o GitHub

```bash
# Push inicial
git push -u origin main

# Se pedir autenticação, use um Personal Access Token
# Gere em: https://github.com/settings/tokens
```

## 🔐 Autenticação no GitHub

Se você receber erro de autenticação, siga estes passos:

### Opção 1: Personal Access Token (Recomendado)

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Dê um nome: "Capelania Deploy"
4. Selecione os escopos: `repo` (todos)
5. Clique em "Generate token"
6. **Copie o token** (você não verá novamente!)
7. Use o token como senha quando fizer push

### Opção 2: SSH Key

```bash
# Gere uma chave SSH
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Adicione ao ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copie a chave pública
cat ~/.ssh/id_ed25519.pub

# Adicione em: https://github.com/settings/keys
```

Depois use a URL SSH:
```bash
git remote set-url origin git@github.com:clenio77/capelania.git
git push -u origin main
```

## 📝 Commits Futuros

Para commits futuros, use o padrão:

```bash
# 1. Verifique o que mudou
git status

# 2. Adicione as mudanças
git add .

# 3. Faça o commit
git commit -m "✨ feat: Adiciona nova funcionalidade X"

# 4. Faça push
git push
```

### 🎨 Padrão de Mensagens de Commit

Use emojis e prefixos para clareza:

- `🎉 init:` - Commit inicial
- `✨ feat:` - Nova funcionalidade
- `🐛 fix:` - Correção de bug
- `📝 docs:` - Documentação
- `💄 style:` - Estilização (CSS)
- `♻️ refactor:` - Refatoração
- `⚡ perf:` - Performance
- `✅ test:` - Testes
- `🔧 chore:` - Configurações
- `🚀 deploy:` - Deploy

**Exemplos:**
```bash
git commit -m "✨ feat: Adiciona página de eventos com countdown"
git commit -m "🐛 fix: Corrige imagens do carousel"
git commit -m "📝 docs: Atualiza README com instruções de deploy"
git commit -m "💄 style: Melhora efeitos visuais da home"
```

## 🌿 Trabalhando com Branches

### Criar uma Branch para Desenvolvimento

```bash
# Crie e mude para uma nova branch
git checkout -b desenvolvimento

# Faça suas alterações...
git add .
git commit -m "✨ feat: Nova funcionalidade"

# Push da branch
git push -u origin desenvolvimento
```

### Merge com a Main

```bash
# Volte para a main
git checkout main

# Faça merge da branch de desenvolvimento
git merge desenvolvimento

# Push das mudanças
git push
```

## 🔄 Atualizando do Remoto

```bash
# Baixe as últimas mudanças
git pull origin main

# Ou faça fetch + merge
git fetch origin
git merge origin/main
```

## 🚨 Comandos Úteis

```bash
# Ver histórico de commits
git log --oneline --graph --all

# Ver diferenças
git diff

# Desfazer mudanças não commitadas
git checkout -- arquivo.txt

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Ver branches
git branch -a

# Deletar branch local
git branch -d nome-da-branch

# Ver arquivos ignorados
git status --ignored
```

## 📊 Verificar o que Será Commitado

```bash
# Ver tamanho dos arquivos
du -sh * | sort -h

# Ver arquivos que serão commitados
git ls-files

# Ver arquivos ignorados
git status --ignored
```

## ⚠️ Arquivos Importantes Ignorados

O `.gitignore` já está configurado para ignorar:

- ✅ `node_modules/` - Dependências do npm
- ✅ `.next/` - Build do Next.js
- ✅ `.env*.local` - Variáveis de ambiente
- ✅ `*.log` - Arquivos de log
- ✅ `.DS_Store` - Arquivos do macOS
- ✅ `wordpress/wp-config.php` - Config do WordPress

## 🎯 Checklist Antes do Push

- [ ] `.gitignore` criado e configurado
- [ ] `README.md` atualizado
- [ ] Arquivos sensíveis não incluídos (.env, senhas, etc)
- [ ] Build funcionando (`npm run build`)
- [ ] Sem erros de lint (`npm run lint`)
- [ ] Commit com mensagem descritiva
- [ ] Branch correta (main/development)

## 🚀 Próximos Passos

Após o push bem-sucedido:

1. ✅ Verifique no GitHub: https://github.com/clenio77/capelania
2. 🚀 Configure deploy na Vercel
3. 🔧 Configure variáveis de ambiente
4. 📊 Configure GitHub Actions (CI/CD) - opcional
5. 🔒 Configure branch protection rules - opcional

## 📞 Problemas Comuns

### Erro: "remote: Repository not found"
```bash
# Verifique a URL do repositório
git remote -v

# Corrija se necessário
git remote set-url origin https://github.com/clenio77/capelania.git
```

### Erro: "failed to push some refs"
```bash
# Faça pull primeiro
git pull origin main --rebase

# Depois faça push
git push origin main
```

### Erro: "Authentication failed"
- Use um Personal Access Token em vez da senha
- Ou configure SSH keys

---

**Pronto!** Seu código estará no GitHub e pronto para deploy! 🎉

