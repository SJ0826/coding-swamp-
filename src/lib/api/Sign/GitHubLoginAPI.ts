import { AxiosResponse } from 'axios'
import { GITHUB_AUTH_URL } from 'src/lib/constants/Url'
import { setLocalStorageToken } from 'src/lib/util/localStorage'
import HttpClient from '../httpClient'

class GitHubLoginAPI extends HttpClient {
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

    if (errorCode) alert('요청하신 작업을 수행할 수 없습니다. 관리자에게 문의해주세요.')

    return errorCode
  }

  public gitHubLogin = (code: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined) =>
    this.instance.post(
      `${GITHUB_AUTH_URL}?code=${code}`,
      {},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    )
}

const gitHubLoginAPI = new GitHubLoginAPI()

export { gitHubLoginAPI }
