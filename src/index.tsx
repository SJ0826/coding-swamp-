import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from './App'
import Page from './components/layout/Page'
import store from './lib/store'
import GlobalStyle from './style/GlobalStyles'
import theme from './style/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Page>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Page>
  </Provider>,
)
