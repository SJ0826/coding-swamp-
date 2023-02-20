import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import styled from 'styled-components'
import { RxDividerVertical } from 'react-icons/rx'
import { changeCurrentStudyType } from 'src/lib/store/studyListSlice'

const StudyTypeFilter = () => {
  const dispatch = useAppDispatch()
  const currentStudytype = useAppSelector(({ studyList }) => studyList.value.currentStudyType)
  const studyTypeArr = ['All', 'study', 'mogakko']
  const onClickStudyType = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(changeCurrentStudyType(e.currentTarget.value))
  }

  return (
    <Container>
      <StudyTypeWrapper>
        <DivisionLine>
          <RxDividerVertical />
        </DivisionLine>
        {studyTypeArr.map((studyType) => (
          <>
            <StudyType
              key={studyType}
              value={studyType}
              active={currentStudytype === studyType}
              onClick={onClickStudyType}
            >
              {studyType}
            </StudyType>
            <DivisionLine>
              <RxDividerVertical />
            </DivisionLine>
          </>
        ))}
      </StudyTypeWrapper>
    </Container>
  )
}

export default StudyTypeFilter

const Container = styled.div`
  height: 5rem;
  padding: 1rem;
`

const StudyTypeWrapper = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text4};
`

const StudyType = styled.button<{ active: boolean }>`
  margin-left: 1.3rem;
  margin-right: 1.3rem;
  font-size: 1.5rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  background: none;
  color: ${(props) => (props.active ? props.theme.text1 : props.theme.text4)};
`
const DivisionLine = styled.span`
  margin-left: 1.3rem;
  margin-right: 1.3rem;
  font-size: 1.5rem;
  background: none;
`
