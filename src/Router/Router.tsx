import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const Router = () => {
  const SignUpPage = lazy(() => import('../pages/sign/SignUp'))
  const SignInPage = lazy(() => import('../pages/sign/SignIn'))
  const CallBackPage = lazy(() => import('../pages/sign/Callback'))
  const MainPage = lazy(() => import('../pages/main'))
  const MemberInfoPage = lazy(() => import('../pages/memberInfo'))
  const loading = () => <>...loading</>

  return (
    <Routes>
      <Route
        path="/signUp"
        element={
          <Suspense fallback={loading()}>
            <PublicRouter>
              <SignUpPage />
            </PublicRouter>
          </Suspense>
        }
      />
      <Route
        path="/signIn"
        element={
          <Suspense fallback={loading()}>
            <PublicRouter>
              <SignInPage />
            </PublicRouter>
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
            <PrivateRouter>
              <MainPage />
            </PrivateRouter>
          </Suspense>
        }
      />
      <Route
        path="/user"
        element={
          <Suspense fallback={loading()}>
            <PrivateRouter>
              <MemberInfoPage />
            </PrivateRouter>
          </Suspense>
        }
      />
    </Routes>
  )
}

export default Router
