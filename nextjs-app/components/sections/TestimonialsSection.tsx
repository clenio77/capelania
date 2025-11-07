import AnimatedSection from '@/components/ui/AnimatedSection'
import { testimonials } from '@/config/site'

export default function TestimonialsSection() {
  if (!testimonials.length) {
    return null
  }

  return (
    <AnimatedSection delay={0.3}>
      <section className="section-padding bg-azul-profundo text-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-dourado-sacra">
              Vozes da comunidade
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Testemunhos que inspiram nossa missão</h2>
            <p className="mt-4 text-lg text-white/70 md:max-w-3xl md:mx-auto">
              Histórias reais de transformação, acolhimento e fé compartilhadas por quem caminha conosco.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative flex h-full flex-col gap-6 rounded-3xl bg-white/5 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="relative">
                  <span className="absolute -top-6 left-0 text-6xl font-serif text-dourado-sacra/40" aria-hidden>
                    “
                  </span>
                  <p className="text-base leading-relaxed text-white/90">
                    {testimonial.message}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="text-lg font-semibold text-white">{testimonial.name}</div>
                  {testimonial.role && <div className="text-sm text-white/70">{testimonial.role}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}


