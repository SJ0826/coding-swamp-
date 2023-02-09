import styled from 'styled-components'

interface Props {
  height: string
  color: string
  bgColor: string
  hoverColor: string
  hoverBGColor: string
  text: string
}

const DefaultButton = ({ height, color, bgColor, text, hoverColor, hoverBGColor }: Props) => (
  <Button height={height} color={color} bgColor={bgColor} hoverColor={hoverColor} hoverBGColor={hoverBGColor}>
    {text}
  </Button>
)

export default DefaultButton

export const Button = styled.button<{
  height: string
  bgColor: string
  color: string
  hoverColor: string
  hoverBGColor: string
}>`
  width: 10rem;
  height: ${(props) => props.height};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0px 1.2rem;
  margin-bottom: 0.5rem;

  font-weight: bold;
  font-size: 1rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};

  transition: box-shadow 300ms ease-in-out, 100ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px ${(props) => props.hoverBGColor} inset;
    color: ${(props) => props.hoverColor};
  }
`
