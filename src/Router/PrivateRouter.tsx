import { Navigate } from 'react-router-dom'
import { getLocalStorageToken } from 'src/lib/util/localStorage'

interface Props {
  children: JSX.Element
}

const PrivateRouter = ({ children }: Props) => {
  const isLogined = getLocalStorageToken()
  return isLogined ? children : <Navigate to="/signIn" />
}

export default PrivateRouter
