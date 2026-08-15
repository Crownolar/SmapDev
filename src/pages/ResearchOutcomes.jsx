import { useState } from 'react'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import { researchOutcomes } from '../data/researchOutcomes'

const ResearchOutcomes = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleOutcome = (id) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <>
      <PageHero
        eyebrow="Research Outcomes"
        title="Research that contributes to sustainable solutions."
        description="Explore selected research outcomes, publications and innovations from SMAPDEV across sustainable materials, advanced processes and environmental solutions."
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
                The network's research includes biochar production,
                biocomposite synthesis, environmental remediation,
                sustainable polymer systems and biomass-plastic
                co-carbonization.
              </p>

              <p>
                These activities are reflected in a growing body of scientific
                publications and research contributions spanning sustainable
                materials, environmental technologies and process development.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Research outcomes */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Research Portfolio"
            title="Selected areas of research output."
            description="Explore the research themes and publications that demonstrate the breadth of SMAPDEV's work."
          />

          <div className="mt-10 space-y-5 sm:mt-12">

            {researchOutcomes.map((outcome, index) => {
              const isExpanded = expandedId === outcome.id

              return (
                <article
                  key={outcome.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-900/5"
                >

                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => toggleOutcome(outcome.id)}
                    className="flex w-full items-start justify-between gap-6 p-6 text-left sm:p-8 lg:p-10"
                    aria-expanded={isExpanded}
                  >

                    <div className="flex min-w-0 gap-5 sm:gap-7">

                      <span className="shrink-0 text-sm font-semibold text-smap-green">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>

                        <span className="inline-flex rounded-full bg-smap-green-light px-3 py-1 text-xs font-medium text-smap-green">
                          {outcome.category}
                        </span>

                        <h2 className="mt-4 text-xl font-semibold leading-snug text-smap-ink sm:text-2xl">
                          {outcome.title}
                        </h2>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-smap-muted sm:text-base">
                          {outcome.description}
                        </p>

                      </div>

                    </div>

                    <span
                      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-smap-surface text-lg font-medium text-smap-ink"
                      aria-hidden="true"
                    >
                      {isExpanded ? '−' : '+'}
                    </span>

                  </button>

                  {/* Publications */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 bg-smap-surface px-6 py-6 sm:px-8 sm:py-8 lg:px-10">

                      <div className="flex items-center justify-between gap-4">

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green">
                            Selected Publications
                          </p>

                          <p className="mt-2 text-sm text-smap-muted">
                            Selected research publications associated with this outcome.
                          </p>
                        </div>

                        <span className="hidden rounded-full bg-white px-3 py-1 text-xs font-medium text-smap-muted sm:inline-flex">
                          {outcome.publications.length} publications
                        </span>

                      </div>

                      <div className="mt-6 space-y-3">

                        {outcome.publications.map((publication) => (
                          <div
                            key={publication.doi}
                            className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                          >

                            <h3 className="text-sm font-semibold leading-6 text-smap-ink sm:text-base">
                              {publication.title}
                            </h3>

                            <div className="mt-2 flex flex-col gap-1 text-xs leading-5 text-smap-muted sm:flex-row sm:flex-wrap sm:gap-x-3">
                              <span>
                                {publication.journal}
                              </span>

                              <span className="hidden sm:inline">
                                •
                              </span>

                              <span>
                                {publication.year}
                              </span>
                            </div>

                            <a
                              href={`https://doi.org/${publication.doi}`}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-3 inline-flex text-xs font-semibold text-smap-green hover:text-smap-green-dark"
                            >
                              View publication →
                            </a>

                          </div>
                        ))}

                      </div>

                    </div>
                  )}

                </article>
              )
            })}

          </div>

        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-smap-ink p-7 sm:p-10 lg:p-14">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green-light sm:text-sm">
              Research Achievements
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              From material innovation to pioneering carbonization research.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">

              <p>
                SMAPDEV has reported the successful utilization of solvated
                polystyrene resin as a substitute for epoxy resin in composite
                development. The work has generated more than 50 recent
                publications and has also led to patent filings.
              </p>

              <p>
                The network has also undertaken pioneering biomass
                carbonization and biomass-plastic co-carbonization research,
                with the document describing SMAPDEV as the first globally to
                successfully attempt biomass-plastic co-carbonization.
              </p>

              <p>
                Research into retort-heated carbonization has additionally
                resulted in more than 30 publications.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green sm:text-sm">
            Research &amp; Collaboration
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-smap-ink sm:mt-4 sm:text-4xl">
            Interested in the research behind these outcomes?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-smap-muted sm:mt-5 sm:text-lg">
            Connect with SMAPDEV to explore research, collaboration and
            knowledge exchange opportunities.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center rounded-full bg-smap-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-smap-green-dark sm:mt-8"
          >
            Contact SMAPDEV
          </a>

        </div>
      </section>
    </>
  )
}

export default ResearchOutcomes