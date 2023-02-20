import styled from 'styled-components'

export const Container = styled.div``

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

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 5rem;
  padding: 1rem;
  @media ${(props) => props.theme.small} {
    flex-direction: column;
    height: 3rem;
  }
`