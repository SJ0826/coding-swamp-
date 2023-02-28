import { AiFillCrown } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { useAppSelector } from 'src/lib/hooks'
import styled from 'styled-components'
import { Container, Description, Icon, Title } from './StudyDescription'

const StudyMember = () => {
  const { studyInfo } = useAppSelector(({ studyItem }) => studyItem)
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
          <OwnerIcon>
            <AiFillCrown />
          </OwnerIcon>
          <Member>
            <MemberImage src={studyInfo.owner.imageUrl} />
            <MemberName>{studyInfo.owner.username}</MemberName>
          </Member>
          {studyInfo.participants.map((member) => (
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
  flex-wrap: wrap;
`
const OwnerIcon = styled.div`
  position: absolute;
  padding-left: 1.2rem;

  font-size: 1.6rem;
  color: gold;
  z-index: 20;
`

const Member = styled.div`
  width: 7rem;
  margin: 1.2rem;
`

const MemberImage = styled.img`
  width: 5rem;
  margin-left: 1rem;
  border-radius: 50%;
`

const MemberName = styled.div`
  text-align: center;
  text-overflow: ellipsis;
  line-height: 1.7rem;
  border-radius: 20px;
  background: ${(props) => props.theme.bgGroundColor4};
`
