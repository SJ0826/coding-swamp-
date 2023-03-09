import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import userFormSlice from './member/userFormSlice'
import signInFormSlice from './auth/authSlice'
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

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['member'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
export const persistor = persistStore(store)
