import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userFormSlice from './signForm/userFormSlice'
import signInFormSlice from './signForm/signInFormSlice'
import { memberInfoSlice } from './member/memberSlice'
import editModeSlice from './member/editModeSlice'
import userMenuSlice from './userMenuSlice'

const rootReducer = combineReducers({
  userForm: userFormSlice,
  signInForm: signInFormSlice,
  memberInfo: memberInfoSlice.reducer,
  editMode: editModeSlice,
  userMenu: userMenuSlice,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
