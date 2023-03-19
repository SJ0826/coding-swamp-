import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import styled from 'styled-components'

const StudyTypeSelector = () => {
  const studyType = useAppSelector(({ studyForm }) => studyForm.value.studyType)
  const dispatch = useAppDispatch()

  const isClicked = (targetStudyType: string) => {
    if (targetStudyType === studyType) {
      return true
    }
    return false
  }

  return (
    <Container>
      <StudyType
        id="study"
        onClick={() => dispatch(changeStudyForm({ key: 'studyType', value: 'STUDY' }))}
        isClicked={isClicked('STUDY')}
      >
        스터디
      </StudyType>
      <StudyType
        onClick={() => dispatch(changeStudyForm({ key: 'studyType', value: 'MOGAKKO' }))}
        isClicked={isClicked('MOGAKKO')}
      >
        모각코
      </StudyType>
    </Container>
  )
}

export default StudyTypeSelector

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.small} {
    margin: 0.6rem 0rem;
  }
`

const StudyType = styled.div<{ isClicked: boolean }>`
  font-size: 18px;
  margin-right: 2rem;
  color: ${(props) => (props.isClicked ? props.theme.text1 : props.theme.text4)};

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
  }
`
