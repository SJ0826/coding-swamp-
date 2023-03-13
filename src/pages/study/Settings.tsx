import { useEffect } from 'react'
import { Header } from 'src/components/Header'
import { DefaultStudyLayout, EditStudy, StudyApplicantManagement } from 'src/components/study'
import { refreshTokenAPI } from 'src/lib/api/auth/refreshTokenAPI'
import styled from 'styled-components'

const Settings = () => {
  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
  }, [])
  return (
    <>
      <Header />
      <DefaultStudyLayout>
        <EditStudy />
        <DarkDividingLine />
        <StudyApplicantManagement />
      </DefaultStudyLayout>
    </>
  )
}

export default Settings

const DarkDividingLine = styled.div`
  height: 0.3rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.border3};
`
