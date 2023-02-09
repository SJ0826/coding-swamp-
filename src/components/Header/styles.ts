import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20px;
`
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: inherit;
  height: 100%;

  @media (max-width: 1920px) {
    width: calc(100% - 20rem);
  }

  @media (max-width: 1080px) {
    width: calc(100% - 8rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 3rem);
  }
`

export const Logo = styled.div`
  margin: 0 14px 0 0;
`

export const User = styled.div<{ BGImage: string }>`
  width: 4rem;
  height: 4rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;

  padding-left: 4px;
  border-radius: 50%;
  background-size: cover;
  background-image: url('${(props) => props.BGImage}');
  cursor: pointer;
`
