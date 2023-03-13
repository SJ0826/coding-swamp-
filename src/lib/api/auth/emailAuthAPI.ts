import { AxiosError, AxiosResponse } from 'axios'
import { EMAILAUTH_URL } from '../../constants/Url'
import HttpClient from '../httpClient'

class EmailAuth extends HttpClient {
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
        alert('이메일 인증이 완료되었습니다.')
        break
      case 201:
        alert('작성하신 이메일로 인증코드가 전송되었습니다.')
        break
      default:
        break
    }
    return response
  }

  private _handleError = (error: AxiosError) => {
    const { response: errorResponse } = error
    const errorCode = errorResponse?.status
    switch (errorCode) {
      case 401:
        alert('인증번호를 다시 확인해주세요. 5분이 경과한 경우 다시 이메일 인증을 진행해주세요.')
        break
      case 409:
        alert('중복된 이메일입니다.')
        break
      default:
        break
    }
  }

  public emailAuth = async (data: string) => {
    const response = await this.instance.post(EMAILAUTH_URL, { email: data })
    return response
  }

  public emailAuthCode = async (data: string) => {
    const params = new URLSearchParams()
    params.append('authCode', data)

    const response = await this.instance.post(
      '/api/auth/email/confirm',
      {},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, params },
    )
    return response
  }
}

const emailAuthAPI = new EmailAuth()

export { emailAuthAPI }
