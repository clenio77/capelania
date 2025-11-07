// Tipos TypeScript para WordPress API

export interface WordPressPost {
  id: number
  date?: string
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  featured_media?: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
  acf?: Record<string, any>
}

export interface Comunidade extends WordPressPost {
  acf: {
    nome_padroeiro?: string
    horarios_missa?: string
    endereco?: string
    telefone?: string
    email?: string
    coordenadas_gps?: string
    galeria_fotos?: string[]
    banner?: string
    logo?: string
    logotipo?: string
    responsavel?: string
    descricao?: string
  }
}

export interface Evento extends WordPressPost {
  acf: {
    data_inicio?: string
    data_fim?: string
    data_evento?: string
    hora_evento?: string
    horario?: string
    local?: string
    local_evento?: string
    comunidade_relacionada?: number
    tipo_evento?: string
    descricao?: string
    inscricoes_abertas?: boolean
    imagem_destaque?: string
    categoria?: string
    autor?: string
    organizador?: string
    vagas?: number
    inscricao_link?: string
  }
}

export interface Pastoral extends WordPressPost {
  acf: {
    coordenador?: string
    telefone_coordenador?: string
    email_coordenador?: string
    horario_reuniao?: string
    local_reuniao?: string
    objetivos?: string
    atividades?: string
    descricao?: string
    icone?: string
    cor?: string
    galeria?: string[]
    imagem_destaque?: string
    contato?: string
    missao?: string
    como_participar?: string
  }
}

export interface Noticia extends WordPressPost {
  categories?: number[]
  tags?: number[]
  acf?: {
    imagem_destaque?: string
    categoria?: string
    autor?: string
  }
}

