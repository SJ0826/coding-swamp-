import axios, { AxiosInstance } from 'axios'

abstract class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      baseURL: '',
    })
  }
}
// TODO: Refreshtoken 관리: 토큰이 만료되면 refresh token요청

export default HttpClient
