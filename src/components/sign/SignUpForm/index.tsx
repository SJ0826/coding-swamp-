import SignInput from 'src/components/sign/signInput/SignInput'
import SignButton from 'src/components/sign/SignButton'
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MemberFormValidation,
  allClearSignUpForm,
  changeUserValue,
  postUserForm,
} from 'src/lib/store/member/memberFormSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { MemberFormParam, SignInParam } from 'src/lib/types/UserInterface'
import getValidation from 'src/lib/util/getValidation'
import { ValidationMessage } from 'src/lib/constants/ValidationMessage'
import * as S from './style'
import BGImage from '../../../lib/assets/image/BG.png'
import EmailAuth from '../EmailAuth'

const SignUpForm = () => {
  const dispatch = useAppDispatch()
  const { memberForm, isMemberFormValidation } = useAppSelector(({ memberFormInfo }) => memberFormInfo)
  const imgInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [imageForBackBround, setImageForBackGround] = useState<string | null>(BGImage) // 보여주는 이미지 state

  useEffect(() => {
    dispatch(allClearSignUpForm())
  }, [])

  const onChangeProfileImg = useCallback(
    (e: ChangeEvent<HTMLElement>) => {
      const ImageFiles = (e.target as HTMLInputElement).files
      if (ImageFiles && ImageFiles[0]) {
        const url = URL.createObjectURL(ImageFiles[0])
        setImageForBackGround(url)
        dispatch(changeUserValue({ key: 'imageFile', value: ImageFiles[0] }))
        dispatch(changeUserValue({ key: 'imageFile', value: ImageFiles[0] }))
      }
    },
    [imgInputRef],
  )

  const onClickImageRemoveButton = useCallback(() => {
    dispatch(changeUserValue({ key: 'imageFile', value: null }))
    setImageForBackGround(BGImage)
  }, [imgInputRef])

  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeUserValue({ key: id, value: targetValue }))
    const regexp = getValidation(id as keyof SignInParam, value)
    dispatch(MemberFormValidation({ key: id, value: regexp }))
  }

  const isValidation = useMemo(
    () => !(isMemberFormValidation?.email && isMemberFormValidation.password),
    [isMemberFormValidation],
  )

  const onSubmitUserForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result: Omit<MemberFormParam, 'profileUrl' | 'imageUrl'> = {
      imageFile: memberForm.imageFile,
      username: memberForm.username,
      email: memberForm.email,
      password: memberForm.password,
    }

    await dispatch(postUserForm(result))
    navigate('/signIn')
    dispatch(allClearSignUpForm())
  }

  return (
    <S.SignUpForm encType="multipart/form-data" onSubmit={onSubmitUserForm}>
      <S.ImageWrapper>
        <S.ShowImage imageUrl={imageForBackBround} />
        <S.ImgUploadInput id="ImgUpload" type="file" accept="image/*" onChange={onChangeProfileImg} ref={imgInputRef} />
        <S.ImageButtonWrapper>
          <S.ImgUploadButton
            htmlFor="ImgUpload"
            onChange={() => {
              imgInputRef.current?.click()
            }}
          >
            이미지 업로드
          </S.ImgUploadButton>
          <S.ImgRemoveButton onClick={onClickImageRemoveButton}>이미지 삭제</S.ImgRemoveButton>
        </S.ImageButtonWrapper>
      </S.ImageWrapper>
      <SignInput
        id="username"
        type="username"
        value={memberForm.username}
        onChange={onChangeInputText}
        warningText={
          isMemberFormValidation?.username || memberForm?.username.length === 0 ? '' : ValidationMessage?.username
        }
        placeholder={'닉네임을 입력해주세요'}
      />
      <EmailAuth />
      <SignInput
        id="password"
        type="password"
        value={memberForm.password}
        onChange={onChangeInputText}
        warningText={
          isMemberFormValidation?.password || memberForm?.password.length === 0 ? '' : ValidationMessage?.password
        }
        placeholder={'비밀번호를 입력해주세요'}
      />
      <SignButton signState="회원가입" width="100%" disabled={isValidation} />
    </S.SignUpForm>
  )
}

export default SignUpForm
