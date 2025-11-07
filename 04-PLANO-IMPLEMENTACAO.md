# Plano de Implementação WordPress - Capelania Jesus Bom Pastor

## Estrutura do Projeto WordPress

```
capelania-wordpress/
│
├── wp-content/
│   ├── themes/
│   │   └── capelania-jesus-bom-pastor/    # Tema customizado
│   │       ├── style.css
│   │       ├── functions.php
│   │       ├── index.php
│   │       ├── header.php
│   │       ├── footer.php
│   │       ├── page.php
│   │       ├── single.php
│   │       ├── archive.php
│   │       ├── template-parts/
│   │       │   ├── carousel.php
│   │       │   ├── comunidades.php
│   │       │   ├── eventos.php
│   │       │   └── noticias.php
│   │       ├── assets/
│   │       │   ├── css/
│   │       │   │   └── custom.css
│   │       │   ├── js/
│   │       │   │   └── custom.js
│   │       │   └── images/
│   │       └── inc/
│   │           ├── custom-post-types.php
│   │           ├── custom-taxonomies.php
│   │           ├── custom-fields.php
│   │           └── theme-options.php
│   │
│   └── plugins/
│       ├── (plugins instalados via admin)
│       └── capelania-custom/              # Plugin customizado (opcional)
│           ├── capelania-custom.php
│           └── includes/
│               ├── post-types.php
│               ├── taxonomies.php
│               └── admin.php
│
├── documentation/
│   ├── MANUAL-USUARIO.md
│   ├── MANUAL-TECNICO.md
│   └── ESTRUTURA-CONTEUDO.md
│
└── README.md
```

---

## Configuração Inicial

### 1. Requisitos do Servidor

```php
// wp-config.php - Configurações recomendadas
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');
define('WP_POST_REVISIONS', 5);
define('AUTOSAVE_INTERVAL', 300);
define('WP_DEBUG', false); // false em produção
```

### 2. Plugins Essenciais (Lista de Instalação)

```
1. Elementor (Gratuito)
2. The Events Calendar (Gratuito)
3. GiveWP (Gratuito)
4. WPForms (Gratuito)
5. Yoast SEO (Gratuito)
6. Wordfence Security (Gratuito)
7. UpdraftPlus (Gratuito)
8. W3 Total Cache (Gratuito)
9. Smush (Gratuito)
10. Advanced Custom Fields (Gratuito)
11. Custom Post Type UI (Gratuito)
12. MetaSlider (Gratuito)
```

### 3. Configuração de Permalinks

```
Estrutura: /%postname%/
Exemplo: capelania.com/comunidade/santo-expedito
```

---

## Custom Post Types Necessários

### Comunidade
```php
Post Type: 'comunidade'
Slug: /comunidade/
Campos:
- nome_padroeiro
- horarios_missa
- endereco
- telefone
- email
- coordenadas_gps
- galeria_fotos
- historico
```

### Evento
```php
Post Type: 'evento'
Slug: /evento/
Campos:
- data_inicio
- data_fim
- horario
- local
- comunidade_relacionada
- tipo_evento
- imagem_destaque
```

### Pastoral
```php
Post Type: 'pastoral'
Slug: /pastoral/
Campos:
- coordenador
- telefone_coordenador
- email_coordenador
- horario_reuniao
- descricao_detalhada
- objetivos
- atividades
```

---

## Estrutura de Páginas WordPress

### Páginas Principais

1. **Início** (Home)
   - Template: `page-home.php`
   - Slug: `/` (página inicial)

2. **A Capelania**
   - Template: `page-capelania.php`
   - Slug: `/a-capelania/`

3. **Comunidades**
   - Template: `page-comunidades.php` (listagem)
   - Slug: `/comunidades/`
   - Sub-páginas: Cada comunidade (via Custom Post Type)

4. **Celebrações**
   - Template: `page-celebracaoes.php`
   - Slug: `/celebracaoes/`

5. **Notícias**
   - Template: `archive.php` (usando posts padrão)
   - Slug: `/noticias/`

6. **Pastorais**
   - Template: `archive-pastoral.php`
   - Slug: `/pastorais/`

7. **Contribua**
   - Template: `page-contribua.php`
   - Slug: `/contribua/`

8. **Fale Conosco**
   - Template: `page-contato.php`
   - Slug: `/fale-conosco/`

---

## Menus WordPress

### Menu Principal
```
- Início
- A Capelania
  └── História
  └── Missão e Visão
  └── Pároco e Vigários
- Comunidades
  └── Capelania Jesus Bom Pastor
  └── Santo Expedito
  └── Nossa Senhora Aparecida
  └── São Lucas
  └── Nossa Senhora de Fátima
- Celebrações
  └── Horários de Missa
  └── Calendário de Eventos
- Notícias
- Pastorais
- Contribua
- Fale Conosco
```

### Menu Footer
```
- Links Úteis
- Redes Sociais
- Contato
- Política de Privacidade
```

---

## Configuração de Widgets

### Sidebar (se aplicável)
- Busca
- Últimas Notícias
- Eventos Próximos
- Mensagem do Pároco

