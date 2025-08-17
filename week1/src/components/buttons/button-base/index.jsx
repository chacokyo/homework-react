import { BASE_STYLE, SIZES, VARIANTS } from './const'

export default function BaseButton({
  type = 'button',
  disabled = false,
  variant = VARIANTS.PRIMARY,
  size = SIZES.MEDIUM,
  className = '',
  label = '',
  children,
}) {
  const classes = ` ${BASE_STYLE} ${variant} ${size} ${className} `
  const ariaProps = label ? { 'aria-label': label } : {}

  return (
    <button type={type} disabled={disabled} className={classes} {...ariaProps}>
      {children}
    </button>
  )
}
