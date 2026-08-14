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
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">

            <SectionHeading
              eyebrow="Research Impact"
              title="From research questions to meaningful outcomes."
            />

            <div className="max-w-3xl space-y-5 text-base leading-7 text-smap-muted sm:leading-8">

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
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Selected Outcomes"
            title="Areas where our research is making a difference."
            description="A selection of research outcomes representing the breadth of SMAPDEV's work."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

            {researchOutcomes.map((outcome, index) => (
              <article
                key={outcome.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
              >

                {/* Meta */}
                <div className="flex items-start justify-between gap-4">

                  <span className="text-sm font-semibold text-smap-green">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="rounded-full bg-smap-green-light px-3 py-1 text-right text-xs font-medium leading-5 text-smap-green">
                    {outcome.category}
                  </span>

                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">

                  <h2 className="mt-6 text-xl font-semibold leading-snug text-smap-ink sm:mt-7">
                    {outcome.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-smap-muted sm:mt-4">
                    {outcome.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Publication CTA */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green sm:text-sm">
            Publications &amp; Innovation
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-smap-ink sm:mt-4 sm:text-4xl">
            Explore the work behind the outcomes.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-smap-muted sm:mt-5 sm:text-lg">
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