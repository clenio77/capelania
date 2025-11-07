import { WifiOff } from 'lucide-react'

export const metadata = {
  title: 'Sem Conexão',
  description: 'Você está offline. Verifique sua conexão com a internet.',
}

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-azul-profundo/10 mb-6">
          <WifiOff className="w-12 h-12 text-azul-profundo" />
        </div>
        
        <h1 className="text-3xl font-bold text-azul-profundo mb-4">
          Sem Conexão
        </h1>
        
        <p className="text-gray-600 mb-8">
          Parece que você está sem internet. Verifique sua conexão e tente novamente.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-azul-profundo text-white px-8 py-3 rounded-lg font-semibold hover:bg-azul-profundo/90 transition-all"
        >
          Tentar Novamente
        </button>

        <div className="mt-8 p-6 bg-dourado-sacra/10 rounded-lg border border-dourado-sacra/20">
          <p className="text-sm text-gray-700">
            💡 <strong>Dica:</strong> Algumas páginas podem estar disponíveis offline graças ao nosso sistema de cache.
          </p>
        </div>
      </div>
    </div>
  )
}

