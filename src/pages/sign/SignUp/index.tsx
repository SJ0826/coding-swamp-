import { ChangeEvent, FormEvent, useCallback, useMemo, useRef, useState } from 'react'
import * as S from './styles'
import { UserParam, ValidationParam } from '@/lib/types/UserInterface'
import getValidation from '@/lib/util/getValidation'
import { ValidationMessage } from '@/lib/util/constants/ValidationMessage'
import { signUpAPI } from '@/lib/api/Sign/SignUpAPI'

const initialValidation: ValidationParam = {
  username: false,
  email: false,
  password: false,
}

const initialUserForm: UserParam = {
  imageFile: null,
  username: '',
  email: '',
  password: '',
}

const SignUp = () => {
  const imgInputRef = useRef<HTMLInputElement>(null)
  const [validation, setValidation] = useState<ValidationParam>(initialValidation)
  const [userForm, setUserForm] = useState(initialUserForm)
  const [imageForBackBround, setImageForBackGround] = useState<string | null>('/img/user.png') // 보여주는 이미지 state

  const onClickUploadButton = () => {
    imgInputRef.current?.click()
  }

  const onChangeProfileImg = (e: ChangeEvent<HTMLElement>) => {
    const ImageFiles = (e.target as HTMLInputElement).files
    if (ImageFiles && ImageFiles[0]) {
      const url = URL.createObjectURL(ImageFiles[0])
      setImageForBackGround(url)
      setUserForm({ ...userForm, imageFile: ImageFiles[0] })
    }
  }

  const onClickImageRemoveButton = () => {
    setUserForm({ ...userForm, imageFile: null })
    setImageForBackGround('/img/user.png')
  }

  const onChangeInputText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target
      setUserForm({ ...userForm, [id]: value })
      const regexp = getValidation(id as keyof Omit<UserParam, 'imageFile'>, value)
      setValidation({ ...validation, [id]: regexp })
    },
    [userForm],
  )

  const isValidation = useMemo(
    () => !(validation.email && validation.password && validation.username),
    [validation.email, validation.password, validation.username],
  )

  const onSubmitUserForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signUpAPI.SignUp(userForm)
  }

  return (
    <>
      <S.HeaderWrapper>
        <S.Logo>🐊 모코숲 로고 🐊</S.Logo>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.Title>회원가입</S.Title>
        <S.SignUpForm encType="multipart/form-data" onSubmit={onSubmitUserForm}>
          <S.ImageWrapper>
            <S.ShowImage imageUrl={imageForBackBround} />
            <S.ImgUploadInput
              id="ImgUpload"
              type="file"
              accept="image/*"
              onChange={onChangeProfileImg}
              ref={imgInputRef}
            />
            <S.ImageButtonWrapper>
              <S.ImgUploadButton htmlFor="ImgUpload" onClick={onClickUploadButton}>
                이미지 업로드
              </S.ImgUploadButton>
              <S.ImgRemoveButton onClick={onClickImageRemoveButton}>이미지 삭제</S.ImgRemoveButton>
            </S.ImageButtonWrapper>
          </S.ImageWrapper>
          <SignInput
            id="username"
            type="username"
            value={userForm.username}
            onChange={onChangeInputText}
            warningText={validation.username || userForm.username.length === 0 ? '' : ValidationMessage.username}
            placeholder={'닉네임을 입력해주세요'}
          />
          <SignInput
            id="email"
            type="email"
            value={userForm.email}
            onChange={onChangeInputText}
            warningText={validation.email || userForm.email.length === 0 ? '' : ValidationMessage.email}
            placeholder={'example@example.com'}
          />
          <SignInput
            id="password"
            type="password"
            value={userForm.password}
            onChange={onChangeInputText}
            warningText={validation.password || userForm.password.length === 0 ? '' : ValidationMessage.password}
            placeholder={'비밀번호를 입력해주세요'}
          />
          <SignButton signState="회원가입" width="100%" disabled={isValidation} />
        </S.SignUpForm>
      </S.ContentWrapper>
    </>
  )
}

export default SignUp
