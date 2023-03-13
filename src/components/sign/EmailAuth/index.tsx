import { useDispatch } from 'react-redux'
import { MemberFormValidation, changeUserValue, isAuthorizatedEmail } from 'src/lib/store/member/memberFormSlice'
import { ChangeEvent, useState } from 'react'
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
  const [toggleEmailAuthButton, setToggleEmailAuthButton] = useState<boolean>(false)

  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeUserValue({ key: id, value: targetValue }))
    const regexp = getValidation(id as keyof SignInParam, value)
    dispatch(MemberFormValidation({ key: 'email', value: regexp }))
  }

  const onClickEmailAuthButton = async () => {
    const response = await emailAuthAPI.emailAuth(memberForm.email)
    if (response.status !== 201) {
      return
    }
    dispatch(isAuthorizatedEmail(false))
    setToggleEmailAuthButton(true)
  }

  const onChangeCodeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAuthCode(value)
  }

  const onClickPostEmailCodeButton = async () => {
    const response = await emailAuthAPI.emailAuthCode(authCode)
    if (response.status !== 200) {
      return Promise.reject(new Error('API 요청에 실패했습니다.'))
    }
    dispatch(isAuthorizatedEmail(true))
    setAuthCode('')
    setToggleEmailAuthButton(false)
    return response
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
      <S.MessageWrapper>
        <S.EmailAuthButton type="button" onClick={onClickEmailAuthButton} disabled={false}>
          이메일 인증하기
        </S.EmailAuthButton>
        <S.authResultMessage>{emailAuth ? '인증 성공!' : '인증 필요'}</S.authResultMessage>
      </S.MessageWrapper>

      <S.EmailAuthForm isVisible={toggleEmailAuthButton}>
        <S.EmailAuthWrapper>
          <S.EmailAuthInput value={authCode} onChange={onChangeCodeNumber} type="text" />
          <S.AuthCodeButton type="button" onClick={onClickPostEmailCodeButton} disabled={emailAuth}>
            확인
          </S.AuthCodeButton>
        </S.EmailAuthWrapper>
        <S.AuthCodeMessage>인증 코드는 5분간 유효합니다.</S.AuthCodeMessage>
      </S.EmailAuthForm>
    </>
  )
}

export default EmailAuth
