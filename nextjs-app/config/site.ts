// Configurações do site
export const siteConfig = {
  name: 'Capelania Jesus Bom Pastor',
  description: 'Portal oficial da Capelania Jesus Bom Pastor',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://capelania.com',
  wordpressApiUrl: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8080/wp-json/wp/v2',
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+55 11 99999-9999',
    defaultMessage:
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
      'Olá! Gostaria de receber mais informações sobre a Capelania Jesus Bom Pastor.',
  },
}

// Menu de navegação
export const navigation = [
  { name: 'Início', href: '/' },
  { name: 'A Capelania', href: '/a-capelania' },
  { name: 'Comunidades', href: '/comunidades' },
  { name: 'Celebrações', href: '/celebracaoes' },
  { name: 'Notícias', href: '/noticias' },
  { name: 'Pastorais', href: '/pastorais' },
  { name: 'Boletins', href: '/boletins' },
  { name: 'Pedidos de Oração', href: '/pedidos-oracao' },
  { name: 'Contribua', href: '/contribua' },
  { name: 'Fale Conosco', href: '/fale-conosco' },
]

// Informações de contato
export const contactInfo = {
  endereco: 'Rua Exemplo, 123 - Bairro - Cidade - UF',
  telefone: '(00) 0000-0000',
  email: 'contato@capelania.com',
  redesSociais: {
    facebook: 'https://facebook.com/capelania',
    instagram: 'https://instagram.com/capelania',
    youtube: 'https://youtube.com/capelania',
  },
}

export const testimonials = [
  {
    name: 'Maria de Lourdes',
    role: 'Coordenadora de Pastoral Familiar',
    message:
      'Encontramos na capelania um abraço acolhedor. Aqui aprendemos que a fé se fortalece no serviço aos outros.',
  },
  {
    name: 'Capitão André Silva',
    role: 'Militar e voluntário',
    message:
      'Os retiros e formações transformaram minha vida espiritual e familiar. Hoje sirvo com alegria para retribuir esse cuidado.',
  },
  {
    name: 'Irmã Beatriz',
    role: 'Missionária e catequista',
    message:
      'Cada encontro com a comunidade renova minha vocação. Somos testemunhas de milagres cotidianos quando caminhamos juntos.',
  },
]

export const faqs = [
  {
    question: 'Como faço para participar de uma pastoral?',
    answer:
      'Basta preencher o formulário em nosso portal ou procurar a equipe após as celebrações. Indicaremos o melhor caminho de acordo com seus dons.',
  },
  {
    question: 'A capelania oferece acompanhamento espiritual individual?',
    answer:
      'Sim. Disponibilizamos horários semanais para direção espiritual e aconselhamento. Entre em contato para agendar seu atendimento.',
  },
  {
    question: 'Quais iniciativas sociais posso apoiar?',
    answer:
      'Temos ações junto a famílias em vulnerabilidade, visitas a hospitais e apoio educacional para crianças. Toda ajuda é bem-vinda!',
  },
]

