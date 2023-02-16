import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { getMemberInfo } from 'src/lib/store/member/memberSlice'
import { Banner } from 'src/components'
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
      </S.Content>
    </>
  )
}
export default main
