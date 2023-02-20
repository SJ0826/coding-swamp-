import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function Page({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: relative;
  width: 70vw;
  height: 100vh;
  margin-left: 15%;
  background-color: ${(props) => props.theme.bgGroundColor1};

  @media ${(props) => props.theme.small} {
    width: 100%;
    margin-left: 0%;
  }
`
