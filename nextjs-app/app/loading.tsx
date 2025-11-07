import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-dourado-sacra mx-auto mb-4"></div>
        <p className="text-azul-profundo font-medium">Carregando...</p>
      </div>
    </div>
  )
}

