import { useEffect } from 'react'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { getStudies } from 'src/lib/store/studyListSlice'
import StudyItem from './StudyItem'

const StudyList = () => {
  const dispatch = useAppDispatch()
  const { studyResponses } = useAppSelector(({ studyList }) => studyList.value)

  useEffect(() => {
    dispatch(getStudies(1))
    console.log(studyResponses)
  }, [])

  return (
    <>
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
    </>
  )
}

export default StudyList
