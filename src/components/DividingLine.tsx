import styled from 'styled-components'

const DividingLine = () => <Line />

export default DividingLine

const Line = styled.div`
  height: 0.1rem;
  margin: 2rem 0rem;
  background: ${(props) => props.theme.border4};
`
