export interface StudyFormParams {
  title: string
  description: string
  studyType: string
  thumbnail: string
  startDate: string
  endDate: string
  maxMemberCount: string
  tags: string[]
}

export interface StudySearchInfoParams {
  studyId: number
  title: string
  studyType: string
  thumbnail: string
  studyStatus: string
  currentMemberCount: number
  maxMemberCount: number
  startDate: string
  endDate: string
  tags: string[]
}

export interface InfoPerPerson {
  memberId: number
  username: string
  imageUrl: string
  profileUrl: null | string
  participationDate: string
  reasonForApplication: string
  applicationDate: string
}
export interface StudyDetailInfo {
  studyId: number
  title: string
  description: string
  studyType: 'STUDY' | 'MOGAKKO'
  thumbnail: string
  studyStatus: 'COMPLETION' | 'PREPARING' | 'ONGOING'
  currentMemberCount: number
  maxMemberCount: number
  startDate: string
  endDate: string
  owner: Partial<InfoPerPerson>
  participants: Partial<InfoPerPerson>[]
  applicants: Partial<InfoPerPerson>[]
  tags: string[]
  createdAt: string
}
