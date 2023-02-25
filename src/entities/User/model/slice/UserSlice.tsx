import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from '../types/UserScheme';

const initialState: UserScheme = {};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
