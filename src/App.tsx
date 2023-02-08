import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style/GlobalStyles'
import theme from './style/theme'
import Router from './Router/Router'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
