import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import { researchOutcomes } from '../data/researchOutcomes'

const ResearchOutcomes = () => {
  return (
    <>
      <PageHero
        eyebrow="Research Outcomes"
        title="Research that contributes to sustainable solutions."
        description="Explore selected research outcomes from SMAPDEV across sustainable materials, advanced processes and environmental solutions."
      />

      {/* Impact introduction */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">

            <SectionHeading
              eyebrow="Research Impact"
              title="From research questions to meaningful outcomes."
            />

            <div className="space-y-5 text-base leading-8 text-smap-muted">
              <p>
                SMAPDEV research addresses practical sustainability challenges
                through work in materials development, process innovation and
                environmental solutions.
              </p>

              <p>
                Research outcomes include contributions to sustainable
                materials, environmental remediation and the development of
                approaches for converting or reusing resources more
                responsibly.
              </p>

              <p>
                The network's research activity also contributes to the wider
                scientific community through publications, innovation and
                collaboration.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-smap-surface py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Selected Outcomes"
            title="Areas where our research is making a difference."
            description="A selection of research outcomes representing the breadth of SMAPDEV's work."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {researchOutcomes.map((outcome, index) => (
              <article
                key={outcome.id}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-smap-green">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="rounded-full bg-smap-green-light px-3 py-1 text-xs font-medium text-smap-green">
                    {outcome.category}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-semibold leading-snug text-smap-ink">
                  {outcome.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-smap-muted">
                  {outcome.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Publication CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-smap-green">
            Publications & Innovation
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-smap-ink sm:text-4xl">
            Explore the work behind the outcomes.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-smap-muted">
            SMAPDEV's research contributes to scientific publications,
            innovation and knowledge exchange across sustainable materials
            and process development.
          </p>

        </div>
      </section>
    </>
  )
}

export default ResearchOutcomes