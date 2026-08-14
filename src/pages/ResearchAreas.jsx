import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { researchAreas } from "../data/researchAreas";

const ResearchAreas = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Research"
        title="Research areas addressing sustainability challenges."
        description="Our research spans sustainable materials, advanced processes and environmental solutions."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Research Focus"
            title="Three interconnected areas of research."
            description="Our multidisciplinary approach brings together materials science, process development and environmental research."
          />

          <div className="mt-10 space-y-6 sm:mt-12 lg:mt-14 lg:space-y-8">
            {researchAreas.map((research) => (
              <article
                key={research.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-smap-surface sm:rounded-3xl"
              >
                <div className="grid lg:grid-cols-[0.35fr_1fr]">

                  {/* Category */}
                  <div className="bg-smap-ink p-6 sm:p-8 lg:p-12">

                    <span className="text-xs font-semibold text-smap-green-light sm:text-sm">
                      {research.number}
                    </span>

                    <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-3xl">
                      {research.title}
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5">
                      {research.description}
                    </p>

                  </div>

                  {/* Research areas */}
                  <div className="p-6 sm:p-8 lg:p-12">

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">

                      {research.areas.map((area, index) => (
                        <div key={area.title}>

                          <span className="text-xs font-semibold text-smap-green">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="mt-2 text-lg font-semibold leading-snug text-smap-ink sm:mt-3">
                            {area.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-smap-muted sm:mt-3">
                            {area.description}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Research CTA */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green sm:text-sm">
            Research Outcomes
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-smap-ink sm:mt-4 sm:text-4xl">
            Explore what our research has produced.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-smap-muted sm:mt-5 sm:text-lg">
            Discover publications, innovations and other outcomes from
            SMAPDEV research.
          </p>

          <Link
            to="/research-outcomes"
            className="mt-7 inline-flex items-center rounded-full bg-smap-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-smap-green-dark sm:mt-8"
          >
            View research outcomes
          </Link>

        </div>
      </section>
    </>
  );
};

export default ResearchAreas;