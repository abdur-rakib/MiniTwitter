import {api} from '.';
import {TweetType} from '../types';
import {PAGE_SIZE} from '../utils/constants';

export const tweetsApi = api.injectEndpoints({
  endpoints: build => ({
    getTweets: build.query<{count: number; timeline: TweetType[]}, number>({
      query: (page = 1) => ({url: `timeline?page=${page}&&size=${PAGE_SIZE}`}),

      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({endpointName}) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems, otherArgs) => {
        if (otherArgs.arg === 1) {
          return newItems;
        } else {
          currentCache.timeline.push(...newItems.timeline);
        }
      },
      // Refetch when the page arg changes
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
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
      async onQueryStarted({queryFulfilled}) {
        await queryFulfilled;
      },
      invalidatesTags: [{type: 'Tweets', id: 'LIST'}],
    }),
  }),
});

export const {
  useGetTweetsQuery,
  useLazyGetTweetsQuery,
  useAddTweetMutation,
  useGetUserTweetsQuery,
} = tweetsApi;

export const {
  endpoints: {getTweets, addTweet, getUserTweets},
} = tweetsApi;
