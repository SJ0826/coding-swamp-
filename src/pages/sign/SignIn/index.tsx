import { ChangeEvent, FormEvent } from 'react'
import { SignInParam } from 'src/lib/types/UserInterface'
import { allClearSignInForm, changeSignInForm, isSignInValidation, postSignInForm } from 'src/lib/store/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { GITHUB_LOGIN_URL } from 'src/lib/constants/Url'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import { SignButton, SignInput } from 'src/components/sign'
import getValidation from 'src/lib/util/getValidation'
import { ValidationMessage } from 'src/lib/constants/ValidationMessage'
import { signInAPI } from 'src/lib/api/auth/SignInAPI'
import * as S from './styles'

const SignIn = () => {
  const { signInForm, isValidation } = useAppSelector(({ auth }) => auth)
  const dispatch = useAppDispatch()
  const navigator = useNavigate()

  const onChangeSignInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeSignInForm({ key: id, value: targetValue }))
    dispatch(isSignInValidation({ key: id, value: getValidation(id as keyof SignInParam, value) }))
  }

  const onSubmitSignInForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signInAPI.SignIn(signInForm)
    dispatch(allClearSignInForm())
    navigator('/')
  }

  return (
    <>
      <S.HeaderWrapper>
        <S.Logo>🐊 모코숲 로고 🐊</S.Logo>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.SignInForm onSubmit={onSubmitSignInForm}>
          <S.Title>로그인</S.Title>
          <SignInput
            id={'email'}
            type={'email'}
            placeholder={'example@example.com'}
            value={signInForm.email}
            onChange={onChangeSignInput}
            warningText={isValidation.email || signInForm.email.length === 0 ? '  ' : ValidationMessage.email}
          />
          <SignInput
            id={'password'}
            type={'password'}
            placeholder={'비밀번호를 입력해주세요.'}
            value={signInForm.password}
            onChange={onChangeSignInput}
            warningText={isValidation.password || signInForm.password.length === 0 ? '' : ValidationMessage.password}
          />
          <SignButton signState="로그인" width="100%" disabled={!(isValidation.email && isValidation.password)} />
        </S.SignInForm>
        <S.DivisionLine />
        <S.Footer>
          <S.TextWrapper>
            <span>다른 방법으로 로그인 하기</span>
            <S.GoToSignUpButton onClick={() => navigator('/signUp')}>회원가입</S.GoToSignUpButton>
          </S.TextWrapper>
          <a href={GITHUB_LOGIN_URL}>
            <S.GitHubLogin />
          </a>
        </S.Footer>
      </S.ContentWrapper>
    </>
  )
}

export default SignIn
