import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { getMemberInfo } from 'src/lib/store/member/memberSlice'
import SearchStudy from 'src/components/mainPage/SearchStudy'
import PageList from 'src/components/mainPage/PageList'
import StudyTypeFilter from 'src/components/mainPage/StudyTypeFilter'
import { useAppDispatch } from 'src/lib/hooks'
import { Banner, DividingLine, StudyApplyModal, StudyList, StudyStatusFilter } from 'src/components/mainPage'
import * as S from './styles'

const main = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMemberInfo())
    refreshTokenAPI.getRefreshToken()
  }, [])

  return (
    <>
      <Header />
      <S.Content>
        <Banner />
        <DividingLine />
        <section>
          <SearchStudy />
        </section>
        <section>
          <S.FilterWrapper>
            <StudyTypeFilter />
            <StudyStatusFilter />
          </S.FilterWrapper>

          <StudyList />
          <PageList />
        </section>
      </S.Content>
      <StudyApplyModal />
    </>
  )
}
export default main
