import decodeJWT from 'src/lib/util/decodeJWT'
import { EDIT_MEMBER_URL, USER_URL } from 'src/lib/constants/Url'
import { EditMemberParam } from 'src/lib/types/UserInterface'
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

  public postMemberInfo = async (data: EditMemberParam) => {
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
