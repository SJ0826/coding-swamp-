import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type } from 'src/pages/memberInfo'
import { UserInfoInterface } from '../../types/UserInterface'
import { memberAPI } from '../../api/Member/MemberAPI'

const initialMemberInfo: UserInfoInterface = {
  email: null,
  githubId: 0,
  memberId: 0,
  username: '',
  imageUrl: '',
  profileUrl: '',
  role: '',
  joinedAt: '',
}

export const getMemberInfo = createAsyncThunk('memberInfo/getMember', async () => {
  const response = await memberAPI.getMemberInfo()
  return response
})

export const postMemberInfo = createAsyncThunk('memberInfo/postMember', async (data: type) => {
  const resposne = await memberAPI.postMemberInfo(data)
  return resposne
})

export const memberInfoSlice = createSlice({
  name: 'memberInfo',
  initialState: initialMemberInfo,
  reducers: {
    changeMemberInfo: (state, { payload }) => {
      const key = payload.id
      state[key] = payload.value
      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMemberInfo.fulfilled, (state, { payload }) => {
      state = { ...payload }
      return state
    })
    builder.addCase(postMemberInfo.fulfilled, (state, { payload }) => {
      state = { ...payload }
      return state
    })
  },
})

export default memberInfoSlice.reducer

export const { changeMemberInfo } = memberInfoSlice.actions
