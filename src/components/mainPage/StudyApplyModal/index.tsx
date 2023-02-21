import { MdClose, MdArrowDropDown, MdArrowRight } from 'react-icons/md'
import { SlPaperPlane } from 'react-icons/sl'
import { DivisionLine } from 'src/pages/createStudy/styles'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { toggleStudyModal } from 'src/lib/store/studyItemSlice'
import { memo, useRef, useState } from 'react'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

const StudyApplyModal = () => {
  const navigate = useNavigate()
  const { username } = useAppSelector(({ memberInfo }) => memberInfo)
  const { isOpenStudyModal, studyInfo } = useAppSelector(({ studyItem }) => studyItem)
  const dispatch = useAppDispatch()
  const [isOpenApplyForm, setIsOpenApplyForm] = useState(false)
  const applicationTextRef = useRef<HTMLTextAreaElement | null>(null)

  const isParticiPateUser = studyInfo.participants.filter((participant) => participant.username === username)
  const isApplicatedUser = studyInfo.applicants.filter((participant) => participant.username === username)
  const conditionByStudy = studyInfo.studyStatus === 'ONGOING'
  const isValidate = () => conditionByStudy && isParticiPateUser.length === 0 && isApplicatedUser.length === 0

  const ValidationMessage = () => {
    let message = ''
    if (studyInfo.studyStatus !== 'ONGOING') {
      message = '이미 모집이 마감되었습니다.'
    }
    if (isParticiPateUser.length !== 0) {
      message = '이미 참가중인 스터디 입니다.'
    }
    if (isApplicatedUser.length !== 0) {
      message = '이미 참가신청한 스터디 입니다.'
    }
    return message
  }

  const onClickSubmitButton = async () => {
    try {
      if (applicationTextRef.current?.value) {
        const data = { studyId: studyInfo.studyId, reasonForApplication: applicationTextRef.current?.value }
        await studyAPI.patchStudyApplicationFormAPI(data)
        navigate('/user')
        dispatch(toggleStudyModal())
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('요청을 수행할 수 없습니다. 관리자에게 문의해주세요.')
    }
  }

  return (
    <S.Container isOpen={isOpenStudyModal}>
      <S.StudyModalWrapper>
        <S.Header>
          <S.CloseButton onClick={() => dispatch(toggleStudyModal())}>
            <MdClose />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <S.Title bgColor={studyInfo.thumbnail}>{studyInfo.title}</S.Title>
          <S.Info>
            <S.InfoWrapper>
              <S.InfoTitle>운영자</S.InfoTitle>
              <S.InfoContents>{studyInfo.owner.username}</S.InfoContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>정원</S.InfoTitle>
              <S.InfoContents>
                {studyInfo.currentMemberCount}/{studyInfo.maxMemberCount}
              </S.InfoContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>기간</S.InfoTitle>
              <S.InfoContents>
                {studyInfo.startDate} ~ {studyInfo.endDate}
              </S.InfoContents>
            </S.InfoWrapper>
            <br />
            <S.InfoWrapper>
              <S.InfoTitle>스터디 소개</S.InfoTitle>
              <S.InfoContents>{studyInfo.description}</S.InfoContents>
            </S.InfoWrapper>
          </S.Info>
          <DivisionLine />
          <S.ApplyInfo>
            <S.ButtonWrapper bgColor={studyInfo.thumbnail}>
              <S.ShowApplyButton
                id="showApplyForm"
                onClick={() => setIsOpenApplyForm(!isOpenApplyForm)}
                disabled={!isValidate()}
              >
                {isOpenApplyForm ? <MdArrowDropDown /> : <MdArrowRight />}
              </S.ShowApplyButton>
              <S.Label htmlFor="showApplyForm">스터디 신청하기 </S.Label>
              <S.WarningMessage>{ValidationMessage()}</S.WarningMessage>
            </S.ButtonWrapper>
            <S.FormWrapper isOpen={isOpenApplyForm}>
              <S.ApplyForm
                ref={applicationTextRef}
                placeholder="
              하고 있는 공부, 일주일에 함께할 수 있는 요일 등 자유롭게 작성해주세요"
              />
              <S.ApplyButtonWrapper>
                <S.SubmitButton id="submitButton" onClick={onClickSubmitButton}>
                  <SlPaperPlane />
                </S.SubmitButton>
                <S.Label htmlFor="submitButton">신청하기</S.Label>
              </S.ApplyButtonWrapper>
            </S.FormWrapper>
          </S.ApplyInfo>
        </S.Content>
      </S.StudyModalWrapper>
    </S.Container>
  )
}

export default memo(StudyApplyModal)
