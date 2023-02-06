import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyles'
import theme from './style/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
      <div>test</div>
    </>
  )
}

export default App
