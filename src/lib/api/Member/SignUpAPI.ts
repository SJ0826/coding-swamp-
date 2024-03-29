import { AxiosError, AxiosResponse } from 'axios'
import { MemberFormParam } from 'src/lib/types/UserInterface'
import HttpClient from '../httpClient'
import { SIGNUP_URL } from '../../constants/Url'

class SignUpAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }

  private _handleResponse = (response: AxiosResponse) => {
    const responseCode = response.status
    switch (responseCode) {
      case 200:
        alert('회원가입이 완료되었습니다. 로그인 페이지로 돌아갑니다.')
        break
      case 201:
        alert('회원가입이 완료되었습니다. 로그인 페이지로 돌아갑니다.')
        break
      default:
        alert('로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요.')
    }

    return response
  }

  protected _handleError = (error: AxiosError) => {
    const { response: errorResponse } = error
    const errorCode = errorResponse?.status

    switch (errorCode) {
      case 400:
        alert('이메일 인증을 완료해 주세요')
        break
      case 409:
        alert('동일한 이메일이 이미 존재합니다.')
        break
      default:
        alert('로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요.')
    }
  }

  public SignUp = (data: Omit<MemberFormParam, 'profileUrl' | 'imageUrl'>) => {
    this.instance.post(SIGNUP_URL, data, { headers: { 'Content-Type': 'multipart/form-data' } })
  }
}

const signUpAPI = new SignUpAPI()

export { signUpAPI }
