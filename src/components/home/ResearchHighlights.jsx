import { Link } from "react-router-dom";
import { researchAreas } from "../../data/researchAreas";
import SectionHeading from "../common/SectionHeading";

const ResearchHighlights = () => {
  return (
    <section className="bg-smap-surface py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Research"
          title="Research focused on solving real-world challenges."
          description="Our multidisciplinary research spans sustainable materials, advanced processes and environmental solutions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {researchAreas.map((research) => (
            <article
              key={research.id}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5"
            >
              {/* Number */}
              <span className="text-sm font-semibold text-smap-green">
                0{researchAreas.indexOf(research) + 1}
              </span>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-smap-ink">
                {research.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-smap-muted">
                {research.description}
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                {research.areas.map((area) => (
                  <li
                    key={area.title}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-smap-green" />
                    {area.title}
                  </li>
                ))}
              </ul>

              <Link
                to="/research-areas"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-smap-green transition-all group-hover:gap-3"
              >
                Explore research
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;
