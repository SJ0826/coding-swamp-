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
export const EmailAuthForm = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? '' : 'none')};
  width: 100%;
  padding: 0.5rem;
  margin: 0.3rem 0rem;
  border: 1px solid ${(props) => props.theme.border2};

  background: ${(props) => props.theme.bgGroundColor2};
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

export const MessageWrapper = styled.div`
  width: 300px;
  display: flex;
`

export const authResultMessage = styled.span`
  width: 100%;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
  color: #faab78;
`

export const AuthCodeMessage = styled.div`
  width: 100%;
  margin: 4px 0 8px; 0;
  font-size: 14px;
  color: gray;
`
