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

export interface SignInParam {
  email: string
  password: string
}

export interface UserInfoInterface {
  [key: string]: string | number | null
  email: string | null
  githubId: number | null
  imageUrl: string
  joinedAt: string
  memberId: number
  profileUrl: string | null
  role: string
  username: string
}
