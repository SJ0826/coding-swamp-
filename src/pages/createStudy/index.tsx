import { ChangeEvent, FormEvent, useEffect } from 'react'
import { Header } from 'src/components/Header'
import { refreshTokenAPI } from 'src/lib/api/refreshTokenAPI'
import { CreateStudyTag, SelectMaxMemberCount, SelectStudyColor, ToastEditor } from 'src/components/createStudy'
import SelectDate from 'src/components/createStudy/SelectDate'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { changeStudyForm } from 'src/lib/store/studyFormSlice'
import StudyTypeSelector from 'src/components/createStudy/StudyTypeSelector'
import { createStudyAPI } from 'src/lib/api/study/createStudyAPI'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const CreateStudy = () => {
  const studyFormData = useAppSelector(({ studyForm }) => studyForm.value)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
  }, [])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStudyForm({ key: 'title', value: e.target.value }))
  }

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createStudyAPI.postNewStudy(studyFormData)
    navigate('/')
  }

  return (
    <>
      <Header />

      <S.Content>
        <S.Title>📖 코딩의 늪을 만들어 보세요.</S.Title>
        <form onSubmit={onSubmitForm}>
          <S.StudyName placeholder="스터디 이름" value={studyFormData.title} onChange={onChangeTitle} required />
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
          <S.ButtonWrapper>
            <S.SubmitButton>저장</S.SubmitButton>
            <S.DeleteButton>취소</S.DeleteButton>
          </S.ButtonWrapper>
        </form>
      </S.Content>
    </>
  )
}

export default CreateStudy
