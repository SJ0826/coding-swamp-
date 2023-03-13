import SignUpForm from 'src/components/sign/SignUpForm'
import * as S from './styles'

const SignUp = () => (
  <>
    <S.HeaderWrapper>
      <S.Logo>🐊 모코숲 로고 🐊</S.Logo>
    </S.HeaderWrapper>
    <S.ContentWrapper>
      <S.Title>회원가입</S.Title>
      <SignUpForm />
    </S.ContentWrapper>
  </>
)

export default SignUp
