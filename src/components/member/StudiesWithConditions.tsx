import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/lib/hooks'
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
    const target = e.currentTarget
    if (status === 'participation') {
      await dispatch(getStudyDetailInfo(target.value))
      navigate('/study/home')
    }
  }
  return (
    <Container>
      <TableHeader>
        <TableElementDetail>이름</TableElementDetail>
        <TableElementDetail>스터디 타입</TableElementDetail>
        <TableElementDetail>스터디 상태</TableElementDetail>
        <TableElementDetail>시작일</TableElementDetail>
        <TableElementDetail>종료일</TableElementDetail>
        <TableElementDetail>현재 인원</TableElementDetail>
      </TableHeader>
      <TableContent>
        {studiesAppliedFor.map((study, index) => (
          <TableElement key={index} value={study.studyId} status={status} onClick={onClickStudy}>
            <TableElementDetail>{study.title}</TableElementDetail>
            <TableElementDetail>{study.studyType}</TableElementDetail>
            <TableElementDetail>{study.studyStatus}</TableElementDetail>
            <TableElementDetail>{study.startDate}</TableElementDetail>
            <TableElementDetail>{study.endDate}</TableElementDetail>
            <TableElementDetail>
              {study.currentMemberCount} / {study.maxMemberCount}
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

const TableHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0px 1rem;
  text-align: center;
  background: #EEEEEE
}
`
const TableContent = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(209, 209, 209, 0.4);
`
const TableElement = styled.li<{ status: 'application' | 'participation' }>`
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
`

const TableElementDetail = styled.div`
  width: 14%;
  line-height: 44px;
`
