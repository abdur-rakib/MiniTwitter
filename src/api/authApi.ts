import {api} from '.';
import {LoginValuesType, SignupValuesType} from '../types';

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<{token: string}, any>({
      query: (credentials: LoginValuesType) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: error => error.data,
    }),

    signup: build.mutation<{message: string}, any>({
      query: (credentials: SignupValuesType) => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: error => error.data,
    }),
  }),
});

export const {useLoginMutation, useSignupMutation} = authApi;

export const {
  endpoints: {login, signup},
} = authApi;
