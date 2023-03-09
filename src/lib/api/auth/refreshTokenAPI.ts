import { AxiosResponse } from 'axios'
import { setLocalStorageToken } from '../../util/localStorage'
import HttpClient from '../httpClient'
import { GET_REFRESH_URL } from '../../constants/Url'

class RefreshTokenAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse)
  }

  private _handleResponse = (response: AxiosResponse) => {
    setLocalStorageToken(response.data.accessToken)
    return response
  }

  public getRefreshToken = () => {
    this.instance.post(GET_REFRESH_URL)
  }
}

const refreshTokenAPI = new RefreshTokenAPI()

export { refreshTokenAPI }
