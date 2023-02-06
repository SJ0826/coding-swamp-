import styled from 'styled-components'

export const EmailAuthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 4px;
`

export const EmailAuthButton = styled.button`
  border: none;
  border-radius: 20px;
  color: #61876e;
  font-weight: bold;
  background-color: white;

  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;

  :hover {
    background: #f4ead5;
    cursor: pointer;
  }
`

export const EmailAuthMessage = styled.span``
