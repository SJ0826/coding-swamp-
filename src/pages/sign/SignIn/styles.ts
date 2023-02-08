import styled from 'styled-components'
import github from '../../../lib/assets/image/github.png'

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 30px;
`

export const Logo = styled.div``

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  text-align: center;
`

export const DivisionLine = styled.hr`
  display: block;
  width: 320px;
  margin: 12px;
`
export const Footer = styled.div`
  width: 320px;
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 14px;
`
export const GoToSignUpButton = styled.span`
  cursor: pointer;
  :active {
    color: black;
  }
`

export const GitHubLogin = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px 0 20px 0;

  border-radius: 50%;
  background-image: url(${github});
  background-size: cover;
  cursor: pointer;
`
