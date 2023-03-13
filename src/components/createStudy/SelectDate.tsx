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
      <SubTitle>스터디 기간</SubTitle>
      <DateWrapper>
        <DateText>시작 날짜</DateText>
        <StartDate type="date" onChange={onChangeStartDate} required />
      </DateWrapper>
      <DateWrapper>
        <DateText>마지막 날짜</DateText>
        <EndDate type="date" onChange={onChangeEndDate} required />
      </DateWrapper>
    </Container>
  )
}

export default SelectDate

const Container = styled.div`
  display: flex;
  align-items: center;

  height: 3rem;
  padding-left: 1rem;

  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    flex-direction: column;
    align-items: start;
    height: 7rem;
  }
`

const SubTitle = styled.div`
  width: 11.5rem;
  @media ${(props) => props.theme.small} {
  }
`

const DateWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;

  @media ${(props) => props.theme.small} {
    margin-top: 1rem;
  }
`
const DateText = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.small} {
    width: 5rem;
  }
`
export const StartDate = styled.input`
  padding-left: 1rem;
  margin-right: 1rem;

  font-size: 18px;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    width: 10rem;
  }
`

export const EndDate = styled.input`
  padding-left: 1rem;
  margin-right: 1rem;

  font-size: 18px;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    width: 10rem;
  }
`
