import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { getLocalStorageToken } from '../util/localStorage'

declare module 'axios' {
  type AxiosRequest<T = any> = Promise<T>
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      baseURL: '',
    })

    this._initializeRequestInterceptor()
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest)
  }

  protected _handleRequest = (config: AxiosRequestConfig | any) => {
    const accessToken = getLocalStorageToken()
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`
      config.headers['Content-Type'] = `application/json`
    }
    return config
  }
}

export default HttpClient
