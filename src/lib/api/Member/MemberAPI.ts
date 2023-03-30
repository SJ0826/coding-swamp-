import decodeJWT from 'src/lib/util/decodeJWT'
import { EDIT_MEMBER_URL, USER_URL } from 'src/lib/constants/Url'
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
    const response = await this.instance.get(USER_URL + decodeJWT().id)
    return response.data
  }

  public postMemberInfo = async (data: { username: string; imageFile: File | object }) => {
    const params = new URLSearchParams()
    params.append('username', data.username)
    this.instance.post(
      EDIT_MEMBER_URL,
      { imageFile: data.imageFile },
      { headers: { 'Content-Type': 'multipart/form-data' }, params },
    )
  }

  public deleteMember = () => {
    const response = this.instance.delete(USER_URL)
    return response
  }
}

const memberAPI = new MemberAPI()

export { memberAPI }
