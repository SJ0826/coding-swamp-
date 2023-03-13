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
  cursor: pointer;
  outline: none;
  border: none;

  transition: box-shadow 300ms ease-in-out, 300ms ease-in-out;
}
`

export default GlobalStyle
