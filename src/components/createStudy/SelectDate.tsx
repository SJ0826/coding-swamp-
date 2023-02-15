import { ChangeEvent } from 'react'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
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
        <StartText>시작 날짜</StartText>
        <StartDate type="date" onChange={onChangeStartDate} required />
      </DateWrapper>
      <DateWrapper>
        <span>마지막 날짜</span>
        <EndDate type="date" onChange={onChangeEndDate} required />
      </DateWrapper>
    </Container>
  )
}

export default SelectDate

const Container = styled.div`
  display: flex;

  height: 3rem;
  padding-left: 1rem;

  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    flex-direction: column;
  }
`

const SubTitle = styled.div`
  width: 11.5rem;
`

const DateWrapper = styled.div`
  height: 3rem;
  display: flex;
`
const StartText = styled.div`
  @media ${(props) => props.theme.small} {
    width: 5rem;
  }
`
const StartDate = styled.input`
  padding-left: 1rem;
  margin-right: 1rem;

  font-size: 18px;
  color: ${(props) => props.theme.text1};

  @media ${(props) => props.theme.small} {
    width: 5rem;
  }
`

const EndDate = styled.input`
  padding-left: 1rem;
  margin-bottom: 1rem;
  font-size: 18px;

  color: ${(props) => props.theme.text1};
`