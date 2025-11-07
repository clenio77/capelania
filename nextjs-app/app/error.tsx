'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-hero mb-4">Ops! Algo deu errado</h1>
          <p className="text-body text-gray-600 mb-8">
            Ocorreu um erro ao carregar esta página. Tente novamente.
          </p>
          {process.env.NODE_ENV === 'development' && error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm text-red-800 font-mono">{error.message}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={reset} className="btn-primary">
              Tentar Novamente
            </button>
            <Link href="/" className="btn-secondary">
              Voltar para o Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
