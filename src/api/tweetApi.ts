import {api} from '.';
import {TweetType} from '../types';

export const tweetsApi = api.injectEndpoints({
  endpoints: build => ({
    getTweets: build.query<{timeline: TweetType[]}, void>({
      query: () => ({url: 'timeline'}),
      // providesTags: (result = []) => [
      //   ...result.map(({id}) => ({type: 'Posts', id} as const)),
      //   {type: 'Posts' as const, id: 'LIST'},
      // ],
      transformErrorResponse: error => error.data,
    }),
    // addPost: build.mutation<Post, Partial<Post>>({
    //   query: body => ({
    //     url: `posts`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: [{type: 'Posts', id: 'LIST'}],
    // }),
  }),
});

export const {useGetTweetsQuery} = tweetsApi;

export const {
  endpoints: {getTweets},
} = tweetsApi;
