import { createSlice } from '@reduxjs/toolkit'
import theme from 'src/style/theme'

const initialstudyForm = {
  value: {
    title: '',
    description: '',
    studyType: 'STUDY',
    thumbnail: theme.mainColor,
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
        studyType: 'STUDY',
        thumbnail: theme.mainColor,
        startDate: '',
        endDate: '',
        maxMemberCount: '',
        tags: [],
      }
    },
  },
})

export default studyFormSlice.reducer

export const { changeStudyForm, allClearForm } = studyFormSlice.actions
