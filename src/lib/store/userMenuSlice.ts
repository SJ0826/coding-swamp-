import { createSlice } from '@reduxjs/toolkit'

const initialMenuState = {
  visible: 'hidden',
}

export const userMenuSlice = createSlice({
  name: 'userMenuSlice',
  initialState: initialMenuState,
  reducers: {
    setUserMenuVisibility: (state, { payload }) => {
      state.visible = payload
      return state
    },
  },
})

export const { setUserMenuVisibility } = userMenuSlice.actions
export default userMenuSlice.reducer
