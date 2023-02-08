import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  const SignUpPage = lazy(() => import('../pages/sign/SignUp'))
  const SignInPage = lazy(() => import('../pages/sign/SignIn'))
  const CallBackPage = lazy(() => import('../pages/sign/Callback'))
  const MainPage = lazy(() => import('../pages/main'))
  const loading = () => <>...loading</>

  return (
    <Routes>
      <Route
        path="/signUp"
        element={
          <Suspense fallback={loading()}>
            <SignUpPage />
          </Suspense>
        }
      />
      <Route
        path="/signIn"
        element={
          <Suspense fallback={loading()}>
            <SignInPage />
          </Suspense>
        }
      />
      <Route
        path="/callback"
        element={
          <Suspense fallback={loading()}>
            <CallBackPage />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={loading()}>
            <MainPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default Router
