import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { StudyDetailInfo } from '../types/StudyInterface'
import { studyAPI } from '../api/study/StudyAPI'

const initialStudyItem = {
  studyInfo: {
    studyId: 0,
    title: '',
    description: '',
    studyType: 'STUDY',
    thumbnail: '',
    studyStatus: 'COMPLETION',
    currentMemberCount: 0,
    maxMemberCount: 0,
    startDate: '',
    endDate: '',
    owner: { username: '' },
    participants: [],
    applicants: [],
    tags: [],
    createdAt: '',
  } as StudyDetailInfo,
  targetstudyId: 0,
  isOpenStudyModal: false,
}

export const getStudyDetailInfo = createAsyncThunk('studyItem/getStudyInfo', async (studyId: number) => {
  const response = await studyAPI.getStudyDetailInfoAPI(studyId)

  return response
})

export const studyItemSlice = createSlice({
  name: 'studyItem',
  initialState: initialStudyItem,
  reducers: {
    changeTargetStudyId: (state, { payload }) => {
      state.targetstudyId = payload
    },
    toggleStudyModal: (state) => {
      state.isOpenStudyModal = !state.isOpenStudyModal
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudyDetailInfo.fulfilled, (state, { payload }) => {
      state.studyInfo = payload.data
    })
  },
})

export default studyItemSlice.reducer
export const { changeTargetStudyId, toggleStudyModal } = studyItemSlice.actions
