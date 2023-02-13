import styled from 'styled-components'

const CreateStudyTag = () => {
  const test = ['모각코', '스터디', '모여요']
  return (
    <Container>
      <Wrapper>
        <SubTitle>스터디 태그</SubTitle>
        <TagInput />
      </Wrapper>
      <TagWrapper>
        {test.map((tag, index) => (
          <>
            <Tag key={index}>
              {tag} <RemoveTag>x</RemoveTag>
            </Tag>
          </>
        ))}
      </TagWrapper>
    </Container>
  )
}

export default CreateStudyTag

const Container = styled.div`
  margin-top: 2rem;

  color: ${(props) => props.theme.text1};
`
const Wrapper = styled.div``

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const TagInput = styled.input`
  width: 18rem;
  margin-left: 1rem;
  font-size: 24px;

  background-color: ${(props) => props.theme.bgGroundColor3};
  border: 1px solid ${(props) => props.theme.border4};
  border-radius: 15px;
`
const TagWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;
`
const Tag = styled.div`
  width: 6rem;
  height: 2rem;
  margin-right: 1rem;

  font-size: 20px;
  font-weight: bold;
  text-align: center;

  border-radius: 20px;
  background: ${(props) => props.theme.green6};
`

const RemoveTag = styled.span`
  &:hover {
    cursor: pointer;
  }
`
