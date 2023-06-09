import {store} from '../redux/store';

export interface FormValues {
  [key: string]: string;
}

export interface TweetUserType {
  active: boolean;
  email: string;
  id: number;
  username: string;
}
export interface TweetType {
  content: string;
  id: number;
  published: Date | string;
  user: TweetUserType;
}
export interface CreateTweetProps {
  navigation: any;
}

export interface SingleUserType {
  active: boolean;
  email: string;
  id: number;
  join_date: string;
  username: string;
  following?: boolean | undefined;
}

export interface UsersType {
  count: number;
  followings?: SingleUserType[];
  followers?: SingleUserType[];
  users?: SingleUserType[];
}

export interface UsersInterface {
  isAuthenticated: boolean;
  token: string;
  name: string;
  myTweets: TweetType[];
  myFollowings: SingleUserType[];
  myFollowers: SingleUserType[];
  users: SingleUserType[];
  isLoading: boolean;
  error: string;
}
export interface TweetInterface {
  tweets: TweetType[];
}

export interface LoginValuesType {
  email: string;
  password: string;
}
export interface SignupValuesType {
  username: string;
  email: string;
  password: string;
}

export interface DecodedTokenType {
  id: string;
  exp: number;
}

// component props
export interface ComponentProps {
  navigation: any;
}

// Redux
export interface UiState {
  isLoading: boolean;
  error: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
