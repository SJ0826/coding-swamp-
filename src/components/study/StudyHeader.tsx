import { useEffect } from 'react'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppSelector } from 'src/lib/hooks'
import styled from 'styled-components'

const StudyHeader = () => {
  const { title } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
  }, [])
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default StudyHeader

const Container = styled.div`
  margin-top: 5.625rem;
  font-size: 2rem;
  line-height: 4rem;
  border-bottom: 1px solid ${(props) => props.theme.border4};
`
const Title = styled.h3`
  padding-left: 2rem;
`