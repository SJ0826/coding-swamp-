import decodeJWT from 'src/lib/util/decodeJWT'
import { EDIT_MEMBER_URL, USER_URL } from 'src/lib/constants/Url'
import { type } from 'src/pages/memberInfo'
import { AxiosRequestConfig } from 'axios'
import HttpClient from '../httpClient'

class MemberAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleRequest)
  }

  protected _handleRequest = (config: AxiosRequestConfig | any) => {
    if (config.headers) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  }

  public getMemberInfo = async () => {
    const response = await this.instance.get(USER_URL + decodeJWT().id)
    return response.data
  }

  public postMemberInfo = async (data: type) => {
    const profileUrl = data.profileUrl ? data.profileUrl : ''
    const payload = { imageFile: data.imageFile }
    const response = await this.instance.post(
      `${EDIT_MEMBER_URL}?username=${decodeURI(data.username)}&profileUrl=${profileUrl}`,
      payload,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    )

    return response.data
  }
}

const memberAPI = new MemberAPI()

export { memberAPI }
