import {api} from '.';
import {UsersType} from '../types';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    getFollowings: build.query<{followings: UsersType[] | []}, void>({
      query: () => ({url: 'following'}),
      providesTags: [{type: 'Users', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    getFollowers: build.query<{followers: UsersType[] | []}, void>({
      query: () => ({url: 'followers'}),
      providesTags: [{type: 'Users', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),

    getUsers: build.query<{users: UsersType[] | []}, void>({
      query: () => ({url: 'users'}),
      providesTags: [{type: 'Users', id: 'LIST'}],
      transformErrorResponse: (error: any) => error.data,
    }),
  }),
});

export const {useGetFollowingsQuery, useGetFollowersQuery, useGetUsersQuery} =
  userApi;

export const {
  endpoints: {getFollowers, getFollowings, getUsers},
} = userApi;
