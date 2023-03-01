import { Header } from 'src/components/Header'
import { DefautStudyLayout, StudyDescription, StudyMember } from 'src/components/study'

const Home = () => (
  <>
    <Header />
    <DefautStudyLayout>
      <StudyDescription />
      <StudyMember />
    </DefautStudyLayout>
  </>
)

export default Home
