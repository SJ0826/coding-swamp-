import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInAPI } from 'src/lib/api/auth/SignInAPI'
import { SignInParam } from '../../types/UserInterface'

const initialSignInForm = {
  signInForm: { email: '', password: '' },
  isValidation: {
    email: false,
    password: false,
  },
}

export const postSignInForm = createAsyncThunk('signIn/postUser', (signInForm: SignInParam) => {
  signInAPI.SignIn(signInForm)
})

export const authSlice = createSlice({
  name: 'signInForm',
  initialState: initialSignInForm,
  reducers: {
    changeSignInForm: (state, action: PayloadAction<{ key: string; value: string }>) => {
      state.signInForm = { ...state.signInForm, [action.payload.key]: action.payload.value }
    },
    allClearSignInForm: (state) => {
      state = initialSignInForm
      return state
    },
    isSignInValidation: (state, action: PayloadAction<{ key: string; value: boolean }>) => {
      state.isValidation = { ...state.isValidation, [action.payload.key]: action.payload.value }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSignInForm.fulfilled, (state) => state)
  },
})

export const { changeSignInForm, isSignInValidation, allClearSignInForm } = authSlice.actions
export default authSlice.reducer
