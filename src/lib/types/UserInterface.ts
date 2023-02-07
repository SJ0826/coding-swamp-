export interface ValidationParam {
  username: boolean
  email: boolean
  password: boolean
}

export interface UserParam {
  imageFile: File | null | string
  username: string
  email: string
  password: string
}
