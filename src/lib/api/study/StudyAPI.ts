import { STUDIES_PER_PAGE } from 'src/lib/constants/constants'
import { STUDY_URL } from 'src/lib/constants/Url'
import { StudyFormParams } from 'src/lib/types/StudyInterface'
import HttpClient from '../httpClient'

class StudyAPI extends HttpClient {
  public postNewStudy = async (data: StudyFormParams) => {
    const response = await this.instance.post(STUDY_URL, data)
    return response
  }

  public getStudyList = (pageNum: number) => {
    const params = new URLSearchParams()
    params.append('page', pageNum.toString())
    params.append('size', STUDIES_PER_PAGE)
    const resposne = this.instance.get(STUDY_URL, { params })
    return resposne
  }

  public getStudyDetailInfoAPI = (studyId: number) => {
    const response = this.instance.get(`${STUDY_URL}/${studyId}`)
    return response
  }

  public patchStudyApplicationFormAPI = (data: { studyId: number; reasonForApplication: string }) => {
    const response = this.instance.patch(`${STUDY_URL}/${data.studyId}/apply`, {
      reasonForApplication: data.reasonForApplication,
    })
    return response
  }

  public getStudiesAppliedFor = () => {
    const response = this.instance.get(`${STUDY_URL}/my/applies`)
    return response
  }

  public getStuduesParticipated = () => {
    const response = this.instance.get(`${STUDY_URL}/my/participates `)
    return response
  }

  public postEditedStudyForm = (data: { studyId: number; studyForm: StudyFormParams }) => {
    this.instance.put(`${STUDY_URL}/${data.studyId}`, data.studyForm)
  }

  public patchStudyApprove = (data: { studyId: number; applicantId: number }) => {
    const response = this.instance.patch(`${STUDY_URL}/${data.studyId}/approve/${data.applicantId}`)
    return response
  }

  public patchKickoutMember = (data: { studyId: number; memberId: number }) => {
    const resposne = this.instance.patch(`${STUDY_URL}/${data.studyId}/kick/${data.memberId}`)
    return resposne
  }

  public deleteStudy = (studyId: number) => {
    this.instance.delete(`${STUDY_URL}/${studyId}`)
  }

  public patchCancelStudyApplication = (studyId: number) => {
    this.instance.patch(`${STUDY_URL}/${studyId}/apply-cancel`)
  }

  public patchWithdrawStudy = async (studyId: number) => {
    const response = await this.instance.patch(`${STUDY_URL}/${studyId}/withdraw`)
    return response
  }
}

const studyAPI = new StudyAPI()

export { studyAPI }
