import { Header } from 'src/components/Header'
import { DefautStudyLayout, StudyDescription } from 'src/components/study'

const Profile = () => {
  const test = 'test'
  return (
    <>
      <Header />
      <DefautStudyLayout>
        <StudyDescription />
      </DefautStudyLayout>
    </>
  )
}

export default Profile
