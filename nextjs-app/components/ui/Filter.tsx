'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterProps {
  options: Array<{ value: string; label: string }>
  onFilterChange: (value: string) => void
  label?: string
}

export default function Filter({ options, onFilterChange, label = 'Filtrar' }: FilterProps) {
  const [selected, setSelected] = useState<string>('all')
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (value: string) => {
    setSelected(value)
    onFilterChange(value)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-dourado-sacra transition-colors"
      >
        <span className="text-sm font-medium">{label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 left-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full text-left px-4 py-2 hover:bg-off-white transition-colors ${
                  selected === option.value ? 'bg-off-white text-dourado-sacra font-semibold' : ''
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

