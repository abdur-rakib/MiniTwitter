import {createSlice} from '@reduxjs/toolkit';
import {RootState, UserState} from '../../types';
import {Login, Signup} from '../../api/userApi';

const initialState: UserState = {
  isAuthenticated: false,
  token: '',
  userData: {},
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  // name
  name: 'user',

  // initial state
  initialState,

  // reducers
  reducers: {
    clearUserState: () => {
      return initialState;
    },
    clearUserUIState: state => {
      state.error = '';
      state.isLoading = false;
    },
  },

  // extra reducers
  extraReducers: builder => {
    // login
    builder
      .addCase(Login.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = payload;
      })
      .addCase(Login.pending, state => {
        state.isLoading = true;
      })
      .addCase(Login.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });

    // signup
    builder
      .addCase(Signup.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(Signup.pending, state => {
        state.isLoading = true;
      })
      .addCase(Signup.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export const {clearUserState, clearUserUIState} = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
