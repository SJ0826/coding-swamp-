import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import styled from 'styled-components'

const StudyTypeSelector = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <StudyType id="study" onClick={() => dispatch(changeStudyForm({ key: 'studyType', value: 'STUDY' }))}>
        스터디
      </StudyType>
      <StudyType onClick={() => dispatch(changeStudyForm({ key: 'studyType', value: 'MOGAKKO' }))}>모각코</StudyType>
    </>
  )
}

export default StudyTypeSelector

const StudyType = styled.div`
  background: none;
  font-size: 18px;

  margin-right: 2rem;
  color: ${(props) => props.theme.text4};

  &:hover {
    cursor: pointer;
  }
`
