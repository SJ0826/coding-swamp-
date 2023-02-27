import { useEffect } from 'react'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppSelector } from 'src/lib/hooks'
import styled from 'styled-components'

const StudyHeader = () => {
  const { title } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  console.log(title)
  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
  })
  return <Container>{title}</Container>
}

export default StudyHeader

const Container = styled.div`
  padding: 1rem 4rem;
`
