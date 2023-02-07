import SignInput from 'src/components/sign/signInput/SignInput'
import SignButton from 'src/components/sign/SignButton'
import { ValidationMessage } from 'src/lib/constants/ValidationMessage'
import * as S from './styles'

const SignIn = () => {
  const onClickSignUpButton = () => {
    console.log('click')
  }
  const onChangeSignInput = () => {
    console.log('change')
  }
  return (
    <>
      <S.HeaderWrapper>
        <S.Logo>🐊 모코숲 로고 🐊</S.Logo>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.SignInForm>
          <S.Title>로그인</S.Title>
          <SignInput
            id={'email'}
            type={'email'}
            placeholder={'example@example.com'}
            value="dd"
            onChange={onChangeSignInput}
            warningText={ValidationMessage.email}
          />
          <SignInput
            id={'password'}
            type={'password'}
            placeholder={'비밀번호를 입력해주세요.'}
            value="dd"
            onChange={onChangeSignInput}
            warningText={ValidationMessage.password}
          />
          <SignButton signState="로그인" width="100%" disabled={false} />
        </S.SignInForm>
        <S.DivisionLine />
        <S.Footer>
          <S.TextWrapper>
            <span>다른 방법으로 로그인 하기</span>
            <S.GoToSignUpButton onClick={onClickSignUpButton}>회원가입</S.GoToSignUpButton>
          </S.TextWrapper>

          <S.GitHubLogin />
        </S.Footer>
      </S.ContentWrapper>
    </>
  )
}

export default SignIn
