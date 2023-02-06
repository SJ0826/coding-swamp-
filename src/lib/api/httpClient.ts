import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

abstract class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      baseURL: 'http://52.79.50.196:8080',
    })
  }
}
// TODO: Refreshtoken 관리: 토큰이 만료되면 refresh token요청

export default HttpClient
