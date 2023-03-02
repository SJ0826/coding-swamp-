import { AiFillCrown } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import styled from 'styled-components'
import { useState } from 'react'
import { changeTargetedMember } from 'src/lib/store/member/memberSlice'
import { Container, Description, Icon, Title } from './StudyDescription'
import { MemberModal } from '../member'

const StudyMember = () => {
  const dispatch = useAppDispatch()
  const { studyInfo } = useAppSelector(({ studyItem }) => studyItem)
  const participants = studyInfo.participants.filter((participant) => participant.username !== studyInfo.owner.username)
  const [isOpenMemberModal, setIsOpenMemberModal] = useState<boolean>(false)

  const onClickMember = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeTargetedMember(e.currentTarget.id))
    setIsOpenMemberModal(true)
  }
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
          {participants.map((member) => (
            <Member key={member.memberId} id={member.memberId?.toString()} onClick={onClickMember}>
              <MemberImage src={member.imageUrl} />
              <MemberName>{member.username}</MemberName>
            </Member>
          ))}
          <MemberModal isOpenMemberModal={isOpenMemberModal} setIsOpenMemberModal={setIsOpenMemberModal} />
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

  :hover {
    cursor: pointer;
  }
`

export const MemberImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 50%;
`

const MemberName = styled.div`
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.7rem;
  border-radius: 20px;
  background: ${(props) => props.theme.bgGroundColor4};
`
