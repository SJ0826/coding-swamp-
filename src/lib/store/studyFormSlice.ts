import { createSlice } from '@reduxjs/toolkit'

const initialstudyForm = {
  value: {
    title: '',
    description: '',
    studyType: '',
    thumbnail: '',
    startDate: '',
    endDate: '',
    maxMemberCount: '',
    tags: [],
  },
}

export const studyFormSlice = createSlice({
  name: 'studyForm',
  initialState: initialstudyForm,
  reducers: {
    changeStudyForm: (state, { payload }) => {
      state.value = { ...state.value, [payload.key]: payload.value }
    },
    allClearForm: (state) => {
      state.value = {
        title: '',
        description: '',
        studyType: '',
        thumbnail: '',
        startDate: '',
        endDate: '',
        maxMemberCount: '',
        tags: [],
      }
    },
  },
})

export default studyFormSlice.reducer

export const { changeStudyForm } = studyFormSlice.actions
