import { STUDIES_PER_PAGE } from 'src/lib/constants/constants'
import { STUDY_URL } from 'src/lib/constants/Url'
import { StudyFormParams } from 'src/lib/types/StudyInterface'
import HttpClient from '../httpClient'

class StudyAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleRequest)
  }

  public postNewStudy = async (data: StudyFormParams) => {
    const response = await this.instance.post(STUDY_URL, data)
    return response
  }

  public getStudyList = (pageNum: number) => {
    const params = new URLSearchParams()
    params.append('page', pageNum.toString())
    params.append('size', STUDIES_PER_PAGE)
    const resposne = this.instance.get(STUDY_URL, { params })
    return resposne
  }
}

const studyAPI = new StudyAPI()

export { studyAPI }