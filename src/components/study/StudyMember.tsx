import { BsPerson } from 'react-icons/bs'
import { useAppSelector } from 'src/lib/hooks'
import styled from 'styled-components'
import { Container, Description, Icon, Title } from './StudyDescription'

const StudyMember = () => {
  const { participants } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  return (
    <Container>
      <Title>
        <Icon>
          <BsPerson />
        </Icon>
        스터디 멤버
      </Title>
      <Description>
        <MemberWrapper>
          {participants.map((member) => (
            <Member key={member.memberId}>
              <MemberImage src={member.imageUrl} />
              <MemberName>{member.username}</MemberName>
            </Member>
          ))}
        </MemberWrapper>
      </Description>
    </Container>
  )
}

export default StudyMember

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1.2rem;
`

const Member = styled.div`
  width: 5rem;
`

const MemberImage = styled.img`
  width: 5rem;
  margin-bottom: 0.7rem;
  border-radius: 50%;
`

const MemberName = styled.div`
  text-align: center;
  border-radius: 20px;
  background: ${(props) => props.theme.bgGroundColor4};
`
