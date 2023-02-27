import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { StudyWithCondition } from 'src/lib/types/StudyInterface'
import { EditMemberParam, UserInfoInterface } from '../../types/UserInterface'
import { memberAPI } from '../../api/Member/MemberAPI'

const initialMemberInfo = {
  value: {
    memberInfo: {
      email: null,
      githubId: 0,
      memberId: 0,
      username: '',
      imageUrl: '',
      profileUrl: '',
      role: '',
      joinedAt: '',
    } as UserInfoInterface,
    studiesAppliedFor: {
      totalPage: 0,
      studyResponses: [{} as StudyWithCondition],
    },
  },
}

export const getMemberInfo = createAsyncThunk('member/getMember', async () => {
  const response = await memberAPI.getMemberInfo()
  return response
})

export const postMemberInfo = createAsyncThunk('member/postMember', async (data: EditMemberParam) => {
  const resposne = await memberAPI.postMemberInfo(data)
  return resposne
})

export const postEditedMember = createAsyncThunk('editMember/postMember', async (memberForm: EditMemberParam) => {
  const response = await memberAPI.postMemberInfo(memberForm)
  return response
})

export const getStudiesAppliedFor = createAsyncThunk('member/getstudiesAppliedFor', async () => {
  const response = await studyAPI.getStudiesAppliedFor()
  return response.data
})

export const memberSlice = createSlice({
  name: 'member',
  initialState: initialMemberInfo,
  reducers: {
    changeMemberInfo: (state, { payload }) => {
      state.value.memberInfo = { ...state.value.memberInfo, [payload.key]: payload.value }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMemberInfo.fulfilled, (state, { payload }) => {
      state.value.memberInfo = { ...payload }
      return state
    })
    builder.addCase(getStudiesAppliedFor.fulfilled, (state, { payload }) => {
      state.value.studiesAppliedFor = { ...payload }
    })
  },
})

export default memberSlice.reducer

export const { changeMemberInfo } = memberSlice.actions
