import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { memberAPI } from 'src/lib/api/Member/MemberAPI'
import { EditMemberParam } from 'src/lib/types/UserInterface'

const initialEditMember = {
  value: {
    editForm: { username: '', profileUrl: '', imageFile: null },
    isEditMode: false,
  },
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
      state.value.isEditMode = payload
    },
    changeEditForm: (state, { payload }) => {
      state.value.editForm = { ...state.value.editForm, [payload.key]: payload.value }
    },
    allClearEditForm: (state) => {
      state.value = initialEditMember.value
    },
  },
})

export const { toggleEditMode, changeEditForm } = editModeSlice.actions
export default editModeSlice.reducer
