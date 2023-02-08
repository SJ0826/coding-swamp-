import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserParam } from '../types/UserInterface'
import { signUpAPI } from '../api/sign/SignUpAPI'

const initialValidation = {
  value: [
    { key: 'imageFile', value: null, isValidate: true },
    { key: 'username', value: '', isValidate: false, emailAuth: false },
    { key: 'email', value: '', isValidate: false },
    { key: 'password', value: '', isValidate: false },
  ],
}

export const postUserForm = createAsyncThunk('user/postUser', (userForm: UserParam) => signUpAPI.SignUp(userForm))

export const userFormSlice = createSlice({
  name: 'userValidation',
  initialState: initialValidation,
  reducers: {
    changeUserValue: (state, { payload }) => {
      state.value = state.value.map((userValue) => {
        if (userValue.key === payload.key) {
          return { ...userValue, value: payload.value }
        }
        return userValue
      })
    },
    userValidation: (state, { payload }) => {
      state.value = state.value.map((userValue) => {
        if (userValue.key === payload.key) {
          return { ...userValue, isValidate: payload.isValidate }
        }
        return userValue
      })
    },
    isAuthorizatedEmail: (state, { payload }) => {
      state.value = state.value.map((userValue) => {
        if (userValue.key === 'email') {
          return { ...userValue, emailAuth: payload }
        }
        return userValue
      })
    },
    allClearSignUpForm: (state) => {
      state.value = state.value.map((userValue) => ({ ...userValue, value: '' }))
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserForm.fulfilled, (state) => state)
  },
})

export const { changeUserValue, userValidation, isAuthorizatedEmail, allClearSignUpForm } = userFormSlice.actions
export default userFormSlice.reducer
