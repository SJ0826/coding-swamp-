import SignInput from 'src/components/sign/signInput/SignInput'
import SignButton from 'src/components/sign/SignButton'
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'
import { UserParam } from 'src/lib/types/UserInterface'

import { useNavigate } from 'react-router-dom'
import { allClearSignUpForm, changeUserValue, postUserForm } from 'src/lib/store/member/memberFormSlice'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import * as S from './style'
import BGImage from '../../../lib/assets/image/BG.png'
import EmailAuth from '../EmailAuth'

const SignUpForm = () => {
  const dispatch = useAppDispatch()
  const { memberForm } = useAppSelector(({ memberFormInfo }) => memberFormInfo)
  const imgInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [imageForBackBround, setImageForBackGround] = useState<string | null>(BGImage) // 보여주는 이미지 state

  const onClickUploadButton = () => {
    imgInputRef.current?.click()
  }

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

  const onChangeInputText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeUserValue({ key: id, value: targetValue }))
    // const regexp = getValidation(id as keyof Omit<UserParam, 'imageFile'>, value)
    // dispatch(userValidation({ key: id, isValidate: regexp }))
  }, [])

  // const isValidation = useMemo(
  //   () => !(userData[1].isValidate && userData[2].isValidate && userData[3].isValidate),
  //   [userData],
  // )

  const onSubmitUserForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result: UserParam = {
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
          <S.ImgUploadButton htmlFor="ImgUpload" onClick={onClickUploadButton}>
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
        warningText={''}
        placeholder={'닉네임을 입력해주세요'}
      />
      <EmailAuth />
      <SignInput
        id="password"
        type="password"
        value={memberForm.password}
        onChange={onChangeInputText}
        warningText={''}
        placeholder={'비밀번호를 입력해주세요'}
      />
      <SignButton signState="회원가입" width="100%" disabled={false} />
    </S.SignUpForm>
  )
}

export default SignUpForm
