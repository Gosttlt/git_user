import { IDetalUser } from 'models/detalUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDetalUser } from './actions'

interface IinitialState {
  isLoading: boolean
  error: string
  user: IDetalUser | null
}

const initialState: IinitialState = {
  isLoading: false,
  error: '',
  user: null,
}

const detalUserSlice = createSlice({
  name: 'detalUserSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetalUser.pending.type]: state => {
      state.isLoading = true
    },
    [fetchDetalUser.fulfilled.type]: (
      state,
      action: PayloadAction<IDetalUser>
    ) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [fetchDetalUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default detalUserSlice.reducer
