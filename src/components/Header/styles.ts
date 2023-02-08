import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  padding: 1.5rem 10% 1.5rem 10%;
`

export const Logo = styled.div``

export const User = styled.div<{ BGImage: string }>`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  background-size: cover;
  background-image: url('${(props) => props.BGImage}');
  cursor: pointer;
`
