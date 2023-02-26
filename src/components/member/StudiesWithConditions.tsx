import { StudyWithCondition } from 'src/lib/types/StudyInterface'
import styled from 'styled-components'

import StudyTable from './StudyTable'

interface Props {
  studiesAppliedFor: StudyWithCondition[]
}
const StudiesWithConditions = ({ studiesAppliedFor }: Props) => (
  <Container>
    <TableHeader>
      <TableElement>이름</TableElement>
      <TableElement>스터디 타입</TableElement>
      <TableElement>스터디 상태</TableElement>
      <TableElement>시작일</TableElement>
      <TableElement>종료일</TableElement>
      <TableElement>현재 인원</TableElement>
    </TableHeader>
    {studiesAppliedFor.map((study, index) => (
      <TableContent key={index}>
        <TableElement>{study.title}</TableElement>
        <TableElement>{study.studyType}</TableElement>
        <TableElement>{study.studyStatus}</TableElement>
        <TableElement>{study.startDate}</TableElement>
        <TableElement>{study.endDate}</TableElement>
        <TableElement>
          {study.currentMemberCount} / {study.maxMemberCount}
        </TableElement>
      </TableContent>
    ))}
  </Container>
)

export default StudiesWithConditions

const Container = styled.div``

const TableHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0px 1rem;

  line-height: 44px;
  
  background: #EEEEEE
}
`
const TableElement = styled.div`
  width: 14%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 44px;
`
const TableContent = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0px 1rem;
  border-bottom: 1px solid rgba(209, 209, 209, 0.4);
`
