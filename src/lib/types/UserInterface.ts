export interface SignInParam {
  email: string
  password: string
}

export interface ValidationParam extends SignInParam {
  username: string
}

export interface MemberFormParam extends ValidationParam {
  profileUrl: string | null
  imageUrl: string
  imageFile: File | null
}

export interface ParticipateParam {
  memberId: number
  username: string
  imageUrl: string
  profileUrl: string | null
  participationDate: string
}
export interface MemberInfoInterface {
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
