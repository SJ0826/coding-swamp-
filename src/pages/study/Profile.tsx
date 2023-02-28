import { Header } from 'src/components/Header'
import { StudyHeader, StudyNavigationBar } from 'src/components/study'
import styled from 'styled-components'

const Profile = () => {
  const test = 'test'
  return (
    <>
      <Header />
      <MainContainer>
        <StudyHeader />
        <StudyNavigationBar />
      </MainContainer>
    </>
  )
}

export default Profile

const MainContainer = styled.main`
  padding-left: 6rem;
  padding-right: 6rem;

  @media ${(props) => props.theme.small} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
