import { getComunidades } from '@/lib/wordpress'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrações',
  description: 'Horários de missa e celebrações da Capelania Jesus Bom Pastor',
}

export default async function CelebracaoesPage() {
  const comunidades = await getComunidades()

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero mb-4">Celebrações</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira os horários de missa e celebrações de todas as nossas comunidades.
          </p>
        </div>

        {comunidades.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comunidades.map((comunidade) => (
              <div key={comunidade.id} className="card">
                <div className="card-content">
                  <h2 className="text-h3 font-semibold text-azul-profundo mb-4">
                    {comunidade.title.rendered}
                  </h2>
                  {comunidade.acf?.nome_padroeiro && (
                    <p className="text-dourado-sacra font-medium mb-4">
                      {comunidade.acf.nome_padroeiro}
                    </p>
                  )}
                  
                  {comunidade.acf?.horarios_missa ? (
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: comunidade.acf.horarios_missa }} />
                    </div>
                  ) : (
                    <p className="text-gray-600">Horários em atualização.</p>
                  )}

                  {comunidade.acf?.endereco && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Endereço:</strong> {comunidade.acf.endereco}
                      </p>
                      {comunidade.acf?.telefone && (
                        <p className="text-sm text-gray-600">
                          <strong>Telefone:</strong>{' '}
                          <a href={`tel:${comunidade.acf.telefone}`} className="text-dourado-sacra hover:underline">
                            {comunidade.acf.telefone}
                          </a>
                        </p>
                      )}
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={`/comunidades/${comunidade.slug}`}
                      className="btn-text"
                    >
                      Ver mais informações →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhuma comunidade encontrada.</p>
          </div>
        )}
      </div>
    </div>
  )
}

