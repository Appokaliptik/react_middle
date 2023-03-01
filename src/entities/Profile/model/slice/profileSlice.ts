import { createSlice } from '@reduxjs/toolkit';
import { ProfileScheme } from '../types/Profile';

const initialState: ProfileScheme = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
