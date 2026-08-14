import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

const approachItems = [
  {
    number: '01',
    title: 'Collaboration',
    description:
      'Connecting people and expertise across disciplines and sectors to encourage meaningful research collaboration.',
  },
  {
    number: '02',
    title: 'Innovation',
    description:
      'Exploring new materials, processes and approaches that can contribute to more sustainable outcomes.',
  },
  {
    number: '03',
    title: 'Impact',
    description:
      'Keeping research connected to real-world sustainability challenges and opportunities for positive change.',
  },
]

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About SMAPDEV"
        title="Building knowledge, collaboration and sustainable solutions."
        description="Discover the purpose, focus and collaborative approach of the Sustainable Material and Process Development Research Network."
      />

      {/* About introduction */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <SectionHeading
              eyebrow="Our Network"
              title="A space for research, ideas and collaboration."
            />

            <div className="max-w-3xl space-y-5 text-base leading-7 text-smap-muted sm:leading-8">

              <p>
                SMAPDEV is a sustainable material and process development
                research network bringing together researchers, thinkers
                and practitioners interested in creating more sustainable
                solutions.
              </p>

              <p>
                The network focuses on developing materials and processes
                that are innovative and responsible, with attention to
                social equity and environmental care.
              </p>

              <p>
                Its approach brings together people from different
                backgrounds and disciplines around a shared goal:
                developing solutions where materials and the processes
                used to make them work more harmoniously with the planet.
              </p>

              <p>
                Collaboration, curiosity and impact are central to this
                work, creating opportunities for ideas to move from
                research into meaningful applications.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Our approach */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Approach"
            title="Working across disciplines to solve sustainability challenges."
            description="SMAPDEV creates a collaborative environment where different perspectives, expertise and ideas can contribute to sustainable materials and process development."
          />

          <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">

            {approachItems.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-smap-green-light text-sm font-bold text-smap-green">
                  {item.number}
                </div>

                <h2 className="mt-5 text-xl font-semibold text-smap-ink sm:mt-6">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-smap-muted">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green sm:text-sm">
            Get Involved
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-smap-ink sm:mt-4 sm:text-4xl">
            Interested in working with SMAPDEV?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-smap-muted sm:mt-5 sm:text-lg">
            Explore opportunities for collaboration, research and
            knowledge exchange.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">

            <Button to="/collaboration">
              Explore collaboration
            </Button>

            <Button
              to="/contact"
              variant="secondary"
            >
              Contact us
            </Button>

          </div>

        </div>
      </section>
    </>
  )
}

export default About