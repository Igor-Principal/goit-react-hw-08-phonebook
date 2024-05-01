import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginOutThunk, loginThunk } from './auth-thunk';
import { initialStore } from 'store/initialState';

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
  initialState: initialStore.auth,
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
          loginOutThunk.rejected,
          getProfileThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlise.reducer;

export const { logOut } = authSlise.actions;
