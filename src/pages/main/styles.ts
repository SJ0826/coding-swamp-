import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  margin: 4rem auto 0rem auto;
  @media ${(props) => props.theme.large} {
    width: calc(100% - 10rem);
  }

  @media ${(props) => props.theme.medium} {
    margin-left: 1.6rem;
    width: calc(100% - 1rem);
  }
`

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 5rem;
  padding: 1rem;

  @media (max-width: 1526px) {
    flex-direction: column;
  }

  @media ${(props) => props.theme.small} {
    height: 3rem;
  }
`
