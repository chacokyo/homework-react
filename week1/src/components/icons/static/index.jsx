import { SVG_PATH, SVG_TYPE } from './const'

export default function SvgIcon({
  type = SVG_TYPE.UP_ARROW,
  size = 12,
  pathSize = 12,
  color = '#525577',
  label = '',
}) {
  const path = SVG_PATH[type] || SVG_PATH[SVG_TYPE.UP_ARROW]
  const ariaProps = label
    ? { 'aria-label': label, 'role': 'img' }
    : { 'aria-hidden': 'true' }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 ${pathSize} ${pathSize}`}
      {...ariaProps}
    >
      <path fill={color} fillRule="evenodd" d={path} clipRule="evenodd" />
    </svg>
  )
}
