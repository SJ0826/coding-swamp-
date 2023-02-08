import { Navigate } from 'react-router-dom'
import { getLocalStorageToken } from 'src/lib/store/localStorage'

interface Props {
  children: JSX.Element
}

const PublicRouter = ({ children }: Props) => {
  const isLogined = getLocalStorageToken()
  return isLogined ? <Navigate to="/" /> : children
}

export default PublicRouter
