import {createAsyncThunk} from '@reduxjs/toolkit';
import {getService, postService} from '../services/apiServices';
import {SIZE} from '../utils/constants';

// get user tweets
const GetTweets = createAsyncThunk(
  'tweet/GetTweets',
  async (page: number, {rejectWithValue}) => {
    try {
      const response = await getService({
        endpoint: `timeline?page=${page}&size=${SIZE}`,
      });
      return {...response, page};
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// create tweet
const AddTweet = createAsyncThunk(
  'tweet/AddTweet',
  async (data: {content: string}, {rejectWithValue}) => {
    try {
      const response = await postService({
        endpoint: 'tweet',
        data,
      });
      return response.tweet;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export {GetTweets, AddTweet};
