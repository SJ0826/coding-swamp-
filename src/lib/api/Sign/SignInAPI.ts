import { AxiosResponse } from 'axios'
import { SignInParam } from 'src/lib/types/UserInterface'
import { SIGNIN_URL } from 'src/lib/constants/Url'
import { setLocalStorageToken } from 'src/lib/util/localStorage'
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

  protected _handleError = (error: any) => {
    const { response: errorResponse } = error
    const errorCode = errorResponse.status

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

  public SignIn = (data: SignInParam) => this.instance.post(SIGNIN_URL, data)
}

const signInAPI = new SignInAPI()

export { signInAPI }
