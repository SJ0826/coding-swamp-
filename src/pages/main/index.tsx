import { useEffect } from 'react'
import Header from 'src/components/Header'
import { inquiryMemberAPI } from 'src/lib/api/Member/MemberAPI'

const main = () => {
  const test = async () => {
    const a = await inquiryMemberAPI.inquiryMember()
    console.log(a)
    return a
  }
  useEffect(() => {
    test()
  }, [])
  return <Header />
}
export default main
