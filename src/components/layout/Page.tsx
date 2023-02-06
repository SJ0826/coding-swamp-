import styled from 'styled-components'
import theme from '../../style/theme'

interface Props {
  children: React.ReactNode
}

export default function Page({ children }: Props) {
  return <Container bgColor={theme.bgGroundColor}>{children}</Container>
}

const Container = styled.div<{ bgColor: string }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
`
