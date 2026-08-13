import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import { teamMembers } from '../data/team'

const Team = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind the research."
        description="Meet the researchers and collaborators contributing to sustainable material and process development."
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Researchers"
            title="Research driven by people and collaboration."
            description="SMAPDEV brings together expertise across sustainable materials, advanced processes and environmental solutions."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                {/* Image */}
                <div className="aspect-4/3 overflow-hidden bg-smap-surface">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="p-7">
                  <p className="text-sm font-semibold text-smap-green">
                    {member.role}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-smap-ink">
                    {member.name}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-smap-muted">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Collaboration message */}
      <section className="bg-smap-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-smap-green">
            Collaboration
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-smap-ink sm:text-4xl">
            Research works better together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-smap-muted">
            SMAPDEV encourages collaboration across disciplines,
            institutions and sectors to develop meaningful and sustainable
            solutions.
          </p>

        </div>
      </section>
    </>
  )
}

export default Team