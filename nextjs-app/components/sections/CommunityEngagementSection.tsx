import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { faqs } from '@/config/site'

export default function CommunityEngagementSection() {
  return (
    <AnimatedSection delay={0.35}>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-dourado-sacra">
                  Onde estamos
                </span>
                <h2 className="mt-4 text-section">Visite e caminhe com a Capelania</h2>
                <p className="mt-3 text-lg text-gray-600">
                  Nossa casa está aberta para acolher, orientar e fortalecer a fé de todas as famílias militares e civis. Confira nossa localização e planeje sua visita.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Localização da Capelania Jesus Bom Pastor"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.140311714043!2d-46.65295652373252!3d-23.563098361752893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8a8055555%3A0xf6c2a5f5ed0f0a9!2sCatedral%20Militar%20Rainha%20da%20Paz!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/fale-conosco" className="btn-primary">
                  Agendar atendimento pastoral
                </Link>
                <Link href="/a-capelania" className="btn-secondary">
                  Conhecer nossa história
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-dourado-sacra">
                  Dúvidas frequentes
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-azul-profundo">
                  Como podemos ajudar sua família?
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Informações rápidas para quem deseja participar das pastorais, oferecer voluntariado ou receber acompanhamento espiritual.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-azul-profundo">
                      <span>{faq.question}</span>
                      <span className="ml-4 text-2xl text-dourado-sacra transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>

              <div className="rounded-3xl bg-off-white p-6 text-center">
                <h4 className="text-xl font-semibold text-azul-profundo">Quer apoiar esta missão?</h4>
                <p className="mt-2 text-base text-gray-600">
                  Doe seu tempo, talentos ou recursos para ampliar o alcance das nossas ações sociais e espirituais.
                </p>
                <Link href="/contribua" className="mt-4 inline-block btn-primary">
                  Ver formas de contribuir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}


