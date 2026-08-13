const PageHero = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <section className="bg-smap-ink py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">

          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-smap-green-light">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  )
}

export default PageHero