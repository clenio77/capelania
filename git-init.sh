#!/bin/bash

# Script para inicializar e fazer push do projeto para o GitHub
# Capelania Jesus Bom Pastor

echo "🙏 Capelania Jesus Bom Pastor - Git Setup"
echo "=========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se está na pasta correta
if [ ! -d "nextjs-app" ]; then
    echo -e "${RED}❌ Erro: Execute este script na pasta raiz do projeto!${NC}"
    exit 1
fi

echo -e "${BLUE}📁 Verificando estrutura do projeto...${NC}"
if [ -f ".gitignore" ] && [ -f "README.md" ]; then
    echo -e "${GREEN}✅ Arquivos de configuração encontrados${NC}"
else
    echo -e "${RED}❌ Arquivos .gitignore ou README.md não encontrados${NC}"
    exit 1
fi

# Verificar se Git está instalado
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git não está instalado. Instale com: sudo apt install git${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Git instalado${NC}"
echo ""

# Inicializar repositório se necessário
if [ ! -d ".git" ]; then
    echo -e "${BLUE}🔧 Inicializando repositório Git...${NC}"
    git init
    echo -e "${GREEN}✅ Repositório inicializado${NC}"
else
    echo -e "${YELLOW}⚠️  Repositório Git já existe${NC}"
fi

# Configurar Git (se necessário)
if [ -z "$(git config user.name)" ]; then
    echo ""
    echo -e "${YELLOW}⚙️  Configure suas informações do Git:${NC}"
    read -p "Nome: " git_name
    read -p "Email: " git_email
    git config user.name "$git_name"
    git config user.email "$git_email"
    echo -e "${GREEN}✅ Configuração salva${NC}"
fi

echo ""
echo -e "${BLUE}📦 Adicionando arquivos ao Git...${NC}"
git add .

echo ""
echo -e "${BLUE}📝 Status dos arquivos:${NC}"
git status --short

echo ""
read -p "Deseja continuar com o commit? (s/n): " confirm
if [ "$confirm" != "s" ]; then
    echo -e "${YELLOW}⚠️  Operação cancelada${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}💾 Criando commit inicial...${NC}"
git commit -m "🎉 Initial commit: Capelania Jesus Bom Pastor

- Next.js 14 frontend com TypeScript e Tailwind CSS
- Componentes reutilizáveis e páginas completas
- Sistema de dados mock para desenvolvimento
- WordPress theme preparado para integração
- Documentação completa do projeto
- Configurações de deploy para Vercel
- Design system com cores e tipografia personalizadas
- Animações com Framer Motion
- SEO otimizado e responsivo"

echo -e "${GREEN}✅ Commit criado${NC}"

# Renomear branch para main
echo ""
echo -e "${BLUE}🌿 Renomeando branch para 'main'...${NC}"
git branch -M main
echo -e "${GREEN}✅ Branch renomeada${NC}"

# Adicionar repositório remoto
echo ""
echo -e "${BLUE}🔗 Configurando repositório remoto...${NC}"
if git remote | grep -q "origin"; then
    echo -e "${YELLOW}⚠️  Remote 'origin' já existe${NC}"
    git remote -v
else
    git remote add origin https://github.com/clenio77/capelania.git
    echo -e "${GREEN}✅ Remote adicionado${NC}"
fi

echo ""
echo -e "${GREEN}=========================================="
echo "✅ Configuração concluída!"
echo "==========================================${NC}"
echo ""
echo -e "${BLUE}📤 Para fazer push para o GitHub, execute:${NC}"
echo ""
echo -e "${YELLOW}git push -u origin main${NC}"
echo ""
echo -e "${BLUE}💡 Dica: Se pedir autenticação, use um Personal Access Token${NC}"
echo -e "${BLUE}   Gere em: https://github.com/settings/tokens${NC}"
echo ""
echo -e "${GREEN}🚀 Próximos passos:${NC}"
echo "1. Faça push para o GitHub"
echo "2. Configure deploy na Vercel"
echo "3. Adicione variáveis de ambiente"
echo ""
echo -e "${BLUE}📚 Documentação completa em: GIT_GUIDE.md${NC}"

