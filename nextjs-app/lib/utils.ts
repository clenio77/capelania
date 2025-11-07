import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function formatDateTime(dateString: string, time?: string): string {
  const date = new Date(dateString)
  const dateFormatted = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  
  if (time) {
    return `${dateFormatted} às ${time}`
  }
  
  return dateFormatted
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function isLocalImagePath(path?: string | null): boolean {
  if (!path) return false
  return path.startsWith('/')
}

