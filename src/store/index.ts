import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './usersReducer'
import detalUserReducer from './detalUserReducer'

const rootReducer = combineReducers({
  userReducer,
  detalUserReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
