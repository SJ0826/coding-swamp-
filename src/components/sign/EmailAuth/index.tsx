import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import SignInput from '../signInput/SignInput'
import * as S from './styles'

const EmailAuth = () => {
  const userData = useAppSelector(({ userForm }) => userForm)
  // const onChangeInputText = () => {}
  // 이메일 인증하면 is인증 true
  // dispatch로 값 쏴주기
  // input disabled
  // 다시하기 > input 살리고, is인증 다시 false
  return (
    <>
      {/* <SignInput
        id="email"
        type="email"
        value={userData.value[2].value!}
        onChange={onChangeInputText}
        warningText={validation.email || userData.email.length === 0 ? '' : ValidationMessage.email}
        placeholder={'example@example.com'}
      /> */}
      <S.EmailAuthWrapper>
        <S.EmailAuthButton>이메일 인증하기</S.EmailAuthButton>
        <S.EmailAuthMessage>이메일인증 미완료</S.EmailAuthMessage>
      </S.EmailAuthWrapper>
    </>
  )
}

export default EmailAuth
