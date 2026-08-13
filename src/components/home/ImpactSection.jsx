import SectionHeading from '../common/SectionHeading'

const impactItems = [
  {
    value: '50+',
    label: 'Research Publications',
    description:
      'Research contributions across sustainable materials, environmental solutions and related fields.',
  },
  {
    value: 'Patents',
    label: 'Innovation & Intellectual Property',
    description:
      'Research translated into innovative technologies and potential real-world applications.',
  },
  {
    value: 'Global',
    label: 'Research Collaboration',
    description:
      'Connecting researchers and partners across disciplines to advance sustainable solutions.',
  },
]

const ImpactSection = () => {
  return (
    <section className="bg-smap-ink py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">

          {/* Introduction */}
          <SectionHeading
            eyebrow="Research Impact"
            title="Turning research into meaningful impact."
            description="SMAPDEV's work combines scientific research, innovation and collaboration to address sustainability challenges."
          />

          {/* Impact items */}
          <div className="grid gap-5 sm:grid-cols-3">
            {impactItems.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {item.value}
                </p>

                <h3 className="mt-4 text-sm font-semibold text-white">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default ImpactSection