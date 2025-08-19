import UploadButton, { UPLOAD_STATUS } from '@/components/buttons/button-upload'
import { Fragment } from 'react/jsx-runtime'
import BaseButton from './components/buttons/button-base'
import { VARIANTS } from './components/buttons/button-base/const'

export default function App() {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '30px',
        margin: '20px',
      }}
    >
      <section
        style={{
          display: 'inline-flex',
          gap: '30px',
        }}
      >
        <BaseButton variant={VARIANTS.DANGER}>DANGER</BaseButton>
        <BaseButton variant={VARIANTS.GHOST}>GHOST</BaseButton>
        <BaseButton variant={VARIANTS.OUTLINE}>OUTLINE</BaseButton>
        <BaseButton variant={VARIANTS.PRIMARY}>PRIMARY</BaseButton>
        <BaseButton variant={VARIANTS.SECONDARY}>SECONDARY</BaseButton>
        <BaseButton disabled>DISABLED</BaseButton>
      </section>
      <section
        style={{
          display: 'inline-flex',
          gap: '30px',
        }}
      >
        <UploadButton status={UPLOAD_STATUS.IDLE} />
        <UploadButton status={UPLOAD_STATUS.LOADING} loading />
        <UploadButton status={UPLOAD_STATUS.RESOLVED} />
        <UploadButton status={UPLOAD_STATUS.REJECTED} />
        <UploadButton disabled />
      </section>
    </div>
  )
}
