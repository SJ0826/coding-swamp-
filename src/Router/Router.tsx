import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  const SignUpPage = lazy(() => import('../pages/sign/SignUp'))
  const loading = () => <>...loading</>

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={loading()}>
            <SignUpPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default Router
