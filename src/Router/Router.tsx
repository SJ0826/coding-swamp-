import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const Router = () => {
  const SignUpPage = lazy(() => import('../pages/sign/SignUp/index'))
  const SignInPage = lazy(() => import('../pages/sign/SignIn'))
  const CallBackPage = lazy(() => import('../pages/sign/Callback'))
  const MainPage = lazy(() => import('../pages/main'))
  const MemberInfoPage = lazy(() => import('../pages/memberInfo'))
  const CreateStudy = lazy(() => import('../pages/createStudy/index'))
  const StudyProfile = lazy(() => import('../pages/study/Profile'))
  const StudySettings = lazy(() => import('../pages/study/Settings'))
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
      <Route
        path="/createStudy"
        element={
          <Suspense fallback={loading()}>
            <PrivateRouter>
              <CreateStudy />
            </PrivateRouter>
          </Suspense>
        }
      />
      <Route
        path="/study/home"
        element={
          <Suspense fallback={loading()}>
            <PrivateRouter>
              <StudyProfile />
            </PrivateRouter>
          </Suspense>
        }
      />
      <Route
        path="/study/settings"
        element={
          <Suspense fallback={loading()}>
            <PrivateRouter>
              <StudySettings />
            </PrivateRouter>
          </Suspense>
        }
      />
    </Routes>
  )
}

export default Router
