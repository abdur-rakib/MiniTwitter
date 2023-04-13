import {api} from '.';
import {UsersType} from '../types';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    getFollowings: build.query<
      {count: number; followings: UsersType[] | []},
      void
    >({
      query: () => ({url: 'following'}),
      providesTags: [{type: 'Users', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    getFollowers: build.query<
      {count: number; followers: UsersType[] | []},
      void
    >({
      query: () => ({url: 'followers'}),
      providesTags: [{type: 'Users', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    getUsers: build.query<{users: UsersType[] | []}, void>({
      query: () => ({url: 'users'}),
      providesTags: [{type: 'Users', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    searchUser: build.query({
      query: ({token}: {token: string}) => ({
        url: 'search',
        method: 'POST',
        body: {token},
      }),
      transformErrorResponse: error => error.data,
    }),
  }),
});

export const {
  useGetFollowingsQuery,
  useGetFollowersQuery,
  useGetUsersQuery,
  useSearchUserQuery,
} = userApi;

export const {
  endpoints: {getFollowers, getFollowings, getUsers, searchUser},
} = userApi;
