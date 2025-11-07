'use client'

import { useEffect, useMemo, useState } from 'react'

interface CountdownState {
  days: string
  hours: string
  minutes: string
  seconds: string
  finished: boolean
}

function formatUnit(value: number): string {
  return String(Math.max(value, 0)).padStart(2, '0')
}

function calculateCountdown(targetDate: Date | null): CountdownState {
  if (!targetDate || Number.isNaN(targetDate.getTime())) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      finished: true,
    }
  }

  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      finished: true,
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days: formatUnit(days),
    hours: formatUnit(hours),
    minutes: formatUnit(minutes),
    seconds: formatUnit(seconds),
    finished: false,
  }
}

export function useCountdown(targetIsoString?: string | null): CountdownState {
  const targetDate = useMemo(() => {
    if (!targetIsoString) return null
    const parsed = new Date(targetIsoString)
    if (Number.isNaN(parsed.getTime())) return null
    return parsed
  }, [targetIsoString])

  const [state, setState] = useState<CountdownState>(() => calculateCountdown(targetDate))

  useEffect(() => {
    setState(calculateCountdown(targetDate))

    if (!targetDate) return

    const interval = setInterval(() => {
      setState(calculateCountdown(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return state
}


