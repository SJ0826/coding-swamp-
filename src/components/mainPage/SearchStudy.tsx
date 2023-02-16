import styled from 'styled-components'

const SearchStudy = () => {
  const test = 'test'
  return (
    <Container>
      <Description>🔎 스터디를 검색해보세요! </Description>
      <InputWrapper>
        <SearchStudyInput />
      </InputWrapper>
    </Container>
  )
}

export default SearchStudy

const Container = styled.div``

const Description = styled.h2`
  font-size: 1.5625rem;
  line-height: 2.25rem;

  @media ${(props) => props.theme.small} {
    font-size: 1.5rem;
  }
`
const InputWrapper = styled.div`
  width: 100%;
  height: 8rem;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;

  border-radius: 20px;
  background: ${(props) => props.theme.bgGroundColor2};
`
const SearchStudyInput = styled.input`
  width: 30rem;
  height: 4rem;
  padding-left: 1rem;

  font-size: 2rem;
  border-radius: 20px;

  @media ${(props) => props.theme.small} {
    width: 20rem;
  }
`
