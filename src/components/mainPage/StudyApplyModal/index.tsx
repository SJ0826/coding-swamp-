import { MdClose, MdArrowDropDown } from 'react-icons/md'
import { SlPaperPlane } from 'react-icons/sl'
import { StudyDetailInfo } from 'src/lib/types/StudyInterface'
import { DivisionLine } from 'src/pages/createStudy/styles'
import * as S from './style'

const StudyApplyModal = () => {
  const dummy: StudyDetailInfo = {
    studyId: 1,
    title: '모여봐요 코딩의 늪',
    description: '설명입니다.',
    studyType: 'STUDY',
    thumbnail: 'lightgray',
    studyStatus: 'ONGOING',
    currentMemberCount: 1,
    maxMemberCount: 30,
    startDate: '2023-02-01',
    endDate: '2023-02-03',
    owner: {
      memberId: 1,
      username: 'hong',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/coding-swamp.appspot.com/o/default_image%2Fcrocodile.png?alt=media',
      profileUrl: null,
      participationDate: '2023-02-17',
    },
    participants: [
      {
        memberId: 1,
        username: 'hong',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/coding-swamp.appspot.com/o/default_image%2Fcrocodile.png?alt=media',
        profileUrl: null,
        participationDate: '2023-02-17',
      },
    ],
    applicants: [
      {
        memberId: 2,
        username: 'hong',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/coding-swamp.appspot.com/o/default_image%2Fcrocodile.png?alt=media',
        profileUrl: null,
        reasonForApplication: '지원 동기',
        applicationDate: '2023-02-17',
      },
    ],
    tags: ['태그1', '태그2'],
    createdAt: '2023-02-17T05:11:39.589484',
  }

  return (
    <S.Container>
      <S.StudyModalWrapper>
        <S.Header>
          <S.CloseButton>
            <MdClose />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <S.Title bgColor={dummy.thumbnail}>{dummy.title}</S.Title>
          <S.Info>
            <S.InfoWrapper>
              <S.InfoTitle>운영자</S.InfoTitle>
              <S.InfoContents>{dummy.owner.username}</S.InfoContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>정원</S.InfoTitle>
              <S.InfoContents>
                {dummy.currentMemberCount}/{dummy.maxMemberCount}
              </S.InfoContents>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.InfoTitle>기간</S.InfoTitle>
              <S.InfoContents>
                {dummy.startDate} ~ {dummy.endDate}
              </S.InfoContents>
            </S.InfoWrapper>
            <br />
            <S.InfoWrapper>
              <S.InfoTitle>스터디 소개</S.InfoTitle>
              <S.InfoContents>{dummy.description}</S.InfoContents>
            </S.InfoWrapper>
          </S.Info>
          <DivisionLine />
          <S.ApplyInfo>
            <S.ButtonWrapper bgColor={dummy.thumbnail}>
              <S.ShowApplyButton id="showApplyForm" disabled={dummy.studyStatus !== 'ONGOING'}>
                <MdArrowDropDown />
              </S.ShowApplyButton>
              <S.Label htmlFor="showApplyForm">스터디 신청하기 </S.Label>
              <S.WarningMessage>
                {dummy.studyStatus === 'ONGOING' ? '' : '이미 모집이 마감되었습니다.'}
              </S.WarningMessage>
            </S.ButtonWrapper>
            <S.FormWrapper>
              <S.ApplyForm placeholder="소개말을 간단히 적어보세요." />

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

export default StudyApplyModal
