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

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Research Focus"
            title="Three interconnected areas of research."
            description="Our multidisciplinary approach brings together materials science, process development and environmental research."
          />

          <div className="mt-14 space-y-8">
            {researchAreas.map((research) => (
              <article
                key={research.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-smap-surface"
              >
                <div className="grid lg:grid-cols-[0.35fr_1fr]">
                  {/* Category */}
                  <div className="bg-smap-ink p-8 sm:p-10 lg:p-12">
                    <span className="text-sm font-semibold text-smap-green-light">
                      {research.number}
                    </span>

                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {research.title}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {research.description}
                    </p>
                  </div>

                  {/* Research areas */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="grid gap-x-8 gap-y-8 md:grid-cols-3">
                      {research.areas.map((area, index) => (
                        <div key={area.title}>
                          <span className="text-xs font-semibold text-smap-green">
                            0{index + 1}
                          </span>

                          <h3 className="mt-3 text-lg font-semibold text-smap-ink">
                            {area.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-smap-muted">
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
      <section className="bg-smap-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-smap-green">
            Research Outcomes
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-smap-ink sm:text-4xl">
            Explore what our research has produced.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-smap-muted">
            Discover publications, innovations and other outcomes from SMAPDEV
            research.
          </p>

          <Link
            to="/research-outcomes"
            className="mt-8 inline-flex items-center rounded-full bg-smap-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-smap-green-dark"
          >
            View research outcomes
          </Link>
        </div>
      </section>
    </>
  );
};

export default ResearchAreas;
