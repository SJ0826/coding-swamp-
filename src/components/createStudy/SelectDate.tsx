import { ChangeEvent } from 'react'
import { useAppDispatch } from 'src/lib/hooks'

import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import styled from 'styled-components'

const SelectDate = () => {
  const dispatch = useAppDispatch()
  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStudyForm({ key: 'startDate', value: e.target.value }))
  }

  const onChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStudyForm({ key: 'endDate', value: e.target.value }))
  }
  return (
    <Container>
      <DateWrapper>
        <DateText>시작 날짜</DateText>
        <Date type="date" onChange={onChangeStartDate} required />
      </DateWrapper>
      <DateWrapper>
        <DateText>마지막 날짜</DateText>
        <Date type="date" onChange={onChangeEndDate} required />
      </DateWrapper>
    </Container>
  )
}

export default SelectDate

const Container = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.small} {
    flex-direction: column;
    margin-top: 0.3rem;
  }
`

const DateWrapper = styled.div`
  display: flex;

  @media ${(props) => props.theme.small} {
    margin: 0.3rem 0rem;
  }
`
const DateText = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.small} {
    width: 5rem;
  }
`
export const Date = styled.input`
  margin: 0rem 1rem;

  font-size: 18px;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    margin: 0rem 0.2rem;
    font-size: 0.8rem;
  }
`
