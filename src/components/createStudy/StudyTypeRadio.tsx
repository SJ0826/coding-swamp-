import styled from 'styled-components'

interface Props {
  labelText: string
}
const StudyTypeRadio = ({ labelText }: Props) => {
  const a = 'test'
  return (
    <>
      <label>
        <SelctStudy type="radio" />
        <span>{labelText}</span>
      </label>
    </>
  )
}

export default StudyTypeRadio

const SelctStudy = styled.input`
  margin-left: 2rem;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  transition: border 0.5s ease-in-out;

  &:checked {
    border: 0.4em solid ${(props) => props.theme.orange2};
  }

  &:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
    cursor: pointer;
  }

  @media ${(props) => props.theme.small} {
    width: 1.2em;
    margin-left: 0.5rem;
  }
`
