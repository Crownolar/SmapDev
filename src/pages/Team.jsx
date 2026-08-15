import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import { teamMembers } from '../data/team'

const Team = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind the research."
        description="Meet the researchers and collaborators contributing to sustainable material and process development."
      />

      {/* Team introduction */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">

            <SectionHeading
              eyebrow="Our Researchers"
              title="Research driven by expertise and collaboration."
            />

            <div className="max-w-3xl space-y-5 text-base leading-7 text-smap-muted sm:leading-8">
              <p>
                SMAPDEV is a community of researchers, scholars and
                professionals working across sustainable materials, process
                development, environmental science and related disciplines.
              </p>

              <p>
                Under the leadership of Prof. Adewale George Adeniyi, the
                network brings together diverse expertise to address practical
                sustainability challenges through research, collaboration and
                innovation.
              </p>

              <p>
                Our researchers contribute to scientific knowledge while
                working toward sustainable solutions with meaningful
                environmental and societal impact.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Team members */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Meet the Team"
            title="Researchers working across disciplines."
            description="Explore the expertise and research interests of members of the SMAPDEV Research Network."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">

            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5 sm:rounded-3xl"
              >

                {/* Image */}
                <div className="aspect-4/5 overflow-hidden bg-smap-surface">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  <p className="text-sm font-semibold text-smap-green">
                    {member.role}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold leading-snug text-smap-ink sm:text-2xl">
                    {member.name}
                  </h2>

                  {member.institution && (
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {member.institution}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-7 text-smap-muted">
                    {member.bio}
                  </p>

                  {/* Academic profiles */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">

                    <a
                      href={member.links.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-smap-ink transition-colors hover:border-smap-green hover:bg-smap-green-light hover:text-smap-green"
                    >
                      Google Scholar
                    </a>

                    <a
                      href={member.links.researchGate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-smap-ink transition-colors hover:border-smap-green hover:bg-smap-green-light hover:text-smap-green"
                    >
                      ResearchGate
                    </a>

                    <a
                      href={member.links.scopus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-smap-ink transition-colors hover:border-smap-green hover:bg-smap-green-light hover:text-smap-green"
                    >
                      Scopus
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Research community */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-smap-ink p-7 sm:p-10 lg:p-14">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green-light sm:text-sm">
              A Collaborative Network
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Research becomes stronger when expertise comes together.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              SMAPDEV brings together researchers with complementary expertise
              across materials science, engineering, chemistry, environmental
              research and related fields. The network's collaborative model
              supports knowledge exchange and research partnerships across
              institutions and sectors.
            </p>

            <div className="mt-8">
              <Button to="/collaboration">
                Explore collaboration
              </Button>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Team