import UploadButton, { UPLOAD_STATUS } from '@/components/buttons/button-upload'

export default function App() {
  return (
    <section style={{ display: 'inline-flex', gap: '100px', margin: '300px' }}>
      <UploadButton status={UPLOAD_STATUS.IDLE} />
      <UploadButton status={UPLOAD_STATUS.LOADING} loading />
      <UploadButton status={UPLOAD_STATUS.RESOLVED} />
      <UploadButton status={UPLOAD_STATUS.REJECTED} />
      <UploadButton disabled />
    </section>
  )
}
