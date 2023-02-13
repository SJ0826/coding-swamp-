import theme from 'src/style/theme'
import styled from 'styled-components'

const SelectMaxMemberCount = () => {
  const test = 'test'
  return (
    <Container>
      <SubTitle>스터디 최대 인원</SubTitle>
      <CountInput />명
    </Container>
  )
}

export default SelectMaxMemberCount

const Container = styled.div`
  display: flex;
  height: 3rem;
  padding-left: 1rem;

  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};
`

const SubTitle = styled.div`
  width: 10.5rem;
`

const CountInput = styled.input`
  width: 3rem;
  height: 2rem;
  margin-left: 1rem;

  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.text1};
  background-color: ${(props) => props.theme.bgGroundColor3};

  border: 1px solid ${(props) => props.theme.border4};
  border-radius: 15px;
  :active {
    border: 1px solid ${(props) => props.theme.border2};
  }
`
