import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginOutThunk, loginThunk } from './auth-thunk';
import { initialStateAuth } from './initialStateAuth';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
  state.isLoad = true;
};
const handleFulfilledLogOut = state => {
  state.token = '';
  state.profile = null;
  state.isLoad = false;
  state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlise = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(loginOutThunk.fulfilled, handleFulfilledLogOut)
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getProfileThunk.pending,
          loginOutThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          getProfileThunk.rejected,
          loginOutThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlise.reducer;

export const { logOut } = authSlise.actions;
