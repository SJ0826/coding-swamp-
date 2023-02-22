import { useEffect } from 'react'
import { getMemberInfo } from 'src/lib/store/member/memberSlice'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppDispatch } from 'src/lib/hooks'
import { Header } from 'src/components/Header'
import { MemberProfile } from 'src/components/member'

const MemberInfo = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMemberInfo())
    refreshTokenAPI.getRefreshToken()
  }, [])
  return (
    <>
      <Header />
      <MemberProfile />
    </>
  )
}

export default MemberInfo
