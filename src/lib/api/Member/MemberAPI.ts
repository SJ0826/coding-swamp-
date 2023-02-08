import { AxiosResponse } from 'axios'
import decodeJWT from 'src/lib/util/decodeJWT'
import { USER_URL } from 'src/lib/constants/Url'
import HttpClient from '../httpClient'

class InquiryMemberAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use()
  }

  public inquiryMember = async () => {
    const params = new URLSearchParams()
    params.append('memberId', decodeJWT())
    const response = await this.instance.get(USER_URL + decodeJWT().id)
    return response.data
  }
}

const inquiryMemberAPI = new InquiryMemberAPI()

export { inquiryMemberAPI }
