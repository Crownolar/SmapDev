const PageHero = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <section className="bg-smap-ink py-14 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">

          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-smap-green-light sm:text-sm sm:tracking-[0.2em]">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  )
}

export default PageHero