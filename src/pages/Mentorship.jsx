import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'

const mentorshipAreas = [
  {
    number: '01',
    title: 'Research Guidance',
    description:
      'Support for students and early-career researchers navigating research ideas, methodology and sustainable development topics.',
  },
  {
    number: '02',
    title: 'Technical Development',
    description:
      'Opportunities to strengthen practical knowledge and technical thinking around sustainable materials and process development.',
  },
  {
    number: '03',
    title: 'Academic Growth',
    description:
      'Guidance that encourages continuous learning, critical thinking and the development of strong research capabilities.',
  },
  {
    number: '04',
    title: 'Professional Development',
    description:
      'Exposure to research collaboration, knowledge exchange and experiences that can support future professional opportunities.',
  },
]

const Mentorship = () => {
  return (
    <>
      <PageHero
        eyebrow="Mentorship"
        title="Supporting the next generation of researchers."
        description="SMAPDEV creates opportunities for learning, guidance and research development within the field of sustainable materials and process development."
      />

      {/* Introduction */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <SectionHeading
              eyebrow="Our Approach"
              title="Knowledge grows when it is shared."
            />

            <div className="max-w-3xl space-y-5 text-base leading-7 text-smap-muted sm:leading-8">
              <p>
                Mentorship provides an opportunity for experienced researchers
                to share knowledge, perspective and practical experience with
                students and emerging researchers.
              </p>

              <p>
                Through guidance and collaboration, mentees can develop their
                research capabilities while gaining a deeper understanding of
                the challenges and opportunities within sustainable materials
                and process development.
              </p>

              <p>
                The goal is to encourage curiosity, critical thinking,
                collaboration and a commitment to meaningful research.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Mentorship areas */}
      <section className="bg-smap-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Areas of Support"
            title="Mentorship that supports research and growth."
            description="Explore some of the areas where mentorship can help students and emerging researchers develop."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">

            {mentorshipAreas.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-smap-green/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <span className="text-sm font-semibold text-smap-green">
                  {item.number}
                </span>

                <h2 className="mt-4 text-xl font-semibold leading-snug text-smap-ink sm:mt-5 sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-smap-muted sm:mt-4">
                  {item.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Who it is for */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-2xl bg-smap-ink p-6 sm:rounded-3xl sm:p-10 lg:p-16">

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green-light sm:text-sm">
              Who It Is For
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl">
              For students and emerging researchers ready to learn.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:leading-8">
              Mentorship can be valuable for students, early-career
              researchers and others developing an interest in sustainable
              materials, processes and environmental solutions.
            </p>

            <div className="mt-7 sm:mt-8">
              <Button to="/contact">
                Get in touch
              </Button>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Mentorship