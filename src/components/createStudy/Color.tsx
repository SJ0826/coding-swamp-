import styled from 'styled-components'

interface Props {
  value: string
}
const Color = ({ value }: Props) => {
  const test = 'test'
  return (
    <Container>
      <Label>
        <ColorButton type="checkbox" />
        <ColorView value={value}></ColorView>
      </Label>
    </Container>
  )
}

export default Color

const Container = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
`

const Label = styled.label`
  display: flex;
  height: 1rem;
  align-items: center;
`

const ColorButton = styled.input`
  visibility: hidden;
  width: 0rem;
`

const ColorView = styled.div<{ value: string }>`
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
  background: ${(props) => props.value};

  border-radius: 50%;
  border: 2px solid gray;

  :hover {
    cursor: pointer;
  }

  :active {
    border: 2px solid gray;
  }

  @media ${(props) => props.theme.small} {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0rem;
  }
`
