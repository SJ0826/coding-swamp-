import axios from 'axios'
import qs from 'qs'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Callback = () => {
  const authUri = '/api/auth/login/github'
  const navigate = useNavigate()

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      })

      try {
        const response = await axios.post(
          `${authUri}?code=${code}`,
          {},
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
        )

        const data = response
        console.log(data)
        navigate('/')
      } catch (error) {
        alert('요청하신 작업을 수행할 수 없습니다. 관리자에게 문의해주세요.')
      }
    }
    getToken()
  }, [authUri])

  return (
    <Container>
      <h2>🐱‍👤깃허브 아이디로 로그인됩니다🐱‍👤</h2>
    </Container>
  )
}

export default Callback

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
