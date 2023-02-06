import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userFormSlice from './userFormSlice'

const store = configureStore({
  reducer: {
    userForm: userFormSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
