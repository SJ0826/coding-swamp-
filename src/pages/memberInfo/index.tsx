import { useEffect, useState } from 'react'
import { getMemberInfo, getStudiesAppliedFor } from 'src/lib/store/member/memberSlice'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { Header } from 'src/components/Header'
import { MemberProfile, StudiesWithConditions } from 'src/components/member'
import { DividingLine } from 'src/components'
import styled from 'styled-components'
import { TbHeartPlus } from 'react-icons/tb'
import { StudyWithCondition } from 'src/lib/types/StudyInterface'

const MemberInfo = () => {
  const dispatch = useAppDispatch()

  const studiesAppliedFor = useAppSelector((member) => member.member.value.studiesAppliedFor)

  useEffect(() => {
    dispatch(getMemberInfo())
    dispatch(getStudiesAppliedFor())
    refreshTokenAPI.getRefreshToken()
    console.log(studiesAppliedFor)
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
        <StudiesWithConditions studiesAppliedFor={studiesAppliedFor.studyResponses} />
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
