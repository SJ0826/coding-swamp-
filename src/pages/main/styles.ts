import styled from 'styled-components'

export const Content = styled.div`
  margin: 4rem auto 0rem auto;
  @media ${(props) => props.theme.large} {
    width: calc(100% - 20rem);
  }

  @media ${(props) => props.theme.medium} {
    width: calc(100% - 8rem);
  }

  @media ${(props) => props.theme.small} {
    width: calc(100% - 3rem);
  }
`
