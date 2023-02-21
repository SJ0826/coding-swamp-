import { MdClose, MdArrowDropDown, MdArrowRight } from 'react-icons/md'
import { SlPaperPlane } from 'react-icons/sl'
import { DivisionLine } from 'src/pages/createStudy/styles'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { toggleStudyModal } from 'src/lib/store/studyItemSlice'
import { memo, useState } from 'react'
import * as S from './style'

const StudyApplyModal = () => {
  const { isOpenStudyModal, studyInfo } = useAppSelector(({ studyItem }) => studyItem)
  const dispatch = useAppDispatch()
  const [isOpenApplyForm, setIsOpenApplyForm] = useState(false)

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
                disabled={studyInfo.studyStatus !== 'ONGOING'}
              >
                {isOpenApplyForm ? <MdArrowDropDown /> : <MdArrowRight />}
              </S.ShowApplyButton>
              <S.Label htmlFor="showApplyForm">스터디 신청하기 </S.Label>
              <S.WarningMessage>
                {studyInfo.studyStatus === 'ONGOING' ? '' : '이미 모집이 마감되었습니다.'}
              </S.WarningMessage>
            </S.ButtonWrapper>
            <S.FormWrapper isOpen={isOpenApplyForm}>
              <S.ApplyForm
                placeholder="
              하고 있는 공부, 일주일에 함께할 수 있는 요일 등 자유롭게 작성해주세요"
              />
              <S.ApplyButtonWrapper>
                <S.SubmitButton id="submitButton">
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
