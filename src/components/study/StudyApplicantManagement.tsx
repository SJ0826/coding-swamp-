import { BsPeople } from 'react-icons/bs'
import styled from 'styled-components'
import { useAppSelector } from 'src/lib/hooks'
import { useNavigate } from 'react-router-dom'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { Container, Description, Icon, Title } from './StudyDescription'
import { TableContent, TableElement, TableHeader, TableElementDetail } from '../member/StudiesWithConditions'

const StudyApplicantManagement = () => {
  const { applicants, thumbnail, studyId } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  const navigate = useNavigate()

  const onClickApproveButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = { studyId, applicantId: Number(e.currentTarget.value) }
    studyAPI.patchStudyApprove(data)

    navigate('/study/home')
  }
  return (
    <Container>
      <Title>
        <Icon>
          <BsPeople />
        </Icon>
        스터디 신청 관리
      </Title>
      <Description>
        <TableHeader>
          <TableElementDetail>프로필 이미지</TableElementDetail>
          <TableElementDetail>아이디</TableElementDetail>
          <TableElementDetail>참가 신청일</TableElementDetail>
          <ReasonForApplication>지원동기</ReasonForApplication>
          <TableElementDetail>
            <div />
          </TableElementDetail>
        </TableHeader>
        <TableContent>
          {applicants.map((applicant) => (
            <TableElement key={applicant.memberId} value={applicant.memberId} status={'application'}>
              <TableElementDetail>
                <MemberImage src={applicant.imageUrl} />
              </TableElementDetail>
              <TableElementDetail>{applicant.username}</TableElementDetail>
              <TableElementDetail>{applicant.applicationDate}</TableElementDetail>
              <ReasonForApplication>{applicant.reasonForApplication}</ReasonForApplication>
              <TableElementDetail>
                <PermissionToApplyButton value={applicant.memberId} bgColor={thumbnail} onClick={onClickApproveButton}>
                  신청 허가
                </PermissionToApplyButton>
              </TableElementDetail>
            </TableElement>
          ))}
        </TableContent>
      </Description>
    </Container>
  )
}

export default StudyApplicantManagement

const MemberImage = styled.img`
  width: 90%;
`
const ReasonForApplication = styled.div`
  width: 40%;
  height: 4.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
  overflow: auto;
`
const PermissionToApplyButton = styled.button<{ bgColor: string }>`
  width: 80%;
  height: 40%;
  border-radius: 10px;
  :hover {
    background: ${(props) => props.bgColor};
  }
`
