import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'

import { getMemberInfo } from 'src/lib/store/member/memberSlice'
import { Banner, StudyApplyModal, StudyList, StudyStatusFilter } from 'src/components'
import SearchStudy from 'src/components/mainPage/SearchStudy'
import PageList from 'src/components/mainPage/PageList'
import StudyTypeFilter from 'src/components/mainPage/StudyTypeFilter'

import { useAppDispatch } from 'src/lib/hooks'
import * as S from './styles'
import { DivisionLine } from '../createStudy/styles'

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
        <DivisionLine />
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
