import { BsPeople } from 'react-icons/bs'
import styled from 'styled-components'
import { useAppSelector } from 'src/lib/hooks'
import { Container, Description, Icon, Title } from './StudyDescription'
import { TableContent, TableElement, TableHeader, TableElementDetail } from '../member/StudiesWithConditions'

const StudyApplicantManagement = () => {
  const { applicants } = useAppSelector(({ studyItem }) => studyItem.studyInfo)
  console.log(applicants)
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
                <PermissionToApplyButton>신청 허가</PermissionToApplyButton>
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
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 44px;
  padding: 0.5rem 0rem;
`
const PermissionToApplyButton = styled.button`
  width: 80%;
  height: 40%;
`
