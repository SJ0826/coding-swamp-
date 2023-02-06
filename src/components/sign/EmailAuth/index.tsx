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
  const userData = useAppSelector(({ userForm }) => userForm.value)
  const dispatch = useDispatch()
  const [authCode, setAuthCode] = useState<string>('')
  const [isAuthorizate, setIsAuthorizate] = useState<boolean>(false)

  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeUserValue({ key: id, value: targetValue }))
    const regexp = getValidation(id as keyof Omit<UserParam, 'imageFile'>, value)
    dispatch(userValidation({ key: id, isValidate: regexp }))
  }

  const onClickEmailAuthButton = async () => {
    const a = await emailAuthAPI.emailAuth(userData[2].value!)
    console.log(a)
  }

  const onChangeCodeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAuthCode(value)
  }

  const onClickPostEmailCodeButton = async () => {
    const response = await emailAuthAPI.emailAuthCode(authCode)
    console.log(response)
  }

  // 이메일 인증하면 is인증 true
  // dispatch로 값 쏴주기
  // input disabled
  // 다시하기 > input 살리고, is인증 다시 false
  return (
    <>
      <SignInput
        id="email"
        type="email"
        value={userData[2].value!}
        onChange={onChangeInputText}
        warningText={userData[2].isValidate || userData[2].value!.length === 0 ? '' : ValidationMessage.email}
        placeholder={'example@example.com'}
      />
      <S.EmailAuthButton type="button" onClick={onClickEmailAuthButton} disabled={!userData[2].isValidate}>
        이메일 인증하기
      </S.EmailAuthButton>
      <S.authResultMessage isAuthorizate={isAuthorizate}>인증 성공!</S.authResultMessage>

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
