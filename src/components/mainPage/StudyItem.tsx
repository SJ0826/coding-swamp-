import styled from 'styled-components'

type Props = {
  studyId: number
  title: string
  studyType: string
  thumbnail: string
  startDate: string
  endDate: string
  currentMemberCount: number
  maxMemberCount: number
  studyStatus: string
  tags: string[]
}

const StudyItem = ({
  studyId,
  title,
  studyType,
  thumbnail,
  startDate,
  endDate,
  tags,
  currentMemberCount,
  maxMemberCount,
  studyStatus,
}: Props) => (
  <Container key={studyId}>
    <ColorWrapper thumbnail={thumbnail}>
      <Title>{title}</Title>
      <StudyType>{studyType}</StudyType>
      <StudyType>{studyStatus === 'ONGOING' ? '모집중' : '모집 마감'}</StudyType>
      <CurrentCount>
        현재 인원: ({currentMemberCount}/{maxMemberCount})
      </CurrentCount>
      <StudyPeriod>
        {startDate} ~ {endDate}
      </StudyPeriod>
    </ColorWrapper>
    <TagContainer>
      {tags.map((tag) => (
        <Tag key={tag}>#{tag}</Tag>
      ))}
    </TagContainer>
  </Container>
)

export default StudyItem

const Container = styled.div`
  width: 19rem;
  height: 19rem;
  margin: 2rem;

  border-radius: 3rem;
  background: ${(props) => props.theme.bgGroundColor2};

  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.small} {
    width: 100%;
    height: 12rem;
    margin-left: 0rem;
    margin: 1rem;
  }
`
const ColorWrapper = styled.div<{ thumbnail: string }>`
  height: 60%;
  padding: 1rem;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  background: ${(props) => props.thumbnail};

  @media ${(props) => props.theme.small} {
    padding: 0.3rem 1rem;
  }
`
const Title = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem;

  @media ${(props) => props.theme.small} {
    font-size: 1rem;
    margin: 0.4rem;
  }
`
const StudyType = styled.span`
  width: 5rem;
  height: 2rem;
  margin-right: 0.4rem;
  padding: 0.5rem;

  border-radius: 0.25rem;
  background-color: rgba(74, 74, 74, 0.4);

  text-align: center;
  font-size: 0.7rem;
  color: white;
  line-height: 100%;
  z-index: 5;

  @media ${(props) => props.theme.small} {
    padding: 0.4rem;
    margin-bottom: 0.2rem;
  }

  @media ${(props) => props.theme.small} {
    width: 4rem;
    height: 1rem;
    font-size: 0.3rem;
    padding: 0.3rem;

    margin-bottom: 0.2rem;
  }
`
const CurrentCount = styled.h3`
  font-size: 1rem;
  margin-top: 1rem;

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
  }
`
const StudyPeriod = styled.h3`
  font-size: 1rem;

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`

const Tag = styled.div`
  margin: 0.2rem;
  color: ${(props) => props.theme.text2};

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
  }
`
