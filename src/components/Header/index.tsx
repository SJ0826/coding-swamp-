import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const Header = () => {
  const navigator = useNavigate()
  const memberData = useAppSelector(({ memberInfo }) => memberInfo)
  const memberImage = memberData.imageUrl
  const onClickUser = () => {
    navigator('/user')
  }
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Logo>🐊 모코숲 로고 🐊</S.Logo>
        <S.User BGImage={memberImage} onClick={onClickUser} />
      </S.HeaderWrapper>
    </S.Container>
  )
}

export default Header
