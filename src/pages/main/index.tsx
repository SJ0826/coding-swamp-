import { useEffect } from 'react'
import Header from 'src/components/Header'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { getMemberInfo } from 'src/lib/store/memberSlice'

const main = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMemberInfo())
  }, [])
  return <Header />
}
export default main
