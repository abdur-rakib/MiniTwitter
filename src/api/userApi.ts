import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginValuesType, SignupValuesType} from '../types';
import {postService} from '../services/apiServices';

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
      return {token: response, name};
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

export {Login, Signup};
