import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

const collaborationTypes = [
  {
    number: '01',
    title: 'Research Collaboration',
    description:
      'SMAPDEV provides opportunities for researchers to collaborate on projects addressing sustainable materials, advanced processes and environmental challenges.',
  },
  {
    number: '02',
    title: 'Academic Collaboration',
    description:
      'The network connects researchers, universities and academic institutions to exchange knowledge, expertise and research opportunities.',
  },
  {
    number: '03',
    title: 'Industry Collaboration',
    description:
      'SMAPDEV encourages engagement with industry and other organisations to support the translation of research and innovation into practical applications.',
  },
  {
    number: '04',
    title: 'Knowledge Exchange',
    description:
      'The network promotes the sharing of expertise, ideas and perspectives through research activities, discussions, workshops and collaborative initiatives.',
  },
]

const collaboratingInstitutions = [
  'University of Ilorin',
  'University of Nigeria, Nsukka',
  'Federal University of Technology, Owerri',
  'Federal University of Technology, Akure',
  'University of Benin',
  'University of Lagos',
  'University of Ibadan',
  'Covenant University',
  'Lagos State University',
  'Nigerian Building and Road Research Institute',
  'National Research Institute for Chemical Technology',
  'National Centre for Energy Research and Development',
  'African University of Science and Technology',
  'University of South Africa',
  'University of Johannesburg',
  'University of Cape Town',
]

const Collaboration = () => {
  return (
    <>
      <PageHero
        eyebrow="Collaboration"
        title="Working together to develop sustainable solutions."
        description="SMAPDEV brings researchers, academic institutions, industry and other stakeholders together to advance sustainable materials and process development."
      />

      {/* Introduction */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <SectionHeading
              eyebrow="Why Collaborate?"
              title="Research is stronger when expertise is shared."
            />

            <div className="max-w-3xl space-y-5 text-base leading-7 text-smap-muted sm:leading-8">
              <p>
                Sustainable development challenges are complex and require
                knowledge, expertise and perspectives from different
                disciplines and sectors.
              </p>

              <p>
                SMAPDEV therefore encourages collaboration among researchers,
                academic institutions, industry and other organisations with
                shared interests in sustainable materials, process development
                and environmental solutions.
              </p>

              <p>
                Through collaboration, the network creates opportunities for
                knowledge exchange, research development, innovation and the
                translation of research into meaningful applications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Local and international collaboration */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Collaboration Network"
            title="Connecting expertise locally and internationally."
            description="SMAPDEV's collaborative activities extend across institutions and research communities, creating opportunities for shared learning and joint research."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">

            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:rounded-3xl sm:p-8 lg:p-10">
              <span className="text-sm font-semibold text-smap-green">
                01
              </span>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-smap-ink sm:mt-5 sm:text-3xl">
                Local Collaboration
              </h2>

              <p className="mt-4 text-sm leading-7 text-smap-muted sm:text-base sm:leading-8">
                SMAPDEV collaborates with universities, research institutions
                and organisations across Nigeria to strengthen research
                capacity and support the development of sustainable solutions
                relevant to local challenges.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:rounded-3xl sm:p-8 lg:p-10">
              <span className="text-sm font-semibold text-smap-green">
                02
              </span>

              <h2 className="mt-4 text-2xl font-semibold leading-tight text-smap-ink sm:mt-5 sm:text-3xl">
                International Collaboration
              </h2>

              <p className="mt-4 text-sm leading-7 text-smap-muted sm:text-base sm:leading-8">
                International collaboration creates opportunities to share
                expertise, strengthen research networks and contribute to
                global efforts towards sustainable materials, processes and
                environmental solutions.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* Ways to collaborate */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Ways to Collaborate"
            title="Find an opportunity that fits your goals."
            description="Researchers, institutions, organisations and other partners can engage with SMAPDEV in different ways."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">

            {collaborationTypes.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-smap-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <span className="text-sm font-semibold text-smap-green">
                  {item.number}
                </span>

                <h2 className="mt-4 text-xl font-semibold leading-snug text-smap-ink sm:mt-5 sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-smap-muted sm:mt-4">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Collaborating institutions */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <SectionHeading
              eyebrow="Collaborating Institutions"
              title="Building connections across research institutions."
              description="SMAPDEV's collaborative network includes institutions working across research, innovation, engineering, environmental science and related fields."
            />

            <div className="grid gap-3 sm:grid-cols-2">

              {collaboratingInstitutions.map((institution, index) => (
                <div
                  key={institution}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                >
                  <span className="mt-0.5 text-xs font-semibold text-smap-green">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="text-sm font-medium leading-6 text-smap-ink">
                    {institution}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green sm:text-sm">
            Start a Conversation
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-smap-ink sm:mt-4 sm:text-4xl">
            Interested in collaborating with SMAPDEV?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-smap-muted sm:mt-5 sm:text-lg">
            Tell us about your research interests, institution, organisation
            or collaboration idea and let's explore opportunities to work
            together.
          </p>

          <div className="mt-7 sm:mt-8">
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