import { useEffect } from 'react'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { getStudies } from 'src/lib/store/studyListSlice'
import styled from 'styled-components'
import StudyItem from './StudyItem'

const StudyList = () => {
  const dispatch = useAppDispatch()
  const { studyResponses } = useAppSelector(({ studyList }) => studyList.value)

  useEffect(() => {
    dispatch(getStudies(1))
  }, [])

  return (
    <Container>
      {studyResponses.map((study) => (
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
  margin: 1.5rem;
  justify-content: center;
  align-content: center;

  @media (max-width: 430px) {
    margin-top: 1rem;
  }
`
