import { Header } from 'src/components/Header'
import { DefaultStudyLayout, EditStudy } from 'src/components/study'

const Settings = () => {
  const test = 'test'
  return (
    <>
      <Header />
      <DefaultStudyLayout>
        <EditStudy />
      </DefaultStudyLayout>
    </>
  )
}

export default Settings
