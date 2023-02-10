import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { memberAPI } from 'src/lib/api/Member/MemberAPI'
import { EditMemberParam } from 'src/lib/types/UserInterface'

const initialEditMember = {
  value: [
    { key: 'username', value: '', isValidation: false },
    { key: 'profileUrl', value: null },
    { key: 'imageFile', value: null },
    { key: 'imageUrl', value: '' },
    { key: 'isEditMode', value: false },
  ],
}

export const postEditedMember = createAsyncThunk('editMember/postMember', async (memberForm: EditMemberParam) => {
  const response = await memberAPI.postMemberInfo(memberForm)
  return response
})

export const editModeSlice = createSlice({
  name: 'editMember',
  initialState: initialEditMember,
  reducers: {
    toggleEditMode: (state, { payload }) => {
      state.value[4].value = payload
    },
    changeEditForm: (state, { payload }) => {
      state.value = state.value.map((userValue) => {
        if (userValue.key === payload.key) {
          return { ...userValue, value: payload.value }
        }
        return userValue
      })
    },
  },
})

export const { toggleEditMode, changeEditForm } = editModeSlice.actions
export default editModeSlice.reducer
