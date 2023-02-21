import { createSlice } from '@reduxjs/toolkit'
import { StudyDetailInfo } from '../types/StudyInterface'

const initialStudyItem = {
  studyInfo: {} as StudyDetailInfo,
  targetstudyId: 0,
  isOpenStudyModal: false,
}

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
})

export default studyItemSlice.reducer
export const { changeTargetStudyId } = studyItemSlice.actions
