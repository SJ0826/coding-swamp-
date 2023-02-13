import { useAppSelector } from 'src/lib/hooks/useAppSelector'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { removeToken } from 'src/lib/store/localStorage'
import { useAppDispatch } from 'src/lib/hooks/useAppDispatch'
import { setUserMenuVisibility } from 'src/lib/store/userMenuSlice'
import useListenForOutsideClicks from 'src/lib/hooks/useListenForOutsideClicks'
import { useEffect, useRef } from 'react'
import UserMenu from './UserMenu'
import UserMenuItem from './UserMenuItem'

const Header = () => {
  const navigator = useNavigate()
  const useDispatch = useAppDispatch()
  const userRef = useRef<HTMLDivElement>(null)
  const memberData = useAppSelector(({ memberInfo }) => memberInfo)
  const memberImage = memberData.imageUrl

  useEffect(useListenForOutsideClicks({ userRef }))

  const toggle = () => {
    useDispatch(setUserMenuVisibility('visible'))
  }

  const onClickLogout = () => {
    removeToken()
    navigator('/')
  }

  return (
    <Container>
      <HeaderWrapper>
        <Logo>🐊 모코숲 로고 🐊</Logo>
        <User BGImage={memberImage} onClick={toggle} ref={userRef} />
        <UserMenu>
          <UserMenuItem onClick={() => navigator('/createStudy')}>스터디 만들기</UserMenuItem>
          <UserMenuItem onClick={() => navigator('/user')}>설정</UserMenuItem>
          <UserMenuItem onClick={onClickLogout}>로그아웃</UserMenuItem>
        </UserMenu>
      </HeaderWrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;

  top: 20px;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: inherit;
  height: 100%;

  @media ${(props) => props.theme.large} {
    width: calc(100% - 20rem);
  }

  @media ${(props) => props.theme.medium} {
    width: calc(100% - 8rem);
  }

  @media ${(props) => props.theme.small} {
    width: calc(100% - 3rem);
  }
`

const Logo = styled.div`
  margin: 0 14px 0 0;
`

const User = styled.div<{ BGImage: string }>`
  width: 4rem;
  height: 4rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;

  padding-left: 4px;
  border-radius: 50%;
  background-size: cover;
  background-image: url('${(props) => props.BGImage}');
  cursor: pointer;
`
