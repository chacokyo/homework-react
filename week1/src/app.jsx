import UploadButton, { UPLOAD_STATUS } from '@/components/buttons/button-upload'
import SvgIcon from './components/icons/static'
import { SVG_TYPE } from './components/icons/static/const'

export default function App() {
  return (
    <section style={{ display: 'inline-flex', gap: '100px', margin: '300px' }}>
      {/* <UploadButton status={UPLOAD_STATUS.IDLE} />
      <UploadButton status={UPLOAD_STATUS.LOADING} loading />
      <UploadButton status={UPLOAD_STATUS.RESOLVED} />
      <UploadButton status={UPLOAD_STATUS.REJECTED} />
      <UploadButton disabled /> */}
      <SvgIcon type={SVG_TYPE.UP_ARROW} size={50} />
      <SvgIcon type={SVG_TYPE.CHECK_MARK} size={50} />
      <SvgIcon type={SVG_TYPE.CROSS} size={50} />
      <SvgIcon type={SVG_TYPE.NOT_ALLOWED} size={50} />
    </section>
  )
}
