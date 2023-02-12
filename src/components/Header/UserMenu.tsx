import styled from 'styled-components'
import { memo } from 'react'

interface Props {
  children: React.ReactNode
}

const UserMenu = ({ children }: Props) => (
  <Positioner>
    <MenuWrapper>{children}</MenuWrapper>
  </Positioner>
)

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

const MenuWrapper = styled.div`
  background: ${(props) => props.theme.bgColor2};
  min-width: 140px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
