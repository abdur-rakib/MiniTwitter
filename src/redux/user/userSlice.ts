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
  myFollowings: [],
  myFollowers: [],
  users: [],
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
        if (payload.page === 1) {
          state.myTweets = payload.my_tweets;
        } else {
          state.myTweets = [...state.myTweets, ...payload.my_tweets];
        }
        state.isLoading = false;
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
        if (payload.page === 1) {
          state.myFollowings = payload.followings;
        } else {
          state.myFollowings = [...state.myFollowings, ...payload.followings];
        }
        state.isLoading = false;
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
        if (payload.page === 1) {
          state.myFollowers = payload.followers;
        } else {
          state.myFollowers = [...state.myFollowers, ...payload.followers];
        }
        state.isLoading = false;
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
        if (payload.page === 1) {
          state.users = payload.users;
        } else {
          state.users = [...state.users, ...payload.users];
        }
        state.isLoading = false;
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
