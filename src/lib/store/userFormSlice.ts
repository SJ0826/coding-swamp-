import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserParam } from '../util/types/UserInterface'
import { signUpAPI } from '../api/SignUp/SignUpAPI'

const initialUserForm: UserParam = {
  imageFile: null,
  username: '',
  email: '',
  password: '',
}

export const postUserForm = createAsyncThunk('user/postUser', (userForm: UserParam) => signUpAPI.SignUp(userForm))

const userFormSlice = createSlice({
  name: 'userForm',
  initialState: initialUserForm,
  reducers: {
    changeImage: (state, { payload }) => {
      state = { ...state, imageFile: payload }
      return state
    },
    changeUserName: (state, { payload }) => {
      state = { ...state, username: payload }
      return state
    },
    changeEmail: (state, { payload }) => {
      state = { ...state, email: payload }
      return state
    },
    changePassword: (state, { payload }) => {
      state = { ...state, password: payload }
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserForm.fulfilled, (state) => state)
  },
})

export const { changeImage, changeEmail, changeUserName, changePassword } = userFormSlice.actions
export default userFormSlice.reducer
