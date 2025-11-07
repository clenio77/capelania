import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = []
  const maxVisible = 5

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2))
  let endPage = Math.min(totalPages, startPage + maxVisible - 1)

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Paginação">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-dourado-sacra hover:text-dourado-sacra transition-colors"
        >
          Anterior
        </Link>
      )}

      {startPage > 1 && (
        <>
          <Link
            href={basePath}
            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-dourado-sacra hover:text-dourado-sacra transition-colors"
          >
            1
          </Link>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? basePath : `${basePath}?page=${page}`}
          className={`px-4 py-2 border-2 rounded-lg transition-colors ${
            page === currentPage
              ? 'bg-dourado-sacra text-white border-dourado-sacra'
              : 'border-gray-300 hover:border-dourado-sacra hover:text-dourado-sacra'
          }`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <Link
            href={`${basePath}?page=${totalPages}`}
            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-dourado-sacra hover:text-dourado-sacra transition-colors"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-dourado-sacra hover:text-dourado-sacra transition-colors"
        >
          Próxima
        </Link>
      )}
    </nav>
  )
}

