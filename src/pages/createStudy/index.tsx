import { ChangeEvent, useEffect } from 'react'
import { Header } from 'src/components/Header'
import { refreshTokenAPI } from 'src/lib/api/auth/refreshTokenAPI'
import { CreateStudyTag, SelectMaxMemberCount, SelectStudyColor, ToastEditor } from 'src/components/createStudy'
import SelectDate from 'src/components/createStudy/SelectDate'
import { allClearForm, changeStudyForm } from 'src/lib/store/studyFormSlice'
import StudyTypeSelector from 'src/components/createStudy/StudyTypeSelector'
import { useNavigate } from 'react-router-dom'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import * as S from './styles'

const CreateStudy = () => {
  const studyFormData = useAppSelector(({ studyForm }) => studyForm.value)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    refreshTokenAPI.getRefreshToken()
    dispatch(allClearForm())
  }, [])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStudyForm({ key: 'title', value: e.target.value }))
  }

  const onClickSubmitButton = async () => {
    await studyAPI.postNewStudy(studyFormData)
    dispatch(allClearForm)
    navigate('/')
  }

  const onClickDeleteButton = () => {
    dispatch(allClearForm)
    navigate('/')
  }

  return (
    <>
      <Header />

      <S.Content>
        <S.Title bgColor={studyFormData.thumbnail}>📖 코딩의 늪을 만들어 보세요.</S.Title>

        <S.StudyName placeholder="스터디 이름" value={studyFormData.title} onChange={onChangeTitle} required />
        <S.SubMenu>
          <S.SubTitle>스터디 타입</S.SubTitle>
          <StudyTypeSelector />
        </S.SubMenu>
        <S.SubMenu>
          <S.SubTitle>스터디 대표 색상</S.SubTitle>
          <SelectStudyColor />
        </S.SubMenu>
        <S.SubMenu>
          <S.SubTitle>스터디 최대 인원</S.SubTitle>
          <SelectMaxMemberCount />
        </S.SubMenu>
        <S.SubMenu>
          <S.SubTitle>스터디 기간</S.SubTitle>
          <SelectDate />
        </S.SubMenu>
        <CreateStudyTag />
        <S.DivisionLine />
        <ToastEditor />

        <S.ButtonWrapper>
          <S.CreateOrEscButton type="button" onClick={onClickSubmitButton} buttonName={'create'}>
            저장
          </S.CreateOrEscButton>
          <S.CreateOrEscButton type="button" onClick={onClickDeleteButton} buttonName={'esc'}>
            취소
          </S.CreateOrEscButton>
        </S.ButtonWrapper>
      </S.Content>

      <S.Footer />
    </>
  )
}

export default CreateStudy
