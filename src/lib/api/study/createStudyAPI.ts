import StudyFormParams from 'src/lib/types/StudyInterface'
import HttpClient from '../httpClient'

class CreateStudyAPI extends HttpClient {
  public constructor() {
    super()

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleRequest)
  }

  public postNewStudy = async (data: StudyFormParams) => {
    const response = await this.instance.post('/api/study', data)
    return response
  }
}

const createStudyAPI = new CreateStudyAPI()

export { createStudyAPI }
