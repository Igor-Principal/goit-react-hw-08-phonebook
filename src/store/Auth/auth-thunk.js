import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn, logOut } from 'services/auth-service';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { dispatch }) => {
    const data = await logIn(body);
    dispatch(getProfileThunk());
    return data;
  }
);

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProfile();
});

export const loginOutThunk = createAsyncThunk('auth/logOut', async () => {
  return await logOut();
});
