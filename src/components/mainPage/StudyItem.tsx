import styled from 'styled-components'

type Props = {
  studyId: number
  title: string
  studyType: string
  thumbnail: string
  startDate: string
  endDate: string
  tags: string[]
}

const StudyItem = ({ studyId, title, studyType, thumbnail, startDate, endDate, tags }: Props) => {
  const test = 'test'
  return (
    <Container key={studyId}>
      <ColorWrapper thumbnail={thumbnail}>
        <Title>{title}</Title>
        <StudyType>{studyType}</StudyType>
        <h5>
          {startDate} ~ {endDate}
        </h5>
      </ColorWrapper>
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagContainer>
    </Container>
  )
}

export default StudyItem

const Container = styled.div`
  width: 16rem;
  height: 14rem;
  margin: 1rem;

  border-radius: 3rem;
  background: ${(props) => props.theme.bgGroundColor2};
`
const ColorWrapper = styled.div<{ thumbnail: string }>`
  height: 70%;
  padding: 1rem;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  background: ${(props) => props.thumbnail};
`
const Title = styled.h3`
  text-align: center;
  margin: 1rem;
`
const StudyType = styled.h5`
  width: 5.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  border-radius: 0.25rem;
  background-color: rgba(74, 74, 74, 0.4);

  text-align: center;
  line-height: 100%;
  z-index: 5;

  @media ${(props) => props.theme.small} {
    padding: 0.2rem;
    margin-bottom: 0.2rem;
  }
`
const TagContainer = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.2rem;
`

const Tag = styled.div``
