import {createSlice} from '@reduxjs/toolkit';
import {RootState, UsersInterface} from '../../types';
import {
  GetUserFollowers,
  GetUserFollowings,
  GetUserTweets,
  GetUsers,
  Login,
  Signup,
} from '../../api/userApi';

const initialState: UsersInterface = {
  isAuthenticated: false,
  token: '',
  name: '',
  myTweets: [],
  myFollowings: {
    count: 0,
    followings: [],
  },
  myFollowers: {
    count: 0,
    followers: [],
  },
  users: {
    count: 0,
    users: [],
  },
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
        state.name = payload.name;
        state.token = payload.token;
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

    // get user tweets
    builder
      .addCase(GetUserTweets.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.myTweets = payload.my_tweets;
      })
      .addCase(GetUserTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetUserTweets.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });

    // get user followings
    builder
      .addCase(GetUserFollowings.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.myFollowings = {
          count: payload.count,
          followings: payload.followings,
        };
      })
      .addCase(GetUserFollowings.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetUserFollowings.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });

    // get user followers
    builder
      .addCase(GetUserFollowers.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.myFollowers = {
          count: payload.count,
          followers: payload.followers,
        };
      })
      .addCase(GetUserFollowers.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetUserFollowers.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });

    // get users
    builder
      .addCase(GetUsers.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.users = {
          count: payload.count,
          users: payload.users,
        };
      })
      .addCase(GetUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetUsers.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export const {clearUserState, clearUserUIState} = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
