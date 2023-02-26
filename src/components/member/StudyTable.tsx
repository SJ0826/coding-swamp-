import styled from 'styled-components'

interface Props {
  studyId: number
  title: string
  studyType: string
  studyStatus: string
  startDate: string
  endDate: string
}

const StudyTable = ({ studyId, title, studyType, studyStatus, startDate, endDate }: Props) => (
  <Container>
    <TableElement>{title}</TableElement>
    <TableElement>{studyType}</TableElement>
    <TableElement>{studyStatus}</TableElement>
    <TableElement>{startDate}</TableElement>
    <TableElement>{endDate}</TableElement>
  </Container>
)

export default StudyTable

const Container = styled.ul`
  display: flex;
  font-size: 1.3rem;
  list-style: none;
`

const TableElement = styled.li`
  margin: 0rem 0rem 0.5rem 0rem;
  width: 10rem;
`
