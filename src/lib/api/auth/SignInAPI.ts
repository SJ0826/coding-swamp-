import { AxiosError, AxiosResponse } from 'axios'
import { SignInParam } from 'src/lib/types/UserInterface'
import { setLocalStorageToken } from 'src/lib/util/localStorage'
import { AUTH_URL } from 'src/lib/constants/Url'
import HttpClient from '../httpClient'

class SignInAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }

  private _handleResponse = (response: AxiosResponse) => {
    setLocalStorageToken(response.data.accessToken)
    return response
  }

  protected _handleError = (error: AxiosError) => {
    const { response: errorResponse } = error
    const errorCode = errorResponse?.status

    switch (errorCode) {
      case 401:
        alert('회원정보가 없습니다. 회원가입을 진행해 주세요.')
        break
      default:
        alert('요청하신 작업을 수행할 수 없습니다. 관리자에게 문의해주세요.')
        break
    }
    return errorCode
  }

  public SignIn = (data: SignInParam) => this.instance.post(`${AUTH_URL}login/common`, data)

  public gitHubLogin = (code: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined) =>
    this.instance.post(
      `${AUTH_URL}/login/github?code=${code}`,
      {},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    )
}

const signInAPI = new SignInAPI()

export { signInAPI }
