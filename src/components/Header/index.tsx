import { useAppSelector } from 'src/lib/hooks/useAppSelector'

import * as S from './styles'

const Header = () => {
  const memberData = useAppSelector(({ memberInfo }) => memberInfo)
  const memberImage = memberData.imageUrl
  return (
    <>
      <S.HeaderWrapper>
        <S.Logo>🐊 모코숲 로고 🐊</S.Logo>
        <S.User BGImage={memberImage} />
      </S.HeaderWrapper>
    </>
  )
}

export default Header
