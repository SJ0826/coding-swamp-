import styled from 'styled-components'

const StudyNavigationBar = () => {
  const test = 'test'
  return (
    <Container>
      <NavMenu>Home</NavMenu>
      <NavMenu>게시판</NavMenu>
      <NavMenu>설정</NavMenu>
    </Container>
  )
}

export default StudyNavigationBar

const Container = styled.div`
  display: flex;
  justify-content: start;
  margin: 4.5rem 0rem;
  padding-left: 2rem;

  font-size: 1.5rem;
`
const NavMenu = styled.nav`
  margin-right: 3rem;
  padding: 0rem 1rem;
  line-height: 3rem;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;

  background: ${(props) => props.theme.bgGroundColor2};

  :hover {
    cursor: pointer;
  }
`
