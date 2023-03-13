import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { studyAPI } from 'src/lib/api/study/StudyAPI'
import { StudyWithCondition } from 'src/lib/types/StudyInterface'
import { MemberFormParam, MemberInfoInterface } from '../../types/UserInterface'
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
    } as MemberInfoInterface,
    studiesAppliedFor: {
      totalPage: 0,
      studyResponses: [{} as StudyWithCondition],
    },
    studyParticipated: {
      totalPage: 0,
      studyResponses: [{} as StudyWithCondition],
    },
    targetMemberId: 0,
    targetStudyId: 0,
  },
}

export const getMemberInfo = createAsyncThunk('member/getMember', async () => {
  const response = await memberAPI.getMemberInfo()
  return response
})

export const postEditedMember = createAsyncThunk(
  'editMember/postMember',
  async (memberForm: Omit<MemberFormParam, 'email' & 'password'>) => {
    const response = await memberAPI.postMemberInfo(memberForm)
    return response
  },
)

export const getStudiesAppliedFor = createAsyncThunk('member/getstudiesAppliedFor', async () => {
  const response = await studyAPI.getStudiesAppliedFor()
  return response.data
})

export const getStudiesParticipated = createAsyncThunk('member/getStudiesParticipated', async () => {
  const response = await studyAPI.getStuduesParticipated()
  return response.data
})

export const cancelStudyApplication = createAsyncThunk('studyItem/cancelStudyApplication', (studyId: number) => {
  studyAPI.patchCancelStudyApplication(studyId)
})

export const withdrawStudy = createAsyncThunk('studyItem/withdrawStudy', async (studyId: number) => {
  const response = await studyAPI.patchWithdrawStudy(studyId)
  return response.data
})

export const memberSlice = createSlice({
  name: 'member',
  initialState: initialMemberInfo,
  reducers: {
    changeMemberInfo: (state, { payload }) => {
      state.value.memberInfo = { ...state.value.memberInfo, [payload.key]: payload.value }
    },
    changeTargetedMember: (state, { payload }) => {
      state.value.targetMemberId = payload
    },

    changeTargetStudy: (state, { payload }) => {
      state.value.targetStudyId = payload
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
    builder.addCase(getStudiesParticipated.fulfilled, (state, { payload }) => {
      state.value.studyParticipated = { ...payload }
    })
    builder.addCase(cancelStudyApplication.fulfilled, (state) => {
      const newStudiesAppliedFor = state.value.studiesAppliedFor.studyResponses.filter(
        (participant) => participant.studyId !== state.value.targetStudyId,
      )
      state.value.studiesAppliedFor.studyResponses = newStudiesAppliedFor
    })
    builder.addCase(withdrawStudy.fulfilled, (state) => {
      const newStudyiesParticipanted = state.value.studyParticipated.studyResponses.filter(
        (participant) => participant.studyId !== state.value.targetStudyId,
      )
      state.value.studyParticipated.studyResponses = newStudyiesParticipanted
    })
  },
})

export default memberSlice.reducer

export const { changeMemberInfo, changeTargetedMember, changeTargetStudy } = memberSlice.actions
