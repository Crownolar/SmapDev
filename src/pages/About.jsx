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

const coreValues = [
  {
    number: '01',
    title: 'Excellence',
    description:
      'We are committed to achieving excellence in our research, ensuring that every effort is characterized by precision, thoroughness, and a dedication to high standards.',
  },
  {
    number: '02',
    title: 'Innovation',
    description:
      'Innovation is at the core of SMAPDEV. We embrace creativity, promote unconventional thinking, and aim to lead in ground-breaking discoveries in sustainable technology.',
  },
  {
    number: '03',
    title: 'Collaboration',
    description:
      'SMAPDEV flourishes through collaboration. We understand the value of diversity and actively pursue partnerships with industry, academia, and other research institutions to enhance the impact of our work.',
  },
  {
    number: '04',
    title: 'Sustainability',
    description:
      'Our dedication to sustainability extends beyond research; it is embedded in our everyday practices. We advocate for responsible and ethical conduct, ensuring that our actions are in line with our mission.',
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

      {/* Mission & Vision */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Purpose"
            title="Research guided by purpose and a long-term vision."
            description="SMAPDEV is committed to advancing sustainable material and process development through research, collaboration and knowledge sharing."
          />

          <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2">

            {/* Mission */}
            <article className="rounded-3xl bg-smap-ink p-7 sm:p-9 lg:p-12">

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-smap-green-light">
                Mission
              </span>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Advancing sustainable material and process development.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                The SMAPDEV Research Network is fundamentally committed to
                advancing sustainable material and process development
                through thoughtful research, collaborative efforts, and the
                sharing of knowledge. Our mission is to drive positive change
                by fostering innovation that aligns with our values of
                community service and environmental stewardship.
              </p>

            </article>

            {/* Vision */}
            <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 lg:p-12">

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-smap-green">
                Vision
              </span>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-smap-ink sm:text-3xl">
                Advancing sustainable solutions for a stronger future.
              </h2>

              <p className="mt-5 text-sm leading-7 text-smap-muted sm:text-base sm:leading-8">
                Our vision goes beyond traditional research. SMAPDEV aims
                to be a global leader, advancing sustainable solutions. In
                our envisioned society, the use of innovative and
                sustainable materials and processes meets current needs
                while paving the way for a strong and peaceful future.
                We aspire for our initiatives to inspire and support the
                shift towards sustainable living.
              </p>

            </article>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Core Values"
            title="Principles that shape how we work."
            description="Our research and collaborations are guided by four principles that influence how we pursue knowledge, innovation and impact."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">

            {coreValues.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-200 bg-smap-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7"
              >

                <span className="text-sm font-semibold text-smap-green">
                  {value.number}
                </span>

                <h2 className="mt-5 text-xl font-semibold text-smap-ink">
                  {value.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-smap-muted">
                  {value.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Our Approach */}
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

      {/* Achievements */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <SectionHeading
              eyebrow="Achievements"
              title="Research translated into meaningful innovation."
              description="SMAPDEV's work demonstrates a sustained commitment to material development, environmental sustainability and practical research impact."
            />

            <div className="space-y-6">

              <article className="rounded-2xl border border-slate-200 bg-smap-surface p-6 sm:p-8">

                <span className="text-sm font-semibold text-smap-green">
                  Materials Innovation
                </span>

                <h2 className="mt-4 text-xl font-semibold text-smap-ink sm:text-2xl">
                  Solvated polystyrene resin as an alternative to epoxy resin
                </h2>

                <p className="mt-4 text-sm leading-7 text-smap-muted sm:text-base sm:leading-8">
                  One of SMAPDEV's significant achievements has been the
                  successful utilization of solvated polystyrene resin as a
                  substitute for epoxy resin in composite development. This
                  work has resulted in more than 50 recent publications and
                  has also led to the filing of patents, including a patent
                  that has advanced toward development for ballistic
                  applications.
                </p>

              </article>

              <article className="rounded-2xl border border-slate-200 bg-smap-surface p-6 sm:p-8">

                <span className="text-sm font-semibold text-smap-green">
                  Environmental Research
                </span>

                <h2 className="mt-4 text-xl font-semibold text-smap-ink sm:text-2xl">
                  Biomass carbonization and co-carbonization
                </h2>

                <p className="mt-4 text-sm leading-7 text-smap-muted sm:text-base sm:leading-8">
                  SMAPDEV's environmental sustainability and pollution
                  management research includes extensive work in biomass
                  carbonization and biomass-plastic co-carbonization. The
                  network achieved the distinction of being the first
                  globally to successfully attempt biomass-plastic
                  co-carbonization.
                </p>

              </article>

              <article className="rounded-2xl border border-slate-200 bg-smap-surface p-6 sm:p-8">

                <span className="text-sm font-semibold text-smap-green">
                  Research Impact
                </span>

                <h2 className="mt-4 text-xl font-semibold text-smap-ink sm:text-2xl">
                  Continued research and knowledge contribution
                </h2>

                <p className="mt-4 text-sm leading-7 text-smap-muted sm:text-base sm:leading-8">
                  The network's in-depth study on retort-heated
                  carbonization has resulted in more than 30 publications.
                  These achievements represent only part of SMAPDEV's
                  ongoing efforts to contribute to sustainable material and
                  process development.
                </p>

              </article>

            </div>

          </div>

        </div>
      </section>

      {/* Call to action */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-24">
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