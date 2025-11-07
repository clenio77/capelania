import { Metadata } from 'next'
import CopyPixButton from '@/components/ui/CopyPixButton'

export const metadata: Metadata = {
  title: 'Contribua',
  description: 'Contribua com a Capelania Jesus Bom Pastor',
}

export default function ContribuaPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-hero mb-4">Contribua</h1>
            <p className="text-xl text-gray-600">
              Sua contribuição é muito importante para a manutenção de nossas atividades e obras.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-section">Dízimo e Contribuições</h2>
            <p className="text-body">
              O dízimo e as contribuições são fundamentais para a manutenção da Capelania e suas atividades.
              Com sua ajuda, podemos continuar realizando obras importantes e oferecendo serviços à comunidade.
            </p>

            <h2 className="text-section mt-12">Como Contribuir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-off-white p-6 rounded-lg">
                <h3 className="text-h4 font-semibold text-azul-profundo mb-4">PIX</h3>
                <p className="text-body mb-4">Contribua de forma rápida e segura via PIX:</p>
                <div className="bg-white p-4 rounded border-2 border-dashed border-dourado-sacra">
                  <p className="font-mono text-sm break-all text-center text-azul-profundo font-semibold">
                    Chave PIX: capelania@jesusbompastor.com.br
                  </p>
                </div>
                <CopyPixButton />
              </div>

              <div className="bg-off-white p-6 rounded-lg">
                <h3 className="text-h4 font-semibold text-azul-profundo mb-4">Presencialmente</h3>
                <p className="text-body mb-4">
                  Você pode contribuir durante as celebrações ou na secretaria da Capelania.
                </p>
                <p className="text-body text-sm text-gray-600">
                  Horário de atendimento: Segunda a Sexta, das 8h às 17h
                </p>
              </div>
            </div>

            <div className="mt-12 bg-azul-profundo text-white p-8 rounded-lg text-center">
              <h3 className="text-h3 mb-4">Obrigado pela sua generosidade!</h3>
              <p className="text-lg text-gray-200">
                Sua contribuição faz a diferença. Que Deus abençoe você e sua família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

