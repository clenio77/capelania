'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function Search({ onSearch, placeholder = 'Buscar...' }: SearchProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-dourado-sacra focus:border-transparent transition-all"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dourado-sacra transition-colors"
        aria-label="Buscar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  )
}

