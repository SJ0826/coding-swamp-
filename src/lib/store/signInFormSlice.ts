import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserParam } from '../types/UserInterface'
import { signInAPI } from '../api/Sign/SignInAPI'

const initialSignInForm = {
  value: [
    { key: 'email', value: '', isValidate: false },
    { key: 'password', value: '', isValidate: false },
  ],
}

export const postSignInForm = createAsyncThunk(
  'signIn/postUser',
  (signInForm: Omit<UserParam, 'username' & 'imageFile'>) => signInAPI.SignIn(signInForm),
)

export const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState: initialSignInForm,
  reducers: {
    changeSignInForm: (state, { payload }) => {
      state.value = state.value.map((userValue) => {
        if (userValue.key === payload.key) {
          return { ...userValue, value: payload.value }
        }
        return userValue
      })
    },
    SignInValidation: (state, { payload }) => {
      state.value = state.value.map((userValue) => {
        if (userValue.key === payload.key) {
          return { ...userValue, isValidate: payload.isValidate }
        }
        return userValue
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSignInForm.fulfilled, (state) => state)
  },
})

export const { changeSignInForm, SignInValidation } = signInFormSlice.actions
export default signInFormSlice.reducer
