import { Link } from 'react-router-dom'
import { researchAreas } from '../../data/researchAreas'
import SectionHeading from '../common/SectionHeading'

const ResearchHighlights = () => {
  return (
    <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Research"
          title="Research focused on solving real-world challenges."
          description="Our multidisciplinary research spans sustainable materials, advanced processes and environmental solutions."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">

          {researchAreas.map((research, index) => (
            <article
              key={research.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
            >

              {/* Number */}
              <span className="text-sm font-semibold text-smap-green">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-smap-ink sm:mt-5 sm:text-2xl">
                {research.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-smap-muted sm:mt-4">
                {research.description}
              </p>

              <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 sm:mt-6 sm:pt-6">
                {research.areas.map((area) => (
                  <li
                    key={area.title}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-smap-green" />
                    <span>{area.title}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/research-areas"
                className="mt-auto pt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-smap-green transition-all group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2"
              >
                Explore research
                <span aria-hidden="true">→</span>
              </Link>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default ResearchHighlights