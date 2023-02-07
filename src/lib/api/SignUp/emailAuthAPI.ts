import { AxiosResponse } from 'axios'
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

  private _handleResponse = (response: AxiosResponse | any) => {
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
    return responseCode
  }

  private _handleError = (error: any) => {
    const { response: errorResponse } = error
    const errorCode = errorResponse.status

    if (errorCode === 401) {
      alert('인증번호를 다시 확인해주세요. 5분이 경과한 경우 다시 이메일 인증을 진행해주세요.')
    }
  }

  public emailAuth = (data: string) => this.instance.post(EMAILAUTH_URL, { email: data })

  public emailAuthCode = async (data: string) => {
    const params = new URLSearchParams()
    params.append('authCode', data)

    await this.instance.post(
      '/api/auth/email/confirm',
      {},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, params },
    )
  }
}

const emailAuthAPI = new EmailAuth()

export { emailAuthAPI }
