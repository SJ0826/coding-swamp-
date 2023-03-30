import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import Page from './components/layout/Page'
import store, { persistor } from './lib/store'
import GlobalStyle from './style/GlobalStyles'
import theme from './style/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
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
)
