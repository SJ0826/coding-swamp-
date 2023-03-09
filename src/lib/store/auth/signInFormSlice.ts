import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInAPI } from 'src/lib/api/auth/SignInAPI'
import { SignInParam } from '../../types/UserInterface'

type SignInFormType = {
  key: 'email' | 'password'
  value: string
  isValidate: boolean
}

const initialSignInForm = {
  value: [
    { key: 'email', value: '', isValidate: false } as SignInFormType,
    { key: 'password', value: '', isValidate: false } as SignInFormType,
  ],
}

export const postSignInForm = createAsyncThunk('signIn/postUser', (signInForm: SignInParam) => {
  signInAPI.SignIn(signInForm)
})

export const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState: initialSignInForm,
  reducers: {
    changeSignInForm: (state, action: PayloadAction<{ key: string; value: string }>) => {
      state.value = state.value.map((userValue) =>
        userValue.key === action.payload.key ? { ...userValue, value: action.payload.value } : userValue,
      )
    },
    SignInValidation: (state, action: PayloadAction<{ key: string; isValidate: boolean }>) => {
      state.value = state.value.map((userValue) =>
        userValue.key === action.payload.key ? { ...userValue, isValidate: action.payload.isValidate } : userValue,
      )
    },
    allClearSignInForm: (state) => {
      state.value = state.value.map((userValue) => ({ ...userValue, value: '' }))
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSignInForm.fulfilled, (state) => state)
  },
})

export const { changeSignInForm, SignInValidation, allClearSignInForm } = signInFormSlice.actions
export default signInFormSlice.reducer
