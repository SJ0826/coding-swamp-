import { useEffect } from 'react'
import { Header } from 'src/components/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import {
  CreateStudyTag,
  SelectMaxMemberCount,
  SelectStudyColor,
  StudyTypeRadio,
  ToastEditor,
} from 'src/components/createStudy'
import SelectDate from 'src/components/createStudy/SelectDate'
import * as S from './styles'

const CreateStudy = () => {
  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
  }, [])
  return (
    <>
      <Header />

      <S.Content>
        <S.Title>📖 코딩의 늪을 만들어 보세요.</S.Title>
        <S.StudyName placeholder="스터디 이름"></S.StudyName>
        <S.SelectStudyType>
          <S.SubTitle>스터디 타입</S.SubTitle>

          <StudyTypeRadio labelText="스터디" />
          <StudyTypeRadio labelText="모각코" />
        </S.SelectStudyType>
        <SelectStudyColor />
        <SelectMaxMemberCount />
        <SelectDate />
        <S.DivisionLine />
        <ToastEditor />

        <CreateStudyTag />
      </S.Content>
    </>
  )
}

export default CreateStudy
