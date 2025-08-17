import './style.css'

export default function SpinnerIcon({
  size = 14,
  color = '#525577',
  label = '',
}) {
  const ariaProps = label
    ? { 'aria-label': label, 'role': 'img' }
    : { 'aria-hidden': 'true' }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      {...ariaProps}
    >
      <g className="spinner_V8m1">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
      </g>
    </svg>
  )
}
