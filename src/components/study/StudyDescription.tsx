import { useAppSelector } from 'src/lib/hooks'
import styled from 'styled-components'
import { BsChatSquareText } from 'react-icons/bs'

const StudyDescription = () => {
  const { description } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  return (
    <Container>
      <Title>
        <Icon>
          <BsChatSquareText />
        </Icon>
        스터디 소개
      </Title>
      <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
    </Container>
  )
}

export default StudyDescription

export const Container = styled.section`
  padding: 3rem 3rem;
  @media ${(props) => props.theme.small} {
    padding: 1rem 1rem;
  }
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.small} {
    font-size: 1rem;
  }
`

export const Icon = styled.div`
  margin-right: 0.8rem;
`

export const Description = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.bgGroundColor1};
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
`
