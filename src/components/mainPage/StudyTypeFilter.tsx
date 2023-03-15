import styled from 'styled-components'
import { RxDividerVertical } from 'react-icons/rx'
import { changeCurrentStudyType } from 'src/lib/store/studyListSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import settingStudyTypeName from 'src/lib/util/settingStudyTypeName'

const StudyTypeFilter = () => {
  const dispatch = useAppDispatch()
  const currentStudytype = useAppSelector(({ studyList }) => studyList.value.currentStudyType)
  const studyTypeArr = ['All', 'STUDY', 'MOGAKKO']

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
          <span key={studyType} style={{ display: 'flex' }}>
            <StudyType
              key={studyType}
              value={studyType}
              active={currentStudytype === studyType}
              onClick={onClickStudyType}
            >
              {settingStudyTypeName(studyType)}
            </StudyType>
            <DivisionLine key={`divider`}>
              <RxDividerVertical key={`divider${studyType}`} />
            </DivisionLine>
          </span>
        ))}
      </StudyTypeWrapper>
    </Container>
  )
}

export default StudyTypeFilter

const Container = styled.div`
  margin-top: 0.6rem;
`

const StudyTypeWrapper = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text4};

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
  }
`

const StudyType = styled.button<{ active: boolean }>`
  margin: 0rem 1.3rem;
  font-size: 1.5rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  background: none;
  color: ${(props) => (props.active ? props.theme.text1 : props.theme.text4)};

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
    margin: 0rem 0.4rem;
  }
`
const DivisionLine = styled.span`
  margin-left: 1.3rem;
  margin-right: 1.3rem;
  font-size: 1.5rem;
  background: none;

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
    margin: 0rem 0.4rem;
  }
`
