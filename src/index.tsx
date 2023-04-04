import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import Page from './components/layout/Page'
import store, { persistor } from './lib/store'
import GlobalStyle from './style/GlobalStyles'
import theme from './style/theme'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <App />
        </Page>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
