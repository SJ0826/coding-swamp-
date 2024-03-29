import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import authSlice from './auth/authSlice'
import memberSlice from './member/memberSlice'
import userMenuSlice from './userMenuSlice'
import studyFormSlice from './studyFormSlice'
import studyListSlice from './studyListSlice'
import studyItemSlice from './studyItemSlice'
import memberFormSlice from './member/memberFormSlice'

const rootReducer = combineReducers({
  memberFormInfo: memberFormSlice,
  auth: authSlice,
  member: memberSlice,
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
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
export const persistor = persistStore(store)
