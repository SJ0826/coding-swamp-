import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

input {
  outline: none;
  border: none;
}

li {
    list-style: none;
  }

button {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
}
`

export default GlobalStyle
