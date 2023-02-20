import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import styled from 'styled-components'
import { BsCheckLg } from 'react-icons/bs'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { changeStatusFilter } from 'src/lib/store/studyListSlice'

const StudyStatusFilter = () => {
  const dispatch = useAppDispatch()
  const isClickCheckBox = useAppSelector(({ studyList }) => studyList.value.isClickStatusFilter)
  const onClickCheckBox = () => {
    dispatch(changeStatusFilter())
  }
  return (
    <Container onClick={onClickCheckBox}>
      <CheckBox>{isClickCheckBox === true ? <BsCheckLg /> : ''}</CheckBox>
      <Text>모집중인 스터디만 보기</Text>
    </Container>
  )
}
export default StudyStatusFilter

const Container = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.small} {
    margin-top: 0.4rem;
    justify-content: right;
  }
`

const CheckBox = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1rem;
  padding: 0.1rem 0.2rem 0.3rem 0.2rem;

  text-align: center;
  font-size: 1.3rem;
  color: #6096b4;

  border: 1px solid ${(props) => props.theme.border1};
  border-radius: 0.5rem;

  @media ${(props) => props.theme.small} {
    width: 0.9rem;
    height: 0.9rem;

    margin-right: 0.6rem;
    padding: 0.02rem; 0.05rem 0.03rem 0.05rem;  
    
    font-size: 0.65rem;
  }
`

const Text = styled.span`
  font-size: 1.5rem;

  @media ${(props) => props.theme.small} {
    font-size: 0.8rem;
  }
`
