import SignInput from 'src/components/sign/signInput/SignInput'
import SignButton from 'src/components/sign/SignButton'
import { ValidationMessage } from 'src/lib/constants/ValidationMessage'
import { ChangeEvent, FormEvent, useMemo } from 'react'
import getValidation from 'src/lib/util/getValidation'
import { SignInParam, UserParam } from 'src/lib/types/UserInterface'
import {
  SignInValidation,
  allClearSignInForm,
  changeSignInForm,
  postSignInForm,
} from 'src/lib/store/signForm/signInFormSlice'
import { useNavigate } from 'react-router-dom'
import { GITHUB_LOGIN_URL } from 'src/lib/constants/Url'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'
import * as S from './styles'

const SignIn = () => {
  const SignInForm = useAppSelector(({ signInForm }) => signInForm.value)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickGoToSignUp = () => {
    navigate('/signUp')
  }
  const onChangeSignInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const targetValue = value
    dispatch(changeSignInForm({ key: id, value: targetValue }))
    const regexp = getValidation(id as keyof Omit<UserParam, 'imageFile'>, value)
    dispatch(SignInValidation({ key: id, isValidate: regexp }))
  }

  const onSubmitSignInForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result: SignInParam = {
      email: SignInForm[0].value,
      password: SignInForm[1].value,
    }

    dispatch(postSignInForm(result))
    dispatch(allClearSignInForm())
    navigate('/')
  }

  const isValidation = useMemo(() => !(SignInForm[0].isValidate && SignInForm[1].isValidate), [SignInForm])

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
            value={SignInForm[0].value}
            onChange={onChangeSignInput}
            warningText={SignInForm[0].isValidate || SignInForm[0].value?.length === 0 ? '' : ValidationMessage.email}
          />
          <SignInput
            id={'password'}
            type={'password'}
            placeholder={'비밀번호를 입력해주세요.'}
            value={SignInForm[1].value}
            onChange={onChangeSignInput}
            warningText={
              SignInForm[1].isValidate || SignInForm[1].value?.length === 0 ? '' : ValidationMessage.password
            }
          />
          <SignButton signState="로그인" width="100%" disabled={isValidation} />
        </S.SignInForm>
        <S.DivisionLine />
        <S.Footer>
          <S.TextWrapper>
            <span>다른 방법으로 로그인 하기</span>
            <S.GoToSignUpButton onClick={onClickGoToSignUp}>회원가입</S.GoToSignUpButton>
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
