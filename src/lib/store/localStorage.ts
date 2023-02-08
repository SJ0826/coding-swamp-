import { USER_KEY } from '../constants/constants'

export const getLocalStorageToken = () => {
  const token = localStorage.getItem(USER_KEY)
  return token
}

export const setLocalStorageToken = (token: string) => localStorage.setItem(USER_KEY, token)
