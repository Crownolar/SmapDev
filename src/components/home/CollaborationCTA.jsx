import Button from '../common/Button'

const CollaborationCTA = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-smap-green px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-white/10"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Get Involved
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's build sustainable solutions together.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                SMAPDEV brings together researchers, institutions, industry
                partners and other stakeholders to advance sustainable
                materials and process development.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                to="/collaboration"
                variant="light"
              >
                Explore collaboration
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                className="border-white text-white hover:bg-white/10"
              >
                Contact us
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationCTA