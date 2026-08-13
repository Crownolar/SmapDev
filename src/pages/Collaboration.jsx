import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

const collaborationTypes = [
  {
    number: '01',
    title: 'Research Collaboration',
    description:
      'Work with SMAPDEV researchers on projects related to sustainable materials, advanced processes and environmental solutions.',
  },
  {
    number: '02',
    title: 'Academic Collaboration',
    description:
      'Connect with researchers, institutions and academic partners to exchange knowledge, expertise and research opportunities.',
  },
  {
    number: '03',
    title: 'Industry Collaboration',
    description:
      'Explore opportunities to translate research and innovation into practical applications and sustainable solutions.',
  },
  {
    number: '04',
    title: 'Knowledge Exchange',
    description:
      'Share expertise, ideas and perspectives through research activities, discussions and other collaborative initiatives.',
  },
]

const Collaboration = () => {
  return (
    <>
      <PageHero
        eyebrow="Collaboration"
        title="Let's work together on sustainable solutions."
        description="SMAPDEV brings researchers, institutions and other stakeholders together around sustainable materials and process development."
      />

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <SectionHeading
              eyebrow="Why Collaborate?"
              title="Different perspectives can create better solutions."
            />

            <div className="space-y-5 text-base leading-8 text-smap-muted">
              <p>
                Sustainable challenges are complex and often require
                knowledge from more than one discipline. Collaboration creates
                opportunities to bring different expertise, perspectives and
                experiences together.
              </p>

              <p>
                SMAPDEV provides a platform for researchers and partners to
                connect around common interests in sustainable materials,
                advanced processes and environmental solutions.
              </p>

              <p>
                Whether the goal is to develop new research, exchange
                knowledge or explore practical applications, collaboration
                can help turn ideas into meaningful outcomes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Collaboration types */}
      <section className="bg-smap-surface py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Ways to Collaborate"
            title="Find an opportunity that fits your goals."
            description="There are different ways researchers, institutions and organisations can engage with SMAPDEV."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {collaborationTypes.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <span className="text-sm font-semibold text-smap-green">
                  {item.number}
                </span>

                <h2 className="mt-5 text-xl font-semibold text-smap-ink sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-smap-muted">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-smap-green">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-smap-ink sm:text-4xl">
            Have an idea for collaboration?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-smap-muted">
            Tell us about your research interests, organisation or
            collaboration idea and let's explore what we can build together.
          </p>

          <div className="mt-8">
            <Button to="/contact">
              Get in touch
            </Button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Collaboration