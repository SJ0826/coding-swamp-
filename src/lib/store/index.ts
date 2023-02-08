import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userFormSlice from './signForm/userFormSlice'
import signInFormSlice from './signForm/signInFormSlice'

const store = configureStore({
  reducer: {
    userForm: userFormSlice,
    signInForm: signInFormSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
