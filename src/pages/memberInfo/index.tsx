import Header from 'src/components/Header'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import * as S from './styles'

const MemberInfo = () => {
  const dispatch = useAppDispatch()

  return (
    <S.Container>
      <Header />
      <div>test</div>
      <div>context</div>
    </S.Container>
  )
}

export default MemberInfo
