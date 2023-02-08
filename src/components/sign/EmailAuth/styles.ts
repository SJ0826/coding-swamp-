import styled from 'styled-components'

export const EmailAuthButton = styled.button`
  width: 300px;
  border: none;
  display: flex;
  justify-content: left;
  color: #61876e;
  font-weight: bold;

  background-color: white;
  margin: 2px;

  :active {
    color: black;
  }
`
export const EmailAuthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 4px;
`

export const EmailAuthInput = styled.input`
  width: 70%;
  height: 30px;
  text-align: center;

  border-bottom: 1px solid black;

  font-size: 16px;
`

export const AuthCodeButton = styled.button`
  width: 25%;
  margin: 0 5px 0 5px;

  border-radius: 10px;

  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px gray inset;
    color: white;
  }
`

export const authResultMessage = styled.span<{ isAuthorizate: boolean }>`
  width: 100%;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
  color: #faab78;

  display: ${(props) => (props.isAuthorizate ? '' : 'none')};
`

export const AuthCodeMessage = styled.div`
  width: 100%;
  margin: 4px 0 8px; 0;


  font-size: 14px;
  color: gray;
`
