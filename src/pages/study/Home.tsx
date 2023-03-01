import { useEffect } from 'react'
import { Header } from 'src/components/Header'
import { DefautStudyLayout, StudyDescription, StudyMember } from 'src/components/study'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { changeTargetedStudyNav, getStudyDetailInfo } from 'src/lib/store/studyItemSlice'

const Home = () => {
  const dispatch = useAppDispatch()
  const { targetstudyId } = useAppSelector(({ studyItem }) => studyItem)

  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
    dispatch(getStudyDetailInfo(targetstudyId))
    dispatch(changeTargetedStudyNav('home'))
  }, [])
  return (
    <>
      <Header />
      <DefautStudyLayout>
        <StudyDescription />
        <StudyMember />
      </DefautStudyLayout>
    </>
  )
}

export default Home
