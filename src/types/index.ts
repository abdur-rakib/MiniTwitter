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
  name: string;
  isLoading: boolean;
  error: string;
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

// Redux
export interface UiState {
  isLoading: boolean;
  error: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
