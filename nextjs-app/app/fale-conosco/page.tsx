import { contactInfo } from '@/config/site'
import { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Fale Conosco',
  description: 'Entre em contato com a Capelania Jesus Bom Pastor',
}

export default function FaleConoscoPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-hero mb-4">Fale Conosco</h1>
            <p className="text-xl text-gray-600">
              Estamos à disposição para atendê-lo. Entre em contato conosco!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-section mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-azul-profundo mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Endereço
                  </h3>
                  <p className="text-gray-700 ml-7">{contactInfo.endereco}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-azul-profundo mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Telefone
                  </h3>
                  <a href={`tel:${contactInfo.telefone}`} className="text-gray-700 hover:text-dourado-sacra transition-colors ml-7">
                    {contactInfo.telefone}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-azul-profundo mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-dourado-sacra transition-colors ml-7">
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-azul-profundo mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-700 ml-7">
                    Segunda a Sexta: 8h às 17h<br />
                    Sábado: 8h às 12h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-8">
                <h3 className="font-semibold text-azul-profundo mb-4">Localização</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Mapa será integrado aqui</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <h2 className="text-section mb-6">Envie uma Mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

