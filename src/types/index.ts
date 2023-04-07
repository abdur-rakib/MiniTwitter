import store from '../redux/store';

export interface FORM_VALUES {
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

export interface UserState {
  isAuthenticated: boolean;
  token: string;
  userData: {};
  isLoading: boolean;
  error: string;
}

// Redux Type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
