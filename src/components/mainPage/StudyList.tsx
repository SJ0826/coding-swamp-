import { useEffect, useState } from 'react'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { getStudies } from 'src/lib/store/studyListSlice'
import styled from 'styled-components'
import StudyItem from './StudyItem'

const StudyList = () => {
  const dispatch = useAppDispatch()
  const { studyResponses } = useAppSelector(({ studyList }) => studyList.value)
  const currentStudyType = useAppSelector(({ studyList }) => studyList.value.currentStudyType)
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
        />
      ))}
    </Container>
  )
}

export default StudyList

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: left;
  align-content: center;

  @media (max-width: 430px) {
    margin-top: 1rem;
  }
`
