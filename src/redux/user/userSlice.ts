import {createSlice} from '@reduxjs/toolkit';
import {RootState, UserState} from '../../types';

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
  reducers: {},

  // extra reducers
  extraReducers: _builder => {},
});

// export const {} = userSlice.actions;

export const authSelector = (state: RootState) => state.user;
export default userSlice.reducer;
