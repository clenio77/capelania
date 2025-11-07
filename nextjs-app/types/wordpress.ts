// Tipos TypeScript para WordPress API

export interface WordPressPost {
  id: number
  date: string
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
  featured_media: number
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
  }
}

export interface Evento extends WordPressPost {
  acf: {
    data_inicio?: string
    data_fim?: string
    horario?: string
    local?: string
    comunidade_relacionada?: number
    tipo_evento?: string
  }
}

export interface Pastoral extends WordPressPost {
  acf: {
    coordenador?: string
    telefone_coordenador?: string
    email_coordenador?: string
    horario_reuniao?: string
    objetivos?: string
    atividades?: string
  }
}

export interface Noticia extends WordPressPost {
  categories?: number[]
  tags?: number[]
}

