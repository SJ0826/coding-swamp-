import styled from 'styled-components'

interface Props {
  onClick: () => void
  children: React.ReactNode
}

const UserMenuItem = ({ onClick, children }: Props) => <MenuItem onClick={onClick}>{children}</MenuItem>

export default UserMenuItem

const MenuItem = styled.div`
  & + & {
    border-top: 1px solid ${(props) => props.theme.border4};
  }

  padding: 0.5rem 0 0.5rem 1rem;
  color: ${(props) => props.theme.text4};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.bgGroundColor2};
    color: ${(props) => props.theme.text1};
    font-weight: 500;
  }

  @media ${(props) => props.theme.small} {
    background: ${(props) => props.theme.bgGroundColor3};
  }
`
