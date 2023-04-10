import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginValuesType, SignupValuesType} from '../types';
import {getService, postService} from '../services/apiServices';
import {SIZE} from '../utils/constants';

// login with email and password
const Login = createAsyncThunk(
  'user/Login',
  async (data: LoginValuesType, {rejectWithValue}) => {
    try {
      const response = await postService({
        endpoint: 'login',
        data,
      });
      const name = data.email.split('@')[0];
      return {...response, name};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// signup with username, email and password
const Signup = createAsyncThunk(
  'user/Signup',
  async (data: SignupValuesType, {rejectWithValue}) => {
    try {
      const response = await postService({
        endpoint: 'signup',
        data,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get user tweets
const GetUserTweets = createAsyncThunk(
  'user/GetUserTweets',
  async (page: number, {rejectWithValue}) => {
    try {
      const response = await getService({
        endpoint: `my-tweets?page=${page}&size=${SIZE}`,
      });
      return {...response, page};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get user followings
const GetUserFollowings = createAsyncThunk(
  'user/GetUserFollowings',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getService({
        endpoint: 'following',
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get user followers
const GetUserFollowers = createAsyncThunk(
  'user/GetUserFollowers',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getService({
        endpoint: 'followers',
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get user followers
const GetUsers = createAsyncThunk(
  'user/GetUsers',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getService({
        endpoint: 'users',
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export {
  Login,
  Signup,
  GetUserTweets,
  GetUserFollowings,
  GetUserFollowers,
  GetUsers,
};
