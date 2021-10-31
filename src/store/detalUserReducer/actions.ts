import { IDetalUser } from 'models/detalUser'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDetalUser = createAsyncThunk(
  'detalUserSlice/fetchDetalUser',
  async (login: string, thunkAPI) => {
    try {
      const response = await axios.get<IDetalUser>(
        `https://api.github.com/users/${login}`
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Еrror loading user ')
    }
  }
)
