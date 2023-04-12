import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {authApi} from '../../api/authApi';

const initialState = {
  name: null,
  token: null,
  isAuthenticated: false,
} as {name: string | null; token: string | null; isAuthenticated: boolean};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, {meta, payload}) => {
        state.name = meta.arg.originalArgs.email.split('@')[0];
        state.token = payload.token;
        state.isAuthenticated = true;
      },
    );
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;

export const authSelector = (state: RootState) => state.auth;
