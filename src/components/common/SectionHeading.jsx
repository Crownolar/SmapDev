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
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-smap-green">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-smap-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-smap-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading