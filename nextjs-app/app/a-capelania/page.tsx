import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Capelania',
  description: 'Conheça a história e missão da Capelania Jesus Bom Pastor',
}

export default function ACapelaniaPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-hero mb-4">A Capelania</h1>
            <p className="text-xl text-gray-600">
              Conheça nossa história, missão e valores.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-section">Nossa História</h2>
            <p className="text-body">
              A Capelania Jesus Bom Pastor foi fundada com o objetivo de servir a comunidade
              e propagar a palavra de Deus. Ao longo dos anos, temos crescido e nos desenvolvido,
              sempre mantendo nossos valores e compromisso com a fé católica.
            </p>
            <p className="text-body">
              Surgimos da necessidade de levar a Palavra de Deus a todos os corações, acolhendo
              todas as pessoas que buscam um encontro com Cristo. Nossa história é marcada pela
              dedicação, pelo amor ao próximo e pelo compromisso com a evangelização.
            </p>

            <h2 className="text-section mt-12">Nossa Missão</h2>
            <p className="text-body">
              Nossa missão é acolher, evangelizar e servir a comunidade, promovendo o crescimento
              espiritual e humano de todos os fiéis, sempre seguindo os ensinamentos de Jesus Cristo,
              o Bom Pastor.
            </p>
            <p className="text-body">
              Buscamos ser uma comunidade de fé que ama, serve e anuncia o Evangelho, formando
              discípulos missionários comprometidos com a transformação da sociedade através dos
              valores cristãos.
            </p>

            <h2 className="text-section mt-12">Nossos Valores</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acolhimento:</strong> Recebemos todos com caridade e respeito</li>
              <li><strong>Fé:</strong> Vivemos nossa fé em comunhão com a Igreja</li>
              <li><strong>Serviço:</strong> Colocamos nossos dons a serviço da comunidade</li>
              <li><strong>Evangelização:</strong> Anunciamos o Evangelho com alegria</li>
              <li><strong>Comunhão:</strong> Caminhamos juntos em oração e fraternidade</li>
            </ul>

            <h2 className="text-section mt-12">Nossas Comunidades</h2>
            <p className="text-body">
              A Capelania Jesus Bom Pastor é formada por quatro comunidades, cada uma com sua
              identidade e história, mas todas unidas pela mesma fé e propósito:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Comunidade Santo Expedito</strong> - Padroeiro das causas urgentes</li>
              <li><strong>Comunidade Nossa Senhora Aparecida</strong> - Padroeira do Brasil</li>
              <li><strong>Comunidade São Lucas</strong> - O Evangelista</li>
              <li><strong>Comunidade Nossa Senhora de Fátima</strong> - Mensageira da paz</li>
            </ul>
            <p className="text-body mt-4">
              Cada comunidade tem sua própria história, mas todas compartilham o mesmo objetivo:
              viver o Evangelho e servir a comunidade. Conheça nossas comunidades e faça parte
              desta família de fé!
            </p>

            <div className="mt-12 bg-azul-profundo text-white p-8 rounded-lg">
              <h2 className="text-h3 mb-4">Junte-se a Nós</h2>
              <p className="text-lg text-gray-200">
                Você é muito bem-vindo(a) em nossa comunidade! Venha participar das nossas
                celebrações, pastorais e atividades. Sua presença enriquece nossa família de fé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

