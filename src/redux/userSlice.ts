// src/store/userSlice.ts

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

// Async action to handle user registration
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/register', userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface UserState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  user: { name: string; email: string } | null;
  error: string | null;
}

const initialState: UserState = {
  status: 'idle',
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
