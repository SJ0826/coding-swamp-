import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'

import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import styled from 'styled-components'

const SelectMaxMemberCount = () => {
  const maxnumber = useAppSelector(({ studyForm }) => studyForm.value.maxMemberCount)
  const dispatch = useAppDispatch()

  const onChangeMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStudyForm({ key: 'maxMemberCount', value: e.target.value }))
  }

  return (
    <Container>
      <CountInput value={maxnumber} onChange={onChangeMaxNumber} />명
    </Container>
  )
}

export default SelectMaxMemberCount

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;

  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};
`

const CountInput = styled.input`
  width: 3rem;
  height: 2rem;

  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};
  background-color: ${(props) => props.theme.bgGroundColor1};
  outline: none;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  :active {
    border: 1px solid ${(props) => props.theme.border2};
  }
`
