import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/lib/hooks'
import { changeTargetedStudyNav } from 'src/lib/store/studyItemSlice'
import isStudyOwner from 'src/lib/hooks/isStudyOwner'
import styled from 'styled-components'

const StudyNavigationBar = () => {
  const dispatch = useDispatch()
  const { clickedStudyNav, studyInfo } = useAppSelector(({ studyItem }) => studyItem)
  const navigate = useNavigate()
  const onClickNavMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeTargetedStudyNav(e.currentTarget.id))
    switch (e.currentTarget.id) {
      case 'home':
        navigate('/study/home')
        break
      case 'board':
        navigate('/study/board')
        break
      case 'settings':
        navigate('/study/settings')
        break
      default:
        break
    }
  }
  return (
    <Container>
      <NavMenu
        id="home"
        onClick={onClickNavMenu}
        clickedStudyNav={clickedStudyNav === 'home'}
        bottomColor={studyInfo.thumbnail}
        isVisible={true}
      >
        Home
      </NavMenu>
      <NavMenu
        id="board"
        onClick={onClickNavMenu}
        clickedStudyNav={clickedStudyNav === 'board'}
        bottomColor={studyInfo.thumbnail}
        isVisible={true}
      >
        게시판
      </NavMenu>
      <NavMenu
        id="settings"
        onClick={onClickNavMenu}
        clickedStudyNav={clickedStudyNav === 'settings'}
        bottomColor={studyInfo.thumbnail}
        isVisible={isStudyOwner()}
      >
        설정
      </NavMenu>
    </Container>
  )
}

export default StudyNavigationBar

const Container = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 4.5rem;
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  font-size: 1.2rem;

  @media ${(props) => props.theme.small} {
    font-size: 1rem;
    padding-left: 3.3rem;
    margin-top: 2.5rem;
  }
`
const NavMenu = styled.nav<{ clickedStudyNav: boolean; bottomColor: string; isVisible: boolean }>`
  margin-right: 3rem;
  padding: 0rem 1rem;
  line-height: 3rem;
  font-weight: bold;
  visibility: ${(props) => (props.isVisible ? 'none' : 'hidden')}
  color: ${(props) => (props.clickedStudyNav ? props.theme.text1 : props.theme.text4)};
  border-radius: 10px;

  background: ${(props) => (props.clickedStudyNav ? props.bottomColor : props.theme.bgGroundColor2)};
  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;
  :hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.small} {
    font-size: 1rem;
    margin-right: 1rem;
    line-height: 2rem;
  }
`
