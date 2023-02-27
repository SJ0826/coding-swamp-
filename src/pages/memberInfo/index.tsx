import { useEffect, useState } from 'react'
import { getMemberInfo, getStudiesAppliedFor } from 'src/lib/store/member/memberSlice'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { Header } from 'src/components/Header'
import { MemberProfile, StudiesWithConditions } from 'src/components/member'
import { DefaultButton, DividingLine } from 'src/components'
import styled from 'styled-components'
import { TbHeartPlus, TbHeart } from 'react-icons/tb'
import { AiOutlineUserDelete } from 'react-icons/ai'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { StudyWithCondition } from 'src/lib/types/StudyInterface'
import theme from 'src/style/theme'
import { memberAPI } from 'src/lib/api/Member/MemberAPI'
import { removeToken } from 'src/lib/util/localStorage'
import { useNavigate } from 'react-router-dom'

const MemberInfo = () => {
  const dispatch = useAppDispatch()
  const studiesAppliedFor = useAppSelector((member) => member.member.value.studiesAppliedFor)
  const [studiesParticipated, setStudiesParticipated] = useState<StudyWithCondition[]>([])
  const [isOpenUserDelete, setIsOpenUserDelete] = useState<boolean>(false)
  const navigate = useNavigate()

  const getstudiesParticipated = async () => {
    const response = await studyAPI.getStuduesParticipated()
    setStudiesParticipated(response.data.studyResponses)
  }

  const onClickUserDeleteButton = async () => {
    setIsOpenUserDelete(false)
    await memberAPI.deleteMember()
    removeToken()
    navigate('/signIn')
  }

  useEffect(() => {
    dispatch(getMemberInfo())
    dispatch(getStudiesAppliedFor())
    refreshTokenAPI.getRefreshToken()
    getstudiesParticipated()
  }, [])

  return (
    <>
      <Header />
      <MainWrapper>
        <MemberProfile />
        <DividingLine />

        <Title>
          <TbHeartPlus />
          나의 신청 스터디
        </Title>
        <StudiesWithConditions status="application" studiesAppliedFor={studiesAppliedFor.studyResponses} />

        <Title>
          <TbHeart />
          나의 참가 스터디
        </Title>
        <StudiesWithConditions status="participation" studiesAppliedFor={studiesParticipated} />
        <DividingLine />
        <Title>
          <AiOutlineUserDelete />
          회원 탈퇴
        </Title>
        <UserDeleteWrapper>
          <DeleteUser type="button" onClick={() => setIsOpenUserDelete(true)}>
            회원 탈퇴
          </DeleteUser>
          <Message>탈퇴시 활동 내역이 모두 삭제되며 복구되지 않습니다.</Message>
        </UserDeleteWrapper>
        <DividingLine />
        <UserDeleteModalWrapper isOpenUserDelete={isOpenUserDelete}>
          <UserDeleteModal>
            <Title>정말로 탈퇴하시겠습니까?</Title>
            <ButtonWrapper>
              <DefaultButton
                height={'2rem'}
                color={'white'}
                bgColor={theme.mainColor}
                hoverColor={''}
                hoverBGColor={theme.buttonLightColor}
                text={'확인'}
                onClick={onClickUserDeleteButton}
              />
              <DefaultButton
                height={'2rem'}
                color={theme.buttonLightColor}
                bgColor={theme.bgGroundColor1}
                hoverColor={'white'}
                hoverBGColor={theme.mainColor}
                text={'취소'}
                onClick={() => setIsOpenUserDelete(false)}
              />
            </ButtonWrapper>
          </UserDeleteModal>
        </UserDeleteModalWrapper>
      </MainWrapper>
    </>
  )
}

export default MemberInfo

const MainWrapper = styled.main`
  width: 768px;
  padding-bottom: 5rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${(props) => props.theme.small} {
    width: 100%;
    margin-top: 1.5rem;
  }
`

const Title = styled.h3`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  color: ${(props) => props.theme.text1};
`
const DeleteUser = styled.button`
  width: 6rem;
  margin-right: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 4px;
  line-height: 2rem;
  color: white;
  background-color: ${(props) => props.theme.warning};
  :hover {
    background-color: #ea5e53;
  }
`
const Message = styled.h4`
  color: ${(props) => props.theme.text2};
`

const UserDeleteWrapper = styled.div`
  display: flex;
  align-items: center;
`
const UserDeleteModalWrapper = styled.div<{ isOpenUserDelete: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.5);

  display: ${(props) => (props.isOpenUserDelete ? '' : 'none')};
`
const UserDeleteModal = styled.div`
  width: 25rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem 1.5rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  animation: 0.4s ease-in-out 0s 1 normal forwards running cptskd;
  background: ${(props) => props.theme.bgGroundColor1};
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
