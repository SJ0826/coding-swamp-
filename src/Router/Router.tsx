import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  const SignUpPage = lazy(() => import('../pages/sign/SignUp'))
  const SignInPage = lazy(() => import('../pages/sign/SignIn'))
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
    </Routes>
  )
}

export default Router
