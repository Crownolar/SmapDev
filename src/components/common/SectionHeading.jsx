const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  const alignment =
    align === 'center'
      ? 'mx-auto text-center'
      : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>

      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-smap-green sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-smap-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-smap-muted sm:mt-5 sm:text-lg">
          {description}
        </p>
      )}

    </div>
  )
}

export default SectionHeading