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
  createdAt: string
}
