import { AxiosResponse } from 'axios'

import HttpClient from '../httpClient'
import { EMAILAUTHCODE_URL, EMAILAUTH_URL } from '../../constants/Url'

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
    // 409: 에러코드
    // 401: 이메일코드 만료
    // TODO: http 코드에 따른 응답처리
    return response
  }

  protected _handleError = (error: any) => {
    const { response: errorResponse } = error
    const errorCode = errorResponse.status

    if (errorCode) alert('이메일 인증이 거절되었습니다. 관리자에게 문의해주세요.')

    return errorCode
  }

  public emailAuth = (data: string) => this.instance.post(EMAILAUTH_URL, { email: data })

  public emailAuthCode = (data: string) => this.instance.post(EMAILAUTHCODE_URL, { data })
}

const emailAuthAPI = new EmailAuth()

export { emailAuthAPI }
