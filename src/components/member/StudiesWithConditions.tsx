import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/lib/hooks'
import { cancelStudyApplication, changeTargetStudy } from 'src/lib/store/member/memberSlice'
import { getStudyDetailInfo } from 'src/lib/store/studyItemSlice'
import { StudyWithCondition } from 'src/lib/types/StudyInterface'
import styled from 'styled-components'

interface Props {
  studiesAppliedFor: StudyWithCondition[]
  status: 'application' | 'participation'
}
const StudiesWithConditions = ({ studiesAppliedFor, status }: Props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClickStudy = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (status === 'participation') {
      dispatch(changeTargetStudy(e.currentTarget.value))
      await dispatch(getStudyDetailInfo(e.currentTarget.value))
      navigate('/study/home')
    }
  }

  const onClickStudyConditionButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const targetId = Number(e.currentTarget.id)
    try {
      switch (status) {
        case 'application':
          dispatch(changeTargetStudy(targetId))
          dispatch(cancelStudyApplication(targetId))
          break
        case 'participation':
          console.log('participation')
          break
        default:
          break
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      alert('요청하신 작업을 수행할 수 없습니다. 관리자에게 문의해주세요.')
    }
  }
  return (
    <Container>
      <TableHeader>
        <TableElementDetail>이름</TableElementDetail>
        <TableElementDetail>스터디 타입</TableElementDetail>

        <TableElementDetail>시작일</TableElementDetail>
        <TableElementDetail>종료일</TableElementDetail>
        <TableElementDetail>현재 인원</TableElementDetail>
        <TableElementDetail></TableElementDetail>
      </TableHeader>
      <TableContent>
        {studiesAppliedFor.map((study, index) => (
          <TableElement key={index} value={study.studyId} status={status} onClick={onClickStudy}>
            <TableElementDetail>{study.title}</TableElementDetail>
            <TableElementDetail>{study.studyType}</TableElementDetail>
            <TableElementDetail>{study.startDate}</TableElementDetail>
            <TableElementDetail>{study.endDate}</TableElementDetail>
            <TableElementDetail>
              {study.currentMemberCount} / {study.maxMemberCount}
            </TableElementDetail>
            <TableElementDetail>
              <StudyConditionButton id={study.studyId.toString()} onClick={onClickStudyConditionButton}>
                {status === 'application' ? '신청 취소' : '탈퇴'}
              </StudyConditionButton>
            </TableElementDetail>
          </TableElement>
        ))}
      </TableContent>
    </Container>
  )
}

export default StudiesWithConditions

const Container = styled.div`
  margin-bottom: 4rem;
`

export const TableHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0px 1rem;
  text-align: center;
  background: #eeeeee;
  @media ${(props) => props.theme.small} {
    display: none;
  }
`
export const TableContent = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(209, 209, 209, 0.4);
`
export const TableElement = styled.li<{ status: 'application' | 'participation' }>`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0px 1rem;
  border-bottom: 1px solid rgba(209, 209, 209, 0.4);
  text-align: center;
  :hover {
    background: #fffbf5;
    cursor: ${(props) => (props.status === 'participation' ? 'pointer' : 'default')};
  }

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
    padding: 0px 0.5rem;
  }
`

export const TableElementDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;
  padding: 0.5rem 0rem;
`

const StudyConditionButton = styled.button`
  width: 4rem;
  line-height: 1.5rem;
  border-radius: 3px;

  :hover {
    background: ${(props) => props.theme.warning};
    color: ${(props) => props.theme.buttonText};
  }
`
