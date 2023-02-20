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
      },
    ],
    totalPage: 0,
    currentPage: 1,
    currentStudyType: 'All',
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
  },
  extraReducers: (builder) => {
    builder.addCase(getStudies.fulfilled, (state, { payload }) => {
      state.value.studyResponses = payload.data.studyResponses
      return state
    })
  },
})

export default studyListSlice.reducer
export const { updateActivePage, changeCurrentStudyType } = studyListSlice.actions
