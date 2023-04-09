import {createAsyncThunk} from '@reduxjs/toolkit';
import {getService} from '../services/apiServices';

// get user tweets
const GetTweets = createAsyncThunk(
  'tweet/GetTweets',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getService({
        endpoint: 'timeline',
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export {GetTweets};
