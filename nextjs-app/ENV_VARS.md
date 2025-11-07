# Variáveis de Ambiente

Este arquivo documenta as variáveis de ambiente necessárias para o projeto.

## Configuração

Crie um arquivo `.env.local` na raiz do projeto `nextjs-app` com as seguintes variáveis:

```bash
# URL do site (usado para SEO e compartilhamento)
NEXT_PUBLIC_SITE_URL=https://capelania.com

# URL da API do WordPress (opcional - se não configurado, usa dados mock)
# Exemplo: http://localhost:8080/wp-json/wp/v2
NEXT_PUBLIC_WORDPRESS_API_URL=

# WhatsApp (formato: código do país + DDD + número, sem espaços ou caracteres especiais)
# Exemplo: 5534999999999
NEXT_PUBLIC_WHATSAPP_NUMBER=5534999999999

# Mensagem padrão do WhatsApp
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de mais informações sobre a Capelania Jesus Bom Pastor.
```

## Variáveis Detalhadas

### NEXT_PUBLIC_SITE_URL
- **Obrigatória**: Não (usa valor padrão se não configurada)
- **Descrição**: URL completa do site em produção
- **Exemplo**: `https://capelania.vercel.app`
- **Uso**: SEO, Open Graph, compartilhamento em redes sociais

### NEXT_PUBLIC_WORDPRESS_API_URL
- **Obrigatória**: Não (usa dados mock se não configurada)
- **Descrição**: URL da API REST do WordPress
- **Exemplo**: `https://wordpress.capelania.com/wp-json/wp/v2`
- **Uso**: Buscar conteúdo dinâmico do WordPress (comunidades, notícias, eventos, pastorais)
- **Nota**: Se não configurada, o site usa dados simulados automaticamente

### NEXT_PUBLIC_WHATSAPP_NUMBER
- **Obrigatória**: Não (usa número de exemplo se não configurada)
- **Descrição**: Número do WhatsApp para contato
- **Formato**: Código do país + DDD + número (sem espaços, hífens ou parênteses)
- **Exemplo**: `5534999999999` (Brasil: 55, DDD: 34, Número: 99999-9999)
- **Uso**: Botão flutuante de WhatsApp

### NEXT_PUBLIC_WHATSAPP_MESSAGE
- **Obrigatória**: Não (usa mensagem padrão se não configurada)
- **Descrição**: Mensagem pré-preenchida ao abrir o WhatsApp
- **Exemplo**: `Olá! Gostaria de mais informações sobre a Capelania Jesus Bom Pastor.`
- **Uso**: Mensagem inicial no chat do WhatsApp

## Deploy na Vercel

Ao fazer deploy na Vercel, configure estas variáveis em:

1. Acesse o painel da Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione cada variável com seus respectivos valores
4. Clique em **Save**
5. Faça um novo deploy para aplicar as mudanças

## Modo de Desenvolvimento

Para desenvolvimento local, o site funciona perfeitamente sem configurar o WordPress, usando dados simulados automaticamente. Isso permite que você desenvolva e teste o frontend independentemente do backend.

## Dados Simulados (Mock)

O site inclui dados simulados completos para:
- ✅ 4 Comunidades com banners e informações detalhadas
- ✅ 6 Notícias com imagens e conteúdo
- ✅ 5 Eventos futuros com datas e locais
- ✅ 6 Pastorais com descrições e coordenadores

Todos os dados mock incluem imagens de alta qualidade do Unsplash.

