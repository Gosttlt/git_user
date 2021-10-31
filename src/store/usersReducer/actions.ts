import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUsers } from 'models/users'

export const fetchUsers = createAsyncThunk(
  'userSlice/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUsers[]>(
        `https://api.github.com/users?per_page=30`
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Error loading users')
    }
  }
)
