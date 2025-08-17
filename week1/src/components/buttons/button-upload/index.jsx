import BaseButton from '@/components/buttons/button-base'
import SpinnerIcon from '@/components/icons/animate'
import SvgIcon from '@/components/icons/static'
import { UPLOAD_LABEL, UPLOAD_STATUS } from './const'
import { SVG_TYPE } from '@/components/icons/static/const'
import { VARIANTS } from '../button-base/const'

export default function UploadButton({
  status = UPLOAD_STATUS.IDLE,
  disabled = false,
  loading = false,
}) {
  const buttonLabel = UPLOAD_LABEL[status] ?? UPLOAD_LABEL.IDLE

  const iconType = disabled ? SVG_TYPE.NOT_ALLOWED : getIconTypeByStatus(status)
  return (
    <BaseButton label={buttonLabel} disabled={disabled}>
      {loading ? <SpinnerIcon /> : <SvgIcon type={iconType} />}
      <span className="whitespace-nowrap">{buttonLabel}</span>
    </BaseButton>
  )
}

export { UPLOAD_STATUS }

function getIconTypeByStatus(status) {
  const iconMap = {
    [UPLOAD_STATUS.IDLE]: SVG_TYPE.UP_ARROW,
    [UPLOAD_STATUS.LOADING]: SVG_TYPE.SPINNER,
    [UPLOAD_STATUS.RESOLVED]: SVG_TYPE.CHECK_MARK,
    [UPLOAD_STATUS.REJECTED]: SVG_TYPE.CROSS,
  }

  return iconMap[status] || SVG_TYPE.UP_ARROW
}
