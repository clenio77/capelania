'use client'

import { useEffect } from 'react'

export default function FocusVisible() {
  useEffect(() => {
    // Add focus-visible polyfill behavior
    let hadKeyboardEvent = false
    let hadFocusVisibleRecently = false
    let hadFocusVisibleRecentlyTimeout: NodeJS.Timeout

    const onKeyDown = () => {
      hadKeyboardEvent = true
    }

    const onPointerDown = () => {
      hadKeyboardEvent = false
    }

    const onFocus = (e: FocusEvent) => {
      if (hadKeyboardEvent) {
        (e.target as HTMLElement).classList.add('focus-visible')
      }
    }

    const onBlur = (e: FocusEvent) => {
      (e.target as HTMLElement).classList.remove('focus-visible')
      clearTimeout(hadFocusVisibleRecentlyTimeout)
      hadFocusVisibleRecentlyTimeout = setTimeout(() => {
        hadFocusVisibleRecently = false
      }, 100)
    }

    document.addEventListener('keydown', onKeyDown, true)
    document.addEventListener('mousedown', onPointerDown, true)
    document.addEventListener('pointerdown', onPointerDown, true)
    document.addEventListener('touchstart', onPointerDown, true)
    document.addEventListener('focus', onFocus, true)
    document.addEventListener('blur', onBlur, true)

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      document.removeEventListener('mousedown', onPointerDown, true)
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('touchstart', onPointerDown, true)
      document.removeEventListener('focus', onFocus, true)
      document.removeEventListener('blur', onBlur, true)
    }
  }, [])

  return null
}

