'use client'

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-azul-profundo focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-dourado-sacra"
    >
      Pular para o conteúdo principal
    </a>
  )
}

