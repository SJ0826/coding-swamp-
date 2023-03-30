import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signUpAPI } from 'src/lib/api/Member/SignUpAPI'
import { MemberFormParam } from 'src/lib/types/UserInterface'

const initialMemberForm = {
  memberForm: {
    imageFile: {},
    username: '',
    email: '',
    password: '',
  } as Omit<MemberFormParam, 'profileUrl' & 'imageUrl'>,
  isMemberFormValidation: {
    username: false,
    email: false,
    password: false,
  },
  emailAuth: false,
  isEditMode: false,
}

export const postUserForm = createAsyncThunk(
  'user/postUser',
  (userForm: Omit<MemberFormParam, 'profileUrl' | 'imageUrl'>) => signUpAPI.SignUp(userForm),
)

export const memberFormSlice = createSlice({
  name: 'userValidation',
  initialState: initialMemberForm,
  reducers: {
    changeUserValue: (state, action: PayloadAction<{ key: string; value: string | File | null }>) => {
      state.memberForm = { ...state.memberForm, [action.payload.key]: action.payload.value }
    },

    MemberFormValidation: (state, action: PayloadAction<{ key: string; value: boolean }>) => {
      state.isMemberFormValidation = { ...state.isMemberFormValidation, [action.payload.key]: action.payload.value }
    },
    isAuthorizatedEmail: (state, action: PayloadAction<boolean>) => {
      state.emailAuth = action.payload
    },
    isEditMode: (state, action: PayloadAction<boolean>) => {
      state.isEditMode = action.payload
    },
    allClearSignUpForm: (state) => {
      state = initialMemberForm
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUserForm.fulfilled, (state) => state)
  },
})

export const { changeUserValue, MemberFormValidation, isAuthorizatedEmail, allClearSignUpForm, isEditMode } =
  memberFormSlice.actions
export default memberFormSlice.reducer
