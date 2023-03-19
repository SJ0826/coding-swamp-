import styled from 'styled-components'
import { studyColor } from 'src/style/theme'
import Color from './Color'

const SelectStudyColor = () => (
  <Palette>
    {studyColor.map((color) => (
      <Color key={color} colorCode={color} />
    ))}
  </Palette>
)

export default SelectStudyColor

const Palette = styled.div`
  display: flex;
  justify-content: space-between;

  width: 20rem;
  margin-top: 1rem;
  @media ${(props) => props.theme.small} {
    margin-top: 0.8rem;
    justify-content: space-between;
  }
`
