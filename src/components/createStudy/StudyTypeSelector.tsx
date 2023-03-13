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
    <>
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
    </>
  )
}

export default StudyTypeSelector

const StudyType = styled.div<{ isClicked: boolean }>`
  background: none;
  font-size: 18px;

  margin-right: 2rem;
  color: ${(props) => (props.isClicked ? props.theme.text1 : props.theme.text4)};

  &:hover {
    cursor: pointer;
  }
`
