import { useEffect, useState } from 'react'
import { getStudies } from 'src/lib/store/studyListSlice'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import StudyItem from './StudyItem'

const StudyList = () => {
  const dispatch = useAppDispatch()
  const { studyResponses, currentStudyType } = useAppSelector(({ studyList }) => studyList.value)
  const clickedStudyStatus = useAppSelector(({ studyList }) => studyList.value.isClickStatusFilter)
  const [filterdStudies, setFilterdStudies] = useState(studyResponses)

  useEffect(() => {
    dispatch(getStudies(1))
  }, [])

  useEffect(() => {
    switch (currentStudyType) {
      case 'study': {
        const filteredStudyResponse = studyResponses.filter((study) => study.studyType === 'STUDY')

        setFilterdStudies(filteredStudyResponse)
        break
      }
      case 'mogakko': {
        const filteredStudyResponse = studyResponses.filter((study) => study.studyType === 'MOGAKKO')
        setFilterdStudies(filteredStudyResponse)
        break
      }
      default:
        setFilterdStudies(studyResponses)
    }
  }, [studyResponses, currentStudyType])

  useEffect(() => {
    const filteredStudyByStatus = clickedStudyStatus
      ? filterdStudies.filter((study) => study.studyStatus === 'ONGOING')
      : filterdStudies

    setFilterdStudies(filteredStudyByStatus)
  }, [clickedStudyStatus])

  return (
    <Container>
      {filterdStudies.map((study) => (
        <StudyItem
          key={study.studyId}
          title={study.title}
          studyType={study.studyType}
          thumbnail={study.thumbnail}
          startDate={study.startDate}
          endDate={study.endDate}
          tags={study.tags}
          studyId={study.studyId}
          currentMemberCount={study.currentMemberCount}
          maxMemberCount={study.maxMemberCount}
          studyStatus={study.studyStatus}
        />
      ))}
    </Container>
  )
}

export default StudyList

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-content: center;

  @media ${(props) => props.theme.medium} {
    margin-top: 3rem;
  }

  @media ${(props) => props.theme.small} {
    margin-top: 2rem;
  }
`
