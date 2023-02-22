import { useEffect } from 'react'
import { Header } from 'src/components/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppDispatch } from 'src/lib/hooks'

import { getMemberInfo } from 'src/lib/store/member/memberSlice'

const main = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMemberInfo())
    refreshTokenAPI.getRefreshToken()
  }, [])
  return <Header />
}
export default main
