import { ChangeEvent, memo } from 'react'
import * as S from './styles'

interface Props {
  id: string
  type: 'email' | 'password' | 'username'
  value: string
  warningText: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

function SignInput({ id, type, value, warningText, onChange, placeholder }: Props) {
  return (
    <S.Container>
      <S.InputLabel>
        {id}
        <br />
        <S.Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} required />
        <S.ErrorMessage isError={!!warningText}>{warningText}</S.ErrorMessage>
      </S.InputLabel>
    </S.Container>
  )
}

export default memo(SignInput)
