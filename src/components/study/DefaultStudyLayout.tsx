import { ReactNode } from 'react'
import styled from 'styled-components'
import StudyHeader from './StudyHeader'
import StudyNavigationBar from './StudyNavigationBar'

interface Props {
  children: ReactNode
}

const DefautStudyLayout = ({ children }: Props) => (
  <MainContainer>
    <StudyHeader />
    <StudyNavigationBar />
    <Content>{children}</Content>
  </MainContainer>
)

export default DefautStudyLayout

const MainContainer = styled.main`
  padding-left: 14rem;
  padding-right: 14rem;

  @media ${(props) => props.theme.medium} {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media ${(props) => props.theme.small} {
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
`

const Content = styled.div`
  background: ${(props) => props.theme.bgGroundColor2};
  border-radius: 20px;
`
