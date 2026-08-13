import { Link } from 'react-router-dom'

const Button = ({
  children,
  to,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary:
      'bg-smap-green text-white hover:bg-smap-green-dark',
    secondary:
      'border border-smap-green text-smap-green hover:bg-smap-green-light',
    light:
      'bg-white text-smap-ink hover:bg-smap-green-light',
  }

  const styles = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-6
    py-3
    text-sm
    font-semibold
    transition-all
    duration-200
    ${variants[variant]}
    ${className}
  `

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  )
}

export default Button