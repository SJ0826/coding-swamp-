import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { studyAPI } from '../api/study/StudyAPI'

const initialStudyList = {
  value: {
    studyResponses: [
      {
        studyId: 0,
        title: '',
        studyType: '',
        thumbnail: '',
        startDate: '',
        endDate: '',
        tags: [],
        currentMemberCount: 0,
        maxMemberCount: 0,
        createdAt: 0,
        studyStatus: 'PREPARING',
      },
    ],
    totalPage: 0,
    currentPage: 1,
    currentStudyType: 'All',
    isClickStatusFilter: false,
  },
}

export const getStudies = createAsyncThunk('studyList', async (pageNum: number) => {
  const response = await studyAPI.getStudyList(pageNum)
  return response
})

export const studyListSlice = createSlice({
  name: 'studyList',
  initialState: initialStudyList,
  reducers: {
    updateActivePage: (state, { payload }) => {
      state.value.currentPage = payload
    },
    changeCurrentStudyType: (state, { payload }) => {
      state.value.currentStudyType = payload
    },
    changeStatusFilter: (state) => {
      state.value.isClickStatusFilter = !state.value.isClickStatusFilter
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudies.fulfilled, (state, { payload }) => {
      state.value.studyResponses = payload.data.studyResponses
      state.value.totalPage = payload.data.totalPage
      return state
    })
  },
})

export default studyListSlice.reducer
export const { updateActivePage, changeCurrentStudyType, changeStatusFilter } = studyListSlice.actions
