import { IUsers } from 'models/users'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './actions'

interface IinitialState {
  users: IUsers[]
  isLoading: boolean
  error: string
  currentPage: number
  portionUsers: number
  totalPage: number
}

const initialState: IinitialState = {
  users: [],
  isLoading: false,
  error: '',
  currentPage: 1,
  portionUsers: 8,
  totalPage: 1,
}

const usersSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCurrentPageNumber(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
  extraReducers: {
    [fetchUsers.pending.type]: state => {
      state.isLoading = true
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUsers[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const { setCurrentPageNumber } = usersSlice.actions

export default usersSlice.reducer
