import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { changeUserValue, userValidation } from 'src/lib/store/userFormSlice'
import { ChangeEvent, useState } from 'react'
import { ValidationMessage } from 'src/lib/constants/ValidationMessage'
import getValidation from 'src/lib/util/getValidation'
import { UserParam } from 'src/lib/types/UserInterface'
import { emailAuthAPI } from 'src/lib/api/SignUp/emailAuthAPI'
import SignInput from '../signInput/SignInput'
import * as S from './styles'

const EmailAuth = () => {
  const userData = useAppSelector(({ userForm }) => userForm.value[2])
  const dispatch = useDispatch()
  const [authCode, setAuthCode] = useState<string>('')

  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeUserValue({ key: id, value: targetValue }))
    const regexp = getValidation(id as keyof Omit<UserParam, 'imageFile'>, value)
    dispatch(userValidation({ key: id, isValidate: regexp }))
  }

  const onClickEmailAuthButton = async () => {
    await emailAuthAPI.emailAuth(userData.value!)
  }

  const onChangeCodeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAuthCode(value)
  }

  const onClickPostEmailCodeButton = () => {
    emailAuthAPI.emailAuthCode(authCode)
  }

  return (
    <>
      <SignInput
        id="email"
        type="email"
        value={userData.value!}
        onChange={onChangeInputText}
        warningText={userData.isValidate || userData.value!.length === 0 ? '' : ValidationMessage.email}
        placeholder={'example@example.com'}
      />
      <S.EmailAuthButton type="button" onClick={onClickEmailAuthButton} disabled={!userData.isValidate}>
        이메일 인증하기
      </S.EmailAuthButton>
      <S.authResultMessage isAuthorizate={userData.emailAuth!}>인증 성공!</S.authResultMessage>

      <S.EmailAuthWrapper>
        <S.EmailAuthInput value={authCode} onChange={onChangeCodeNumber} type="text" />
        <S.AuthCodeButton type="button" onClick={onClickPostEmailCodeButton}>
          확인
        </S.AuthCodeButton>
      </S.EmailAuthWrapper>
      <S.AuthCodeMessage>인증 코드는 5분간 유효합니다.</S.AuthCodeMessage>
    </>
  )
}

export default EmailAuth
