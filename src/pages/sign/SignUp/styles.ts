import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 30px;
`

export const Logo = styled.div``

export const ContentWrapper = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const Title = styled.h1`
  text-align: center;
`
