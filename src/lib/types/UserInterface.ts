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

export interface EditMemberParam {
  profileUrl: string | null
  imageFile: File | null
  username: string
  imageUrl: string
}
export interface UserInfoInterface {
  [key: string]: string | number | null
  imageUrl: string
  profileUrl: string
  username: string
  email: string | null
  githubId: number | null
  joinedAt: string
  memberId: number
  role: string
}

export interface ParticipateParam {
  memberId: number
  username: string
  imageUrl: string
  profileUrl: string | null
  participationDate: string
}