### Footer Widgets
- Widget 1: Informações de Contato
- Widget 2: Links Úteis
- Widget 3: Redes Sociais
- Widget 4: Mapa do Site

---

## Customização do Tema

### Paleta de Cores (theme.json ou Customizer)

```css
--cor-primaria: #1e3a8a;      /* Azul */
--cor-secundaria: #d97706;    /* Dourado */
--cor-acento: #059669;        /* Verde */
--cor-texto: #1f2937;         /* Cinza escuro */
--cor-texto-claro: #6b7280;   /* Cinza claro */
--cor-fundo: #ffffff;         /* Branco */
```

### Tipografia

```css
--fonte-titulo: 'Montserrat', sans-serif;
--fonte-texto: 'Inter', sans-serif;
--tamanho-base: 16px;
--altura-linha: 1.6;
```

---

## Funcionalidades Específicas a Implementar

### 1. Carrossel de Comunidades

**Localização:** Página Inicial (Home)  
**Implementação:**
- Plugin MetaSlider ou código customizado
- 4 slides (uma para cada comunidade)
- Autoplay: 5 segundos
- Controles de navegação
- Imagens: `/wp-content/uploads/comunidades/`

**Código Exemplo:**
```php
// template-parts/carousel.php
<?php
$comunidades = get_posts(array(
    'post_type' => 'comunidade',
    'posts_per_page' => 4,
    'orderby' => 'menu_order',
    'order' => 'ASC'
));
?>
```

### 2. Calendário de Eventos

**Plugin:** The Events Calendar  
**Configuração:**
- Visualização mensal e lista
- Filtro por comunidade
- Filtro por tipo de evento
- Integração com Google Calendar (opcional)

### 3. Horários de Missa

**Implementação:** Tabela customizada ou shortcode  
**Campos:**
- Comunidade
- Dia da semana
- Horário
- Tipo (normal, especial)

**Shortcode:** `[horarios_missa]`

### 4. Formulário de Contato

**Plugin:** WPForms  
**Campos:**
- Nome (obrigatório)
- Email (obrigatório)
- Telefone (opcional)
- Assunto (dropdown)
- Mensagem (obrigatório)
- Consentimento LGPD

**Ações:**
- Envio por email
- Notificação para admin
- Confirmação para usuário

### 5. Galeria de Fotos

**Implementação:** WordPress Gallery ou plugin  
**Localização:** Páginas de comunidades e eventos  
**Funcionalidades:**
- Lightbox
- Lazy loading
- Organização por álbuns

---

## Segurança e Performance

### Segurança

1. **Wordfence Security**
   - Firewall ativado
   - Scan diário
   - Login security (2FA opcional)

2. **Configurações de Segurança**
   - Limitar tentativas de login
   - Ocultar versão do WordPress
   - Desabilitar file editing
   - SSL obrigatório

### Performance

1. **Cache**
   - W3 Total Cache ou WP Rocket
   - Cache de página
   - Cache de objeto
   - Minificação CSS/JS

2. **Otimização de Imagens**
   - Smush plugin
   - Lazy loading
   - WebP format (se suportado)
   - CDN (opcional)

3. **Banco de Dados**
   - Limpeza periódica
   - Otimização de tabelas
   - Limitar revisões

---

## Backup e Restauração

### UpdraftPlus Configuração

```
Frequência: Diária
Retenção: 30 dias
Destinos:
- Dropbox (recomendado)
- Google Drive
- Email (backup semanal)
```

### Itens a Fazer Backup

- Banco de dados
- Arquivos de upload
- Plugins
- Temas
- Configurações

---

## Checklist de Implementação

### Setup Inicial
- [ ] Instalar WordPress
- [ ] Configurar SSL
- [ ] Instalar tema base
- [ ] Configurar permalinks
- [ ] Instalar plugins essenciais

### Estrutura
- [ ] Criar custom post types
- [ ] Criar custom taxonomies
- [ ] Configurar ACF fields
- [ ] Criar páginas principais
- [ ] Configurar menus

### Conteúdo
- [ ] Adicionar conteúdo das comunidades
- [ ] Configurar calendário
- [ ] Criar formulários
- [ ] Upload de imagens
- [ ] Configurar carrossel

### Customização
- [ ] Ajustar cores e tipografia
- [ ] Criar templates customizados
- [ ] Implementar animações
- [ ] Otimizar responsividade

### Otimização
- [ ] Configurar cache
- [ ] Otimizar imagens
- [ ] Configurar SEO
- [ ] Testar performance

### Segurança
- [ ] Configurar Wordfence
- [ ] Configurar backup
- [ ] Testar segurança
- [ ] Documentar acesso

### Lançamento
- [ ] Testes finais
- [ ] Treinamento da equipe
- [ ] Documentação
- [ ] Go-live

---

## Documentação para Usuários

### Manual do Usuário (Criar arquivo separado)

1. **Como Criar uma Notícia**
2. **Como Adicionar um Evento**
3. **Como Atualizar Horários de Missa**
4. **Como Gerenciar Comunidades**
5. **Como Usar o Formulário de Contato**
6. **Como Fazer Backup Manual**

---

**Documento criado em:** 2024  
**Versão:** 1.0  
**Status:** Plano de Implementação

