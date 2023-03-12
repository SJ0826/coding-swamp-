import { useDispatch } from 'react-redux'
import { MemberFormValidation, allClearSignUpForm, changeUserValue } from 'src/lib/store/member/memberFormSlice'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppSelector } from 'src/lib/hooks'
import { emailAuthAPI } from 'src/lib/api/auth/emailAuthAPI'
import getValidation from 'src/lib/util/getValidation'
import { SignInParam } from 'src/lib/types/UserInterface'
import { ValidationMessage } from 'src/lib/constants/ValidationMessage'
import SignInput from '../signInput/SignInput'
import * as S from './styles'

const EmailAuth = () => {
  const { memberForm, emailAuth, isMemberFormValidation } = useAppSelector(({ memberFormInfo }) => memberFormInfo)
  const dispatch = useDispatch()
  const [authCode, setAuthCode] = useState<string>('')

  useEffect(() => {
    dispatch(allClearSignUpForm())
  }, [])

  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeUserValue({ key: id, value: targetValue }))
    const regexp = getValidation(id as keyof SignInParam, value)
    dispatch(MemberFormValidation({ key: 'email', value: regexp }))
  }

  const onClickEmailAuthButton = async () => {
    await emailAuthAPI.emailAuth(memberForm.email)
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
        value={memberForm.email}
        onChange={onChangeInputText}
        warningText={isMemberFormValidation?.email || memberForm?.email.length === 0 ? '' : ValidationMessage?.email}
        placeholder={'example@example.com'}
      />
      <S.EmailAuthButton type="button" onClick={onClickEmailAuthButton} disabled={false}>
        이메일 인증하기
      </S.EmailAuthButton>
      <S.authResultMessage isAuthorizate={emailAuth}>인증 성공!</S.authResultMessage>

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
