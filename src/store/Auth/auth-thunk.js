import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn } from 'services/auth-service';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await logIn(body);
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProfile();
});
