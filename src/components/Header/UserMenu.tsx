import styled from 'styled-components'
import { memo } from 'react'

interface Props {
  children: React.ReactNode
  isVisible: boolean
}

const UserMenu = ({ children, isVisible }: Props) => (
  <Positioner isVisible={isVisible}>
    <MenuWrapper>{children}</MenuWrapper>
  </Positioner>
)

export default memo(UserMenu)

const Positioner = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 2rem;
  top: 6rem;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  @media ${(props) => props.theme.large} {
    right: 12rem;
  }

  @media ${(props) => props.theme.medium} {
    right: 6rem;
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
