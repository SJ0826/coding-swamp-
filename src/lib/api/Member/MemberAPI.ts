import decodeJWT from 'src/lib/util/decodeJWT'
import { USER_URL } from 'src/lib/constants/Url'
import HttpClient from '../httpClient'

class MemberAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use()
  }

  public getMemberInfo = async () => {
    const params = new URLSearchParams()
    params.append('memberId', decodeJWT())
    const response = await this.instance.get(USER_URL + decodeJWT().id)
    return response.data
  }
}

const memberAPI = new MemberAPI()

export { memberAPI }
