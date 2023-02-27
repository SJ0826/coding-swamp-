import styled from 'styled-components'
import theme from 'src/style/theme'

import Color from './Color'

const SelectStudyColor = () => {
  const colors = [
    theme.bgGroundColor3,
    theme.blue,
    theme.green6,
    theme.green3,
    theme.yellow,
    theme.orange1,
    theme.orange2,
  ]
  return (
    <Container>
      <SubTitle>스터디 대표 색상</SubTitle>
      <Palette>
        {colors.map((color) => (
          <Color key={color} colorCode={color} />
        ))}
      </Palette>
    </Container>
  )
}

export default SelectStudyColor

const Container = styled.div`
  display: flex;
  height: 3rem;
  padding-left: 1rem;

  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    flex-direction: column;
    height: 4.5rem;
  }
`

const SubTitle = styled.div`
  width: 9.8rem;
`

const Palette = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  display: flex;

  @media ${(props) => props.theme.small} {
    margin-top: 0.8rem;

    justify-content: space-evenly;
  }
`
