import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose, AiOutlineWarning } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { getStudyDetailInfo } from 'src/lib/store/studyItemSlice'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import isStudyOwner from 'src/lib/hooks/isStudyOwner'
import { Container } from '../mainPage/StudyApplyModal/style'
import { Icon } from '../study/StudyDescription'

interface Props {
  isOpenMemberModal: boolean
  setIsOpenMemberModal: Dispatch<SetStateAction<boolean>>
}
const MemberModal = ({ isOpenMemberModal, setIsOpenMemberModal }: Props) => {
  const dispatch = useAppDispatch()
  const { participants, studyId } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  const { targetMember } = useAppSelector(({ member }) => member.value)
  const [isClickedKickOutButton, setIsClickedKickOutButton] = useState<boolean>(false)

  const currentMember = participants.filter((participant) => participant.memberId === Number(targetMember))[0]

  const onClickKickoutButton = async () => {
    setIsClickedKickOutButton(false)
    setIsOpenMemberModal(false)
    await studyAPI.patchKickoutMember({ studyId, memberId: Number(targetMember) })
    await dispatch(getStudyDetailInfo(studyId))
  }

  return (
    currentMember && (
      <Container isOpen={isOpenMemberModal}>
        <ModalWrapper>
          <CloseButton onClick={() => setIsOpenMemberModal(false)}>
            <AiOutlineClose />
          </CloseButton>
          <Content>
            <MemberImage src={currentMember.imageUrl} />
            <MemberInfo>
              <h2>{currentMember.username}</h2>
              <div>참가일: {currentMember.participationDate}</div>
              <KickOutButton id="kickout" isVisibility={isStudyOwner()} onClick={() => setIsClickedKickOutButton(true)}>
                회원 강제 탈퇴
              </KickOutButton>
            </MemberInfo>
          </Content>
          <WarningMessage isVisibility={isClickedKickOutButton}>
            <Icon>
              <AiOutlineWarning />
            </Icon>
            정말 탈퇴 처리하시겠습니까?
            <Decision onClick={onClickKickoutButton}>네</Decision>
            <Decision onClick={() => setIsClickedKickOutButton(false)}>아니오</Decision>
          </WarningMessage>
        </ModalWrapper>
      </Container>
    )
  )
}

export default MemberModal

export const ModalWrapper = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem;
  background: ${(props) => props.theme.bgGroundColor1};
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;

  @media ${(props) => props.theme.small} {
    width: auto;
    height: 100%;
  }
`

export const CloseButton = styled.div`
  text-align: right;
  color: ${(props) => props.theme.text4};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.text1};
  }
`
const Content = styled.div`
  display: flex;
`

const MemberImage = styled.img`
  width: 30%;
  border-right: 1px solid ${(props) => props.theme.border4};
`

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.7rem 1rem 0.1rem 1rem;
`
const KickOutButton = styled.button<{ isVisibility: boolean }>`
  width: 6.6rem;
  font-size: 1rem;
  background: none;
  visibility: ${(props) => (props.isVisibility ? 'visible' : 'hidden')};
  :hover {
    color: ${(props) => props.theme.warning};
  }
`
export const WarningMessage = styled.div<{ isVisibility: boolean }>`
  display: flex;
  margin-top: 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme.warning};
  visibility: ${(props) => (props.isVisibility ? 'visible' : 'hidden')};
`
const Decision = styled.button`
  margin-left: 1rem;
  font-size: 1rem;
  background: none;
  transition: none;
  :hover {
    font-weight: bold;
  }
`
