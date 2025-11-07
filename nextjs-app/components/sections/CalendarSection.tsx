'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react'
import { Evento } from '@/types/wordpress'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CalendarSectionProps {
  eventos: Evento[]
}

const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

interface EventDay {
  date: Date
  eventos: Evento[]
}

export default function CalendarSection({ eventos }: CalendarSectionProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<EventDay | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Primeiro dia do mês
  const firstDay = new Date(year, month, 1)
  const startingDayOfWeek = firstDay.getDay()

  // Último dia do mês
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()

  // Navegar meses
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1))
    setSelectedDay(null)
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1))
    setSelectedDay(null)
  }

  // Agrupar eventos por dia
  const eventosPorDia = new Map<string, Evento[]>()
  eventos.forEach((evento) => {
    const dataEvento = new Date(evento.acf?.data_evento || evento.acf?.data_inicio || evento.date || '')
    if (!isNaN(dataEvento.getTime())) {
      const key = `${dataEvento.getFullYear()}-${dataEvento.getMonth()}-${dataEvento.getDate()}`
      if (!eventosPorDia.has(key)) {
        eventosPorDia.set(key, [])
      }
      eventosPorDia.get(key)!.push(evento)
    }
  })

  // Verificar se um dia tem eventos
  const hasEvents = (day: number) => {
    const key = `${year}-${month}-${day}`
    return eventosPorDia.has(key)
  }

  // Pegar eventos de um dia
  const getEventsForDay = (day: number) => {
    const key = `${year}-${month}-${day}`
    return eventosPorDia.get(key) || []
  }

  // Renderizar dias do calendário
  const renderCalendarDays = () => {
    const days = []

    // Dias vazios antes do primeiro dia
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="aspect-square p-2" />
      )
    }

    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEventsThisDay = hasEvents(day)
      const isToday = 
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      
      const dayEvents = getEventsForDay(day)
      const isSelected = selectedDay?.date.getDate() === day &&
        selectedDay?.date.getMonth() === month &&
        selectedDay?.date.getFullYear() === year

      days.push(
        <button
          key={day}
          onClick={() => {
            if (hasEventsThisDay) {
              setSelectedDay({
                date: new Date(year, month, day),
                eventos: dayEvents
              })
            }
          }}
          className={cn(
            'aspect-square p-2 rounded-lg transition-all duration-300 relative',
            hasEventsThisDay && 'hover:bg-dourado-sacra/10 cursor-pointer',
            !hasEventsThisDay && 'cursor-default',
            isToday && 'ring-2 ring-azul-profundo',
            isSelected && 'bg-dourado-sacra text-white hover:bg-dourado-sacra'
          )}
        >
          <span className={cn(
            'text-sm font-semibold',
            isToday && !isSelected && 'text-azul-profundo',
            !hasEventsThisDay && !isToday && 'text-gray-400'
          )}>
            {day}
          </span>
          {hasEventsThisDay && !isSelected && (
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
              {dayEvents.slice(0, 3).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-dourado-sacra" />
              ))}
            </div>
          )}
        </button>
      )
    }

    return days
  }

  return (
    <AnimatedSection delay={0.3}>
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-section mb-4">Calendário de Eventos</h2>
            <p className="mx-auto max-w-2xl text-body text-gray-600">
              Acompanhe nossa agenda de celebrações, retiros e atividades. Marque na sua agenda!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Calendário */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              {/* Controles do mês */}
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={previousMonth}
                  className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Mês anterior"
                >
                  <ChevronLeft className="h-5 w-5 text-azul-profundo" />
                </button>
                
                <h3 className="text-xl font-bold text-azul-profundo">
                  {MONTHS[month]} {year}
                </h3>

                <button
                  onClick={nextMonth}
                  className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Próximo mês"
                >
                  <ChevronRight className="h-5 w-5 text-azul-profundo" />
                </button>
              </div>

              {/* Dias da semana */}
              <div className="mb-2 grid grid-cols-7 gap-2">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-semibold text-gray-600"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Grade do calendário */}
              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>

              {/* Legenda */}
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full border-2 border-azul-profundo" />
                  <span>Hoje</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-dourado-sacra" />
                  <span>Com eventos</span>
                </div>
              </div>
            </div>

            {/* Eventos do dia selecionado */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              {selectedDay ? (
                <>
                  <div className="mb-4 flex items-center gap-2 text-azul-profundo">
                    <CalendarIcon className="h-5 w-5" />
                    <h3 className="text-lg font-bold">
                      {selectedDay.date.getDate()} de {MONTHS[selectedDay.date.getMonth()]}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {selectedDay.eventos.map((evento) => (
                      <Link
                        key={evento.id}
                        href={`/eventos/${evento.slug}`}
                        className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-dourado-sacra hover:shadow-md"
                      >
                        <h4 className="mb-2 font-semibold text-azul-profundo line-clamp-2">
                          {evento.title.rendered}
                        </h4>
                        
                        {evento.acf?.hora_evento && (
                          <div className="mb-1 flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{evento.acf.hora_evento}</span>
                          </div>
                        )}
                        
                        {evento.acf?.local_evento && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span className="line-clamp-1">{evento.acf.local_evento}</span>
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                  <CalendarIcon className="mb-4 h-12 w-12 text-gray-300" />
                  <p className="mb-2 font-semibold">Selecione um dia</p>
                  <p className="text-sm">
                    Clique em um dia com eventos para ver os detalhes
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link href="/eventos" className="btn-primary">
              Ver Todos os Eventos
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

