import { memo } from 'react'
import styled from 'styled-components'

interface Props {
  signState: string
  width: string
  disabled: boolean
}
const SignButton = ({ signState, width, disabled }: Props) => (
  <SignButtonComp width={width} disabled={disabled}>
    {signState}
  </SignButtonComp>
)

export default memo(SignButton)

export const SignButtonComp = styled.button<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 40px;
  padding: 4px;
  margin-top: 8px;

  font-size: 18px;
  border: none;
  border-radius: 20px;

  color: white;
  background-color: #61876e;

  cursor: pointer;
  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px #a6bb8d inset;
  }
`
