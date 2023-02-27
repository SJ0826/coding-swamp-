import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userFormSlice from './signForm/userFormSlice'
import signInFormSlice from './signForm/signInFormSlice'
import memberSlice from './member/memberSlice'
import editModeSlice from './member/editModeSlice'
import userMenuSlice from './userMenuSlice'
import studyFormSlice from './studyFormSlice'
import studyListSlice from './studyListSlice'
import studyItemSlice from './studyItemSlice'

const rootReducer = combineReducers({
  userForm: userFormSlice,
  signInForm: signInFormSlice,
  member: memberSlice,
  editMode: editModeSlice,
  userMenu: userMenuSlice,
  studyForm: studyFormSlice,
  studyList: studyListSlice,
  studyItem: studyItemSlice,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
