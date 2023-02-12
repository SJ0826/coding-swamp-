import styled from 'styled-components'
import { memo } from 'react'
import { useAppSelector } from 'src/lib/hooks/useAppSelector'

interface Props {
  children: React.ReactNode
}

const UserMenu = ({ children }: Props) => {
  const isVisible = useAppSelector(({ userMenu }) => userMenu.visible)

  return (
    <Positioner>
      <MenuWrapper isVisible={isVisible}>{children}</MenuWrapper>
    </Positioner>
  )
}

export default memo(UserMenu)

const Positioner = styled.div`
  position: absolute;
  right: 10rem;
  top: 6rem;

  @media ${(props) => props.theme.medium} {
    right: 5rem;
  }

  @media ${(props) => props.theme.small} {
    right: 3rem;
  }
`
type menuProps = {
  isVisible: string
}
const MenuWrapper = styled.div<menuProps>`
  background: ${(props) => props.theme.bgColor2};
  min-width: 140px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  visibility: ${(props) => props.isVisible};
`
