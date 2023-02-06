import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const InputLabel = styled.span`
  font-size: 14px;
`

export const Input = styled.input`
  width: 300px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 12px;
  :valid {
    background-color: white;
  }
  :invalid {
    background-color: #eff5f5;
  }
`

export const ErrorMessage = styled.div<{ isError: boolean }>`
  width: 300px;
  margin-top: 7px;
  padding-left: 4px;
  display: ${(props) => (props.isError ? 'block' : 'none')};
  font-size: 12px;
  color: #d21111;
`
