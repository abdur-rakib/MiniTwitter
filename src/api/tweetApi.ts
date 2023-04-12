import {api} from '.';
import {TweetType} from '../types';

export const tweetsApi = api.injectEndpoints({
  endpoints: build => ({
    getTweets: build.query<{timeline: TweetType[]}, void>({
      query: () => ({url: 'timeline'}),
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

export const {useGetTweetsQuery, useAddTweetMutation} = tweetsApi;

export const {
  endpoints: {getTweets, addTweet},
} = tweetsApi;
