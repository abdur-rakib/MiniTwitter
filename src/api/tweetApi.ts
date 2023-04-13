import {api} from '.';
import {TweetType} from '../types';

export const tweetsApi = api.injectEndpoints({
  endpoints: build => ({
    getTweets: build.query<{count: number; timeline: TweetType[]}, void>({
      query: () => ({url: 'timeline'}),
      providesTags: [{type: 'Tweets', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    getUserTweets: build.query<{count: number; my_tweets: TweetType[]}, void>({
      query: () => ({url: 'my-tweets'}),
      providesTags: [{type: 'Tweets', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    addTweet: build.mutation<{content: string}, any>({
      query: body => ({
        url: 'tweet',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Tweets', id: 'LIST'}],
    }),
  }),
});

export const {useGetTweetsQuery, useAddTweetMutation, useGetUserTweetsQuery} =
  tweetsApi;

export const {
  endpoints: {getTweets, addTweet, getUserTweets},
} = tweetsApi;
