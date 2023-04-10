import {createSlice} from '@reduxjs/toolkit';
import {RootState, TweetInterface} from '../../types';
import {AddTweet, GetTweets} from '../../api/tweetApi';

const initialState: TweetInterface = {
  tweets: [],
  isLoading: false,
  error: '',
};

const tweetSlice = createSlice({
  // name
  name: 'tweet',

  // initial state
  initialState,

  // reducers
  reducers: {
    clearTweetState: () => {
      return initialState;
    },
    clearTweetUIState: state => {
      state.error = '';
      state.isLoading = false;
    },
  },

  // extra reducers
  extraReducers: builder => {
    // get tweets
    builder
      .addCase(GetTweets.fulfilled, (state, {payload}) => {
        if (payload.page === 1) {
          state.tweets = payload.timeline;
        } else {
          state.tweets = [...state.tweets, ...payload.timeline];
        }
        state.isLoading = false;
      })
      .addCase(GetTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(GetTweets.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });

    // add tweet
    builder
      .addCase(AddTweet.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.tweets = [payload, ...state.tweets];
      })
      .addCase(AddTweet.pending, state => {
        state.isLoading = true;
      })
      .addCase(AddTweet.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export const {clearTweetState, clearTweetUIState} = tweetSlice.actions;

export const tweetSelector = (state: RootState) => state.tweet;
export default tweetSlice.reducer;
