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
