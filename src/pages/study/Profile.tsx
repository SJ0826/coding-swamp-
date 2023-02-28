import { Header } from 'src/components/Header'
import { DefautStudyLayout, StudyDescription, StudyMember } from 'src/components/study'

const Profile = () => (
  <>
    <Header />
    <DefautStudyLayout>
      <StudyDescription />
      <StudyMember />
    </DefautStudyLayout>
  </>
)

export default Profile
