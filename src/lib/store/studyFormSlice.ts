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
  },
})

export default studyFormSlice.reducer

export const { changeStudyForm } = studyFormSlice.actions
