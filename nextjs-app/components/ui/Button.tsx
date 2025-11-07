'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-dourado-sacra text-white hover:bg-dourado-escuro focus:ring-dourado-sacra',
    secondary: 'bg-transparent text-azul-profundo border-2 border-azul-profundo hover:bg-azul-profundo hover:text-white focus:ring-azul-profundo',
    text: 'text-azul-profundo hover:text-dourado-sacra border-b-2 border-transparent hover:border-dourado-sacra focus:ring-dourado-sacra',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

