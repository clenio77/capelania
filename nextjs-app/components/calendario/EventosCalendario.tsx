'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Evento } from '@/types/wordpress'
import { formatDateTime } from '@/lib/utils'

interface EventosCalendarioProps {
  eventos: Evento[]
}

export default function EventosCalendario({ eventos }: EventosCalendarioProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null)

  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1))
  }

  const getEventsForDate = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return eventos.filter(evento => {
      const eventDate = new Date(evento.acf?.data_inicio || evento.date)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header do Calendário */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-off-white rounded-lg transition-colors"
          aria-label="Mês anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-h3 font-semibold text-azul-profundo">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-off-white rounded-lg transition-colors"
          aria-label="Próximo mês"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Grid do Calendário */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          const dayEvents = day ? getEventsForDate(day) : []
          const isToday = day && new Date(currentYear, currentMonth, day).toDateString() === new Date().toDateString()
          
          return (
            <motion.div
              key={index}
              className={`min-h-[80px] p-2 border rounded-lg ${
                day ? 'bg-white hover:bg-off-white cursor-pointer' : 'bg-gray-50'
              } ${isToday ? 'border-dourado-sacra border-2' : 'border-gray-200'}`}
              onClick={() => day && dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
              whileHover={day ? { scale: 1.02 } : {}}
            >
              {day && (
                <>
                  <div className={`text-sm font-medium mb-1 ${isToday ? 'text-dourado-sacra' : 'text-gray-700'}`}>
                    {day}
                  </div>
                  {dayEvents.length > 0 && (
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((evento) => (
                        <div
                          key={evento.id}
                          className="text-xs bg-dourado-sacra text-white px-2 py-1 rounded truncate"
                          title={evento.title.rendered}
                        >
                          {evento.title.rendered}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500">+{dayEvents.length - 2}</div>
                      )}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Modal de Detalhes do Evento */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-h4 font-semibold text-azul-profundo mb-4">
              {selectedEvent.title.rendered}
            </h3>
            <div className="space-y-2 text-body">
              <p>
                <strong>Data:</strong> {formatDateTime(selectedEvent.acf?.data_inicio || selectedEvent.date, selectedEvent.acf?.horario)}
              </p>
              {selectedEvent.acf?.local && (
                <p>
                  <strong>Local:</strong> {selectedEvent.acf.local}
                </p>
              )}
              <div className="mt-4">
                <div dangerouslySetInnerHTML={{ __html: selectedEvent.excerpt.rendered }} />
              </div>
            </div>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 btn-primary w-full"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

