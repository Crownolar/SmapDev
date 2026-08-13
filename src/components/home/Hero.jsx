import Button from '../common/Button'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-smap-surface">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* Content */}
        <div className="max-w-2xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-smap-green">
            Sustainable Materials &amp; Process Development
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-smap-ink sm:text-5xl lg:text-6xl xl:text-7xl">
            Advancing sustainable materials and processes through research and collaboration.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-smap-muted sm:text-lg sm:leading-8">
            SMAPDEV brings researchers, institutions and industry together
            to develop knowledge, technologies and solutions for a more
            sustainable future.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/research-areas">
              Explore our research
            </Button>

            <Button
              to="/about"
              variant="secondary"
            >
              About SMAPDEV
            </Button>
          </div>

        </div>

        {/* Visual */}
        <div className="relative">

          <div className="aspect-4/5 overflow-hidden rounded-3xl bg-slate-200">
            <img
              src="/images/hero/smapdev-hero.png"
              alt="Sustainable materials research"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:block lg:-left-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-smap-muted">
              Research network
            </p>

            <p className="mt-1 text-lg font-semibold text-smap-ink">
              Research · Innovation · Impact
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero