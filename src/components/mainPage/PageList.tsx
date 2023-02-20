import { getStudies, updateActivePage } from 'src/lib/store/studyListSlice'
import styled from 'styled-components'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from 'src/lib/hooks'

const PageList = () => {
  const dispatch = useAppDispatch()
  const { totalPage, currentPage } = useAppSelector(({ studyList }) => studyList.value)

  const pages = Array(totalPage).fill(0)
  const onClickPageNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedPageNum = e.currentTarget
    dispatch(updateActivePage(Number(clickedPageNum.value)))
    dispatch(getStudies(Number(clickedPageNum.value)))
  }

  return (
    <PageListStyle>
      <LeftButton>
        <BiLeftArrow />
      </LeftButton>

      {pages.map((_, index) => (
        <Page active={currentPage === index + 1} value={index + 1} key={index} onClick={onClickPageNumber}>
          {index + 1}
        </Page>
      ))}
      <RigthButton>
        <BiRightArrow />
      </RigthButton>
    </PageListStyle>
  )
}

export default PageList

const PageListStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
  text-align: center;
`

const LeftButton = styled.button`
  padding: 0.375rem 0.65rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background: ${(props) => props.theme.bgGroundColor2};

  @media ${(props) => props.theme.small} {
    padding: 0.2rem 0.4rem;
    margin: 0.2rem;
  }
`

const RigthButton = styled.button`
  padding: 0.375rem 0.65rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background: ${(props) => props.theme.bgGroundColor2};

  @media ${(props) => props.theme.small} {
    padding: 0.2rem 0.4rem;
    margin: 0.2rem;
  }
`

const Page = styled.button<{ active: boolean }>`
  padding: 0.375rem 0.75rem;
  margin: 0.5rem;

  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background: ${(props) => (props.active ? props.theme.green6 : props.theme.bgGroundColor2)};

  @media ${(props) => props.theme.small} {
    height: 2rem;
    padding: 0.175rem 0.65rem;
    margin: 0.2rem;
    font-size: 0.6rem;
  }
`
