import { ChangeEvent, useEffect } from 'react'
import { Header } from 'src/components/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { CreateStudyTag, SelectMaxMemberCount, SelectStudyColor, ToastEditor } from 'src/components/createStudy'
import SelectDate from 'src/components/createStudy/SelectDate'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import StudyTypeSelector from 'src/components/createStudy/StudyTypeSelector'
import * as S from './styles'

const CreateStudy = () => {
  const studyFormData = useAppSelector(({ studyForm }) => studyForm.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
  }, [])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStudyForm({ key: 'title', value: e.target.value }))
  }

  return (
    <>
      <Header />

      <S.Content>
        <S.Title>📖 코딩의 늪을 만들어 보세요.</S.Title>
        <S.StudyName placeholder="스터디 이름" value={studyFormData.title} onChange={onChangeTitle} />
        <S.SelectStudyType>
          <S.SubTitle>스터디 타입</S.SubTitle>

          <StudyTypeSelector />
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
