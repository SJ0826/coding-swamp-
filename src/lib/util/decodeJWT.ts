import { getLocalStorageToken } from './localStorage'

const decodeJWT = () => {
  const token = getLocalStorageToken()

  const decodedToken = JSON.parse(atob(token!.split('.')[1]))

  return decodedToken
}

export default decodeJWT
