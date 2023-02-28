import { useDispatch } from 'react-redux'
import { useAppSelector } from 'src/lib/hooks'
import { changeTargetedStudyNav } from 'src/lib/store/studyItemSlice'
import styled from 'styled-components'

const StudyNavigationBar = () => {
  const dispatch = useDispatch()
  const { clickedStudyNav } = useAppSelector(({ studyItem }) => studyItem)
  const onClickNavMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeTargetedStudyNav(e.currentTarget.id))
  }
  return (
    <Container>
      <NavMenu id="home" onClick={onClickNavMenu} clickedStudyNav={clickedStudyNav === 'home'}>
        Home
      </NavMenu>
      <NavMenu id="board" onClick={onClickNavMenu} clickedStudyNav={clickedStudyNav === 'board'}>
        게시판
      </NavMenu>
      <NavMenu id="settings" onClick={onClickNavMenu} clickedStudyNav={clickedStudyNav === 'settings'}>
        설정
      </NavMenu>
    </Container>
  )
}

export default StudyNavigationBar

const Container = styled.div`
  display: flex;
  justify-content: start;
  margin: 4.5rem 0rem;
  padding-left: 2rem;

  font-size: 1.2rem;
`
const NavMenu = styled.nav<{ clickedStudyNav: boolean }>`
  margin-right: 3rem;
  padding: 0rem 1rem;
  line-height: 3rem;
  font-weight: bold;
  color: ${(props) => (props.clickedStudyNav ? props.theme.text1 : props.theme.text4)};
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;
  background: ${(props) => (props.clickedStudyNav ? props.theme.bgGroundColor2 : 'none')};

  :hover {
    cursor: pointer;
  }
`
